var sieve = function(n) {

  // Fill the array with all numbers <= n
  var nums = [];

  for (i = 2; i <= n; i++) { // n
    nums.push(i);
  }

  var primes = [];

  // remove the first prime with shift, delete all its multiples with filter, keep doing this until there's no more numbers
  while (nums.length > 0) { // n
    var nextPrime = nums.shift(); // the first element is always prime // n
    primes.push(nextPrime);

    // filter works like select in ruby, it takes a callback, if this callback returns true it keeps the element, else deletes it
    nums = nums.filter(function(num) { // n
      return num % nextPrime != 0;
    })
  }
  return primes;
}

// n + 2n2
// We like filter and shift, but they are slow

var sieve2 = function(n) {
  // same like above
  var nums = [];

  for (i = 2; i <= n; i++) { // n
    nums.push(i);
  }

  // if any number greater than current element (hence j = i + 1, if we start from 0, we will do this for elements less than current element and they will lead to wrong results)
  // is divisible by current element, delete it with splice
  for (i = 0; i <= nums.length; i++) { // n
    for (j = i + 1; j < nums.length; j++) { // n
      if (nums[j] % nums[i] == 0)
        nums.splice(j, 1); // n
    }
  }

  return nums;
}

// n3 + n
// We like splice but it's slow because it shifts elements, mark deleted instead of splicing


var sieve3 = function(n) {
  var nums = [];

  for (i = 0; i <= n; i++) { // n // we just started from 2 for easy indexing, if we start from 2 like above it will still work but you will need to care about index in the line nums[i * j] = -1 below
    nums.push(i);
  }

  for (i = 2; i <= nums.length; i++) { // n
    for (j = 2; j < nums.length; j++) { // n
      if (i * j <= n)
        nums[i * j] = -1
      else
        break; // exits early if numbers start to be bigger than the boundaries
    }
  }

  // copy the primes, leave dummy -1 and the first two elements (0 and 1)
  primes = [];
  for (i = 2; i <= n; i++) {
    if (nums[i] != -1)
    primes.push(nums[i])
  }

  return primes;
}

// n2 + n, but notice that the inner loop exits early


// get current time before the function
t1 = new Date().getTime();
sieve(100000);
// get current time after the function
t2 = new Date().getTime();
// print the time the function took to execute
console.log(t2 - t1);

// repeat this for the other two functions
t1 = new Date().getTime();
sieve2(100000);
t2 = new Date().getTime();
console.log(t2 - t1);
t1 = new Date().getTime();
sieve3(100000);
t2 = new Date().getTime();
console.log(t2 - t1);
