class Promifill {
    constructor(executor) {

        this.status = "PENDING";
        this.value = undefined;
        this.thenCallBacks = [];
        this.onCatch = undefined;
        this.onFinally = undefined;


        if (typeof executor != "function") {
            throw new TypeError(`Promise resolver must be a function`);
        }

        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }

    resolve(value) {
        this.value = value;
        this.state = "FULFILLED";

        this.thenCallBacks.forEach((myFunc) => {
            myFunc(this.value);
        })

        if (typeof this.onFinally === "function") {
            this.onFinally(this.value);
        }
    };

    reject(reason) {
        this.value = reason;
        this.state = "REJECTED";

        if (typeof this.onCatch === "function") {
            this.onCatch(this.value);
        }

        if (typeof this.onFinally === "function") {
            this.onFinally(this.value);
        }
    };

    then(callback) {
        this.thenCallBacks.push(callback);
        return this;
    }

    catch(callback) {
        this.onCatch = callback;
        return this;
    }

    finally(callback) {
        this.onFinally = callback;
        return this;
    }
}

let getCountryList = function () {
    return new Promifill((resolve, reject) => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                resolve(response);
            })
            .catch((e) => {
                reject(e);
            })
    })
}

getCountryList()
    .then((val) => {
        console.log(val)
    }).catch((e) => {
        console.log(e);
    })