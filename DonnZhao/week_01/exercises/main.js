//
// Part 1
//
// Write a function called squareNumber that will take one argument (a number),
//square that number, and return the result.
//It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number),
//divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers,
//figure out what percent the first number represents of the second number,
//and return the result. It should also log a string like "2 is 50% of 4."



var squareNumber = function (num) {
  var result = num*num;
  console.log( 'The result of squaring the number ' + num + ' is ' + result);
    return result;
}

var halfNumber =  function ( num1 ) {
  var result1 = num1/2;
  console.log( 'Half of ' + num1 + ' is ' + result1);
  return result1;
}

var percentOf = function (numA, numB) {
  var resultA =  numA/numB * 100
  console.log ( numA + " is " + resultA + ' % of ' + numB) ;
    return resultA;
}


// Write a function called areaOfCircle that will take one argument (the radius),
//calculate the area based on that, and return the result.
//It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.


var areaOfCircle = function (radius) {
   var resultN = (Math.PI * radius * radius).toFixed(2);
   console.log ( ' The area for a circle with radius ' + radius + ' is ' + resultN)
   return resultN
}


//
// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations,
// using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var part2 = function ( numP2 ) {

  var half2 = halfNumber (numP2) ;
  var square2 = squareNumber ( half2 ) ;
  var area2 = areaOfCircle ( square2 );
  var percentage = percentOf(area2, square2);
  console.log ( percentage )
}
