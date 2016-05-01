// The Calculator
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
// It should also log a string like "The result of squaring the number 3 is 9."
//
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
//
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result.
// It should also log a string like "2 is 50% of 4."
//
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result.
// It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//
// Bonus: Round the result so there are only two digits after the decimal.
//
// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).


// PART 1
// Exercise 1 - Square Number
var squareNumber = function(num1) {
  var result = num1 * num1;
  console.log("The result of squaring the number " + num1 + " is " + result);
  return num1 * num1
};

// squareNumber(5);

// Exercise 2 - Half Number
var halfNumber = function (num2) {
  var result = num2 / 2;
  console.log("Half of " + num2 + " is " + result);
  return num2 / 2;
}

// halfNumber(16);

// Exercise 3 - Percent Of Number
var percentOf = function (num3, num4) {
  var result = num3 / num4;
  var pctResult = (result*100).toFixed(1)+"%";
  console.log(num3 + " is " + pctResult + " of " + num4);
  return pctResult;
}

// percentOf(3,9);

// Exercise 4 - Area of Circle
var areaOfCircle = function (radius) {
  var areaCalc = Math.PI * radius * radius;
  var areaCalcRounded = areaCalc.toFixed(2);
  console.log("The area of a circle with a radius of " + radius + " is " + areaCalcRounded);
  return areaCalcRounded;

};

// areaOfCircle(5);

// PART 2
var areaOfCircleWithoutLog = function (radius) {
  var areaCalc = Math.PI * radius * radius;
  var areaCalcRounded = areaCalc.toFixed(2);
  return areaCalcRounded;

};

var performAllOperations = function (num){
  var result = num/2;
  var resultSquared = result * result;
  var resultArea = parseFloat(areaOfCircleWithoutLog(resultSquared));
  var resultPercentage = parseFloat((resultArea / resultSquared).toFixed(2));

console.log(result);
console.log(resultSquared);
console.log(resultArea);
console.log(resultPercentage);
};

// performAllOperations(100);
