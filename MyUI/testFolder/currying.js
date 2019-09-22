let sum = a => b => b ? sum(a + b) : a

console.log(sum(1)(2)(3)(4)())


//Another Implementation
let sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    }
}


//Curry example

function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(null, args);
      } else {
        return function(...args2) {
          return curried.apply(null, [...args,...args2]);
        }
      }
    };
  }
  
  
  function sum(a, b, c) {
    return a + b + c;
  }
  
  let curriedSum = curry(sum);
  
  console.log(curriedSum(1)(2)()()()(3))
