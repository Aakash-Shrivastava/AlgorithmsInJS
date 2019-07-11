let bind = function (func, context) {
    let previousArgs = [...arguments];
    return function () {
        let currentArgs = [...arguments];
        let combinedArgs = [...previousArgs, ...currentArgs];
        return func.apply(context, combinedArgs);
    }
};



var module = {
    x: 42,
    getX: function () {
        return this.x;
    }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());