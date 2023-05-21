var arr;
function sumFibonacci(num) {
    if (num <= 1)
        return num;
    return sumFibonacci(num - 1) + sumFibonacci(num - 2);
}
function displayFibonacci(n) {
    var result = [0, 1];
    for (var i = 2; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result;
}
var num = 3;
console.log("Số lượng phần tử là : " + num);
console.log("Dãy Fibonacci là: " + displayFibonacci(num));
console.log("Sum của Fibonacci là: " + sumFibonacci(num));
