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

// console.log(sieve(1000));

var sieve2 = function(n){
  var nums = [];

  for(i=2; i <= n; i++){ // n
    nums.push(i);
  }

  for (i = 0; i <= nums.length; i++){ // n
    for(j = i+1; j < nums.length; j++){ // n
        if(nums[i] % nums[i] == 0)
        nums.splice(j,1);// n
      }
  }
  return nums;
}

// console.log(sieve2(10));


var sieve3 = function(n){
  var nums = [];
  for (i = 0; i <= n; i++){//n
    nums.push(i);
  };

  for (i = 2; i <= nums.length; i++){//n
    for( j = 2; j < nums.length; j++){//n
      if( i * i <= n)
        nums[ i * j] = -1
      else
        break;
    }
  }
  
  primes = [];
  for( i = 0; i <= n; i++){
    if ( nums[i] != -1 )
      primes.push(nums[i])
  }
  return primes;
}

// n2 + n



t1 = new Date().getTime();
console.log(sieve3(10));
t2 = new Date().getTime();
console.log( t2 - t1);
