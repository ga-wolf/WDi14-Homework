var sieve = function (n) {
  var nums = [];

  for (var i = 0; i < n; i++) {
    nums.push(i);
  };
    var primes = []

    while (nums.length > 0) {
      var nextPrime = nums.shift();
      primes.push(nextPrime);

      nums = nums.filter(function (num) {
       num % nextPrime != 0;
      })
    };
  return primes;
}
console.log(sieve(1000));
