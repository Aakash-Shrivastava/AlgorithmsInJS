Function.prototype.mybind = function (...args) {
    let context = this;
    let previousArgs = args.slice(1);
    return function (...currentArgs) {
        let combinedArgs = [...previousArgs, ...currentArgs];
        context.apply(args[0], combinedArgs);
    }
};

let name = {
    firstname: "Aakash",
    lastname: "Shrivastava"
}

let printName = function (hometown, state, country) {
    console.log(this.firstname + " " + this.lastname + " , " + hometown + ", " + state + ", " + country);
}

let printMyName2 = printName.mybind(name, "Dehradun", "Uttarakhand");
printMyName2("India");