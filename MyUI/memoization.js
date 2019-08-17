// Fibonnaci

function fibonacciRecursiveObjDefault(num, cache = {}) {
    //base case as normal
    if (num === 0) return 0;
    else if (num === 1) return 1;
    if (cache[num]) return cache[num]; //retrieve cached data if exists
    let output = fibonacciRecursiveObjDefault(num - 1, cache) + fibonacciRecursiveObjDefault(num - 2, cache); //recursive call as normal
    cache[num] = output; //store output into the cache for future use

    return output;
}


// Factorial

const memo = {}
function memoFac(n) {
    if (memo[n]) return memo[n];
    else {
        if (n === 0) { memo[n] = 1 }
        else { memo[n] = n * memoFac(n - 1) }
        return memo[n]
    }
}