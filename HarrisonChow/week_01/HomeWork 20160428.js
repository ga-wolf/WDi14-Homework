// The Calculator
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

var squareNumber = function (x) {
  var result = x * x;
  var message = "The result of squaring the number " + x + " is " + result;
  console.log(message);
  return result;
}

var halfNumber = function (x) {
  var result = x / 2;
  var message = "Half of " + x + " is " + result;
  console.log(message);
  return result;
}

var percentOf = function (x,y) {
  var result = Math.floor(x / y * 100);
  var message = x + " is " + result + "% of " + y;
  console.log(message);
  return result;
}

var areaOfCircle = function (x) {
  var result = Math.round(Math.PI * x * x);
  var message = "The area for a circle with radius " + x + " is " + result;
  console.log(message);
  return result;
}


// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
var finalFun = function (x){
  var halfNumberResult = halfNumber(x);
  var squareNumberResult = squareNumber(halfNumberResult);
  var areaOfCircleResult = areaOfCircle(squareNumberResult);
  percentOf(areaOfCircleResult);
}

//
// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:


var DrEvil = function (amount) {
  if( amount > 1 && amount != 1000000 ){
    console.log( amount + " dollars");
  } else if ( amount <= 1) {
    console.log( amount + " dollar");
  } else if(amount === 1000000){
    console.log( amount + " dollars " + "\(pinky\)");
  } else {
    console.log( "Please Input the number greater than zero.");
  }
}

// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

//Version One
var mixUp = function (strOne, strTwo) {
  // debugger;
  var newStrOne = strOne.split("");
  var newStrTwo = strTwo.split("");
  var copOne = newStrOne[0];
  var copTwo = newStrOne[1];
  if (strOne.length > 2 && strTwo.length > 2 ) {
    newStrOne[0] = newStrTwo[0];
    newStrOne[1] = newStrTwo[1];
    newStrTwo[0] = copOne;
    newStrTwo[1] = copTwo;
  }
  console.log(newStrOne.join(""), newStrTwo.join(""));
}

// Version Two
var mixUp = function(strOne, strTwo) {
  if ( strOne.length >= 2 && strTwo.length >= 2 ) {
    var leftStrOne = strOne.substring(0, 2);
    var leftStrTwo = strTwo.substring(0, 2);
    var rightStrOne = strOne.substring(2, strOne.length );
    var rightStrTwo = strTwo.substring(2, strOne.length );
    var newStrOne = leftStrTwo + rightStrOne;
    var newStrTwo = leftStrOne + rightStrTwo;
    console.log(newStrOne, newStrTwo);
  } else {
    console.log(strOne, strTwo);
  }
}

// mixUp("minx", "dssa");
// mixUp("xx", "ss");


// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'


var babbleThing = function(stringy){
  var splitString = stringy.split("");

  for (var i = 1; i < splitString.length; i++) {
    if (splitString[i] === splitString[0]) {
      splitString[i] = "*";
    }
  }
  console.log(splitString.join(""));
}


// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbing = function (newStr) {
  var splitStr = newStr.substr(newStr.length-3, 3);
  if ( newStr.length < 3 ) {
    console.log(newStr);
  } else if (newStr.length >= 3 && splitStr != "ing") {
    console.log(newStr + "ing");
  } else {
    console.log(newStr + "ly");
  }
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




var notBad = function(oldStr){
  var indexOfNot = oldStr.indexOf("not");
  var indexOfBad = oldStr.indexOf("bad");
  var newStr;
  if( indexOfBad > indexOfNot && indexOfNot != -1){
    newStr = oldStr.replace(oldStr.substr(indexOfNot, indexOfBad - indexOfNot + 3), 'good');
  } else {
    newStr = oldStr;
  }
  return newStr;
}

//
//
// notBad("This dinner is not that bad!");
// notBad("This movie is not so bad");
// notBad("This dinner is bad!");
// notBad("This dinner is bad not!");
