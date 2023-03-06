function fibonacci(number : number): number {
    if(number < 2){
        return number;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}


function result(number: number): string {
    let fibonacciArray: Array<number> = [];
    let sum: number = 0;
    for (let i = 0; i < number; i++) {
        let fibonacciNumber = fibonacci(i);
        fibonacciArray.push(fibonacciNumber);
        sum += fibonacciNumber;
    }
    return number + " phần tử đầu tiền của dãy Fibonacci là: " + fibonacciArray.toString() +
        " với tổng của chúng là: " + sum
}

console.log(result(10));

