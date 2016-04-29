// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.


var squareNumber = function (num) {
  var result = num * num;
  var message = "The result of squaring the number " + num + " is " + result + ".";
  console.log( message );
  return result;
};

var halfNumber = function (num) {
  var result = num / 2;
  var message = "The result of halving the number " + num + " is " + result + ".";
  console.log( message );
  return result;
};

var percentOf = function (numOne, numTwo) {
  var result = ( numOne / numTwo ) * 100;
  var message = numOne + " is " + result + "% of " + numTwo + ".";
  console.log( message );
  return result;
};

var areaOfCircle = function (radius) {
  var resultOne = Math.PI * (radius * radius);
  var resultTwo = resultOne.toFixed(2)
  var message = "The area of a circle with the radius " + radius + " is " + resultTwo + ".";
  console.log( message );
  return resultTwo;
};

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
var finalCalculator = function ( num ) {
  var half = halfNumber(num);
  var square = squareNumber(half);
  var area = areaOfCircle(square);
  var percent = percentOf( area, square);
  console.log( "Your " + num + " halved, then squared, then used as the radius to calculate the area of a circle and then used to calculate the percentage of the area of squared number is, is: " + percent + "." )
}



//
