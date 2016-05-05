var math = function() {

  function sum(num, num) {
    return num + num;
  }
  
  function product(num, num) {
    return num * num;
  }

  function pow(num, num) {
    return Math.pow(num, num);
  }

  function factorial(num) {
    var rval=1;
    for (var i = 2; i <= num; i++) {
      rval = rval * i; 
    }
    return rval;
  }

  return {
    sum: sum,
    product: product,
    pow: pow,
    factorial: factorial
  }
}();
