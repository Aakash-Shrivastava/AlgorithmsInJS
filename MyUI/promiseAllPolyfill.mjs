// run this file using node  --experimental-modules promiseAllPolyfill
import fetch from 'node-fetch';

class PromifillAll {
    constructor() {

        this.status = "PENDING";
        this.values = [];
        this.thenCallBacks = [];
        this.onCatch = undefined;
        this.onFinally = undefined;
        this.totalPromises = 0;
        return this;
    }
    all(executors) {
        this.totalPromises = executors.length;
        executors.forEach(executor => {
            try {
                executor.then((value) => {
                    this.resolve(value);
                })
            } catch (error) {
                this.reject(error);
            }
        });
        return this;
    }

    resolve(value) {
        this.values.push(value);
        this.status = "FULFILLED";
        if (this.values.length === this.totalPromises) {
            this.thenCallBacks.forEach((myFunc) => {
                myFunc(this.values);
            })
            if (typeof this.onFinally === "function") {
                this.onFinally(this.values);
            }
        }
    };

    reject(reason) {
        this.value = reason;
        this.status = "REJECTED";

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

let getCountryList = new Promise((resolve, reject) => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            resolve(response[0]);
        })
        .catch((e) => {
            reject(e);
        })
});

let getEmpList = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            resolve(response);
        })
        .catch((e) => {
            reject(e);
        })
});

let myPromifillAll = new PromifillAll();
myPromifillAll.all([getCountryList, getEmpList])
    .then(function (values) {
        console.log("Value 0:", values[0]);
        console.log("Value 1:", values[1]);
    });