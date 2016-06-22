var fibRecur = function (n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

var fibLoop = function(start, end) {
    var fibNum = [];
    for (var i = start; i < end; i += 1) {
        var currentFib;
        if (i < 1) {
            fibNum.push(0);
        } else if ( i <= 2) {
            fibNum.push(1);
        } else {
            fibNum.push(fibNum[i - 1] + fibNum[i -2]);
        }
    }
    return fibNum[fibNum.length - 1];
}

console.log(fibLoop(0, 15));
