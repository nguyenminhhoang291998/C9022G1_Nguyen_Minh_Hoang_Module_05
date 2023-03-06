function fibonacci(number) {
    if (number < 2) {
        return number;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
function result(number) {
    var fibonacciArray = [];
    var sum = 0;
    for (var i = 0; i < number; i++) {
        var fibonacciNumber = fibonacci(i);
        fibonacciArray.push(fibonacciNumber);
        sum += fibonacciNumber;
    }
    return number + " phần tử đầu tiền của dãy Fibonacci là: " + fibonacciArray.toString() +
        " với tổng của chúng là: " + sum;
}
console.log(result(10));
