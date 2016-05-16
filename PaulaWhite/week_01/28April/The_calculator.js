// The Calculator
//Write a function called squareNumber that will take one argument (a number),
//square that number, and return the result. It should also log a string like
//"The result of squaring the number 3 is 9."

var squareNumber = function (number){
var result = number * number
var message = (" The result of squaring the number " + number + " is " + result);
console.log (message);
return result
}
squareNumber(8);

//Write a function called halfNumber that will take one argument (a number),
//divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function ( number) {
  var result = number / 2
  var message = ( " Half of " + number + " is equal to " + result)
  console.log (message);
  return result
}
halfNumber(4);

//Write a function called percentOf that will take two numbers,
//figure out what percent the first number represents of the second number,
//and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function (numOne, numTwo) {
  var result = numOne / numTwo * 100
  var message = ( numOne +  " is " + result + "% of " + numTwo)
  console.log(message);
  return result
}

percentOf (5, 10);

//Write a function called areaOfCircle that will take one argument
//(the radius), calculate the area based on that, and return the result.
//It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

var areaOfCircle = function ( radius ) {
  var area = Math.PI * radius * radius
  var message = ("The area for a circle with radius " + radius + " is " + area)
  console.log(message);
  return area;
}

var area = areaOfCircle (2);
var rounded = area.toFixed(2);
console.log(rounded);


// Part 2

var halfNumber = function ( number) {
  var result = number / 2
  var message = ( " Half of " + number + " is equal to " + result)
  console.log (message);
  return result
}

halfNumber(10);

var squareNumber = function (number){
var result = number * number
var message = (" The result of squaring the number " + number + " is " + result);
console.log (message);
return result
}
squareNumber(5);

var areaOfCircle = function ( radius ) {
  var area = Math.PI * radius * radius
  var message = ("The area for a circle with radius " + radius + " is " + area)
  console.log(message);
  return area;
}

var area = areaOfCircle (25);
var rounded = area.toFixed(2);
console.log(rounded);

var percentOf = function (numOne, numTwo) {
  var result = numOne / numTwo * 100
  var message = ( numOne +  " is " + result + "% of " + numTwo)
  console.log(message);
  return result
}

percentOf (1963.50, 25);
