var s1 = function(n) {
  // var sum = 0;
  // for (var i = 1; i <= n; i++) {
  //   if (i % 2 == 0) {
  //     sum -= 1;
  //   } else {
  //     sum += 1
  //   }
  // }
  // return sum;

  // if (n % 2 == 0)
  //   return 0;
  // else
  //   return 1;

  return n % 2 == 0 ? 0 : 1;
}
// 1 - 1 + 1 - 1 + .... = 1/2
var s2 = function(n) {
  // var sum = 0;
  // for (var i = 1; i <= n; i++) {
  //   sum += i;
  // }
  // return sum;
  return (n * (n + 1)) / 2;
}
// 1 + 2 + 3 + 4 + .... = -1/12

console.log(s1(6));
console.log(s2(5));
