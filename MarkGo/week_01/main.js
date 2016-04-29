//I need to have a starting point
//I need to have a condtion
//I need a step (some way to make the condition evaluate to fals - to end the loop)

// var count = 10;
// while (count > 0) {
//  console.log( count );
//
//    count -= 1;
// }
// console.log( "Lift off!");
//
// //for (start; condition or an end; step)
// for (var count = 10; count > 0; count -= 1) {
//   console.log( count );
// }
// console.log("Lift off!");

// I want to have some way of saying my 9 times tables
// I want to do that using a function called multiplyNumbers
//1 through 12

// var multiplyNumbers = function (numOne, factor) {
//   var result = numOne * factor;
//   var message = "numOne multiplied by " + factor + " is " + result;
//   console.log( message );
//   return result;
// }
//
// for (var i = 1; i <= 12; i += 1){
//   multiplyNumbers( 7, i );
// }
//
// for (var i = 0; i <= 1010; i += 1) {
//   console.log( i );
//   if (i === 7){
//     break; // pause button
//   }
// }
//
// for (var j = 1; j <= 12; j += 1){
//   console.log("J is now " + j);
//  for (var i = 1; i <= 12; i += 1){
//    multiplyNumbers( j, i );
//  }
// }
//
// var printOutLetters = function ( name ){
//  for (var i = 0; i < name.length; i += 1) {
//    var currentletter = name.charAt(i);
//    console.log( "Letter  " + i + " is " + currentletter );
//  }
// };
//
// printOutLetters ( "Chico" )

DAY 3 Exercises and Homework

// The even/odd reporter
//
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

var evenOrOdd = function (num){
  for( var i = 0; i <= num; i += 1 ) {
    if (i % 2 === 0) {
      console.log( i + " is even" );
    } else {
      console.log( i + " is odd" );
    }
  }
};
evenOrOdd(20);

// Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

var multiplyNumbers = function (numOne, numTwo) {
  var result = numOne * numTwo;
  var message = numOne + " multiplied by " + numTwo + " is " + result;
  console.log( message );
  return result;
};
for (var numTwo = 1; numTwo <= 10; numTwo += 1){
  console.log("numTwo is now " + numTwo);
} for (var numOne = 1; numOne <= 10; numOne += 1){
  multiplyNumbers( numOne, numTwo );
}
multiplyNumbers (numOne, numTwo);

// The Grade Assigner
//
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

???


// The Calculator
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
var randomNum = 2;
var numResult;
var squareNumber = function(num) {
var result = num * num;
  return result;
}
numResult = squareNumber (randomNum);
var message = "The result of squaring the number " + randomNum + " is " + numResult + "." ;
console.log(message)


var randomNum = 10;
var numResult;
var halfNumber = function(num) {
  var result = num / 2;
  return result;
}
numResult = halfNumber (randomNum);
var message = "Half of " + randomNum + " is " + numResult + "." ;
console.log(message);

var percentOf = function (numOne, numTwo) {
  result = numOne / numTwo;
  return result;
}
console.log(result + " is " + numTwo + "% of " + numOne + ".");

var areaOfCircle = function (radius) {
  result = Math.PI * radius * radius;
  return result;
  var result = num.toFixed(2);
}
console.log("The area for a circle with radius " + radius + " is " + result);

// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
var calc = function(num){
console.log("Your input number" + num)
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).


// DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

  var drEvil = function (amount) {
    var message;
  if (amount == 1000000) {
     message = amount + " dollars (pinky)";
  } else {
    message = amount + " dollars";
  }return message;
};

// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixup = function (x,y){

}


// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
fixStart('babble'): 'ba**le'

var babbleThing = function(stringy){
var splitString = stringy.split("");

for (var i = 1; i < splitString.length; i += 1) {
  if( splitString [i] === splitString[0] ){
    splitString[i] = "*";
  }
}
console.log(splitString.join(""));
}

// Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbing = function(string) {

}

// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

var notBad = function(string) {

}
