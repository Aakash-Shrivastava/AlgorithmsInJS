// Normal Fibonnaci
function fib(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(8));



// TCO fibonnaci
function fib(n, sum = 0, prev = 1) {
    if (n <= 1) return sum;
    return fib(n - 1, prev + sum, sum);
}
console.log(fib(8));