// The Calculator
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.


var squareNumber = function( num ) {
  var result = num * num;
  var message = "The result of squaring the number " + num + " is " + result;
  console.log(message);
  return result;
};

var halfNumber = function( num ) {
  var result = num / 2;
  var message = "Half of " + num + " is " + result;
  console.log(message);
  return result;
};

var percentOf = function ( numOne, numTwo ) {
  var result = numOne / numTwo * 100
  var message = numOne + " is " + result + "% of " + numTwo;
  console.log(message);
  return result;
};

var areaOfCircle = function( rad ) {
  var result = Math.PI * rad * rad;
  var resultRound = result.toFixed(2);
  var message = "The area of a circle with radius " + rad + " is " + resultRound;
  console.log(message);
  return resultRound;
};

// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var getMathed = function( num ) {
  var half = halfNumber( num );
  var square = squareNumber( half );
  var area = areaOfCircle( square );
  var percent = percentOf( area, square );
  console.log("You done Mathed up son.")
};


// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var drEvil = function ( dolla ) {
  message = dolla + " dollars";
  if( dolla === 1000000 ) {
    message += " (pinky)";
  }
  return message;
};

// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function ( strOne, strTwo ) {
  var newStrOne = strTwo.slice(0,1) + strOne.slice(1,strOne.length);
  var newStrTwo = strOne.slice(0,1) + strTwo.slice(1,strTwo.length);
  var message = newStrOne + " " + newStrTwo;
  console.log(message);
};


// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

var fixStart = function( str ) {
  var splitString = str.split("");

  for( var i = 1; i < splitString.length; i++ ){
    if(splitString[i] === splitString[0]){
      splitString[i] = "*";
    }
  }
console.log(splitString.join(""))
};


// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbing = function ( str ) {
  var lastThreeLetters = str.slice(-3,str.length);
  var newStr = "";

  if(str.length < 3){
    newStr = str;
  } else if(lastThreeLetters === "ing"){
    newStr = str + "ly";
  } else {
    newStr = str + "ing";
  }

  return newStr;

};


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

var notBad = function( str ) {
  str = str.toLowerCase();
  var startOfNot = str.search("not");
  var startOfBad = str.search("bad");
  var newStr = "";

  if(startOfNot !== -1 && startOfNot < startOfBad){
    newStr = str.slice(0,startOfNot) + "good" + str.slice(startOfBad + 3, str.length);
  } else {
    newStr = str;
  }

  return newStr;
};
