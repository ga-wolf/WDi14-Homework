// The Calculator
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
//

var squareNumber = function ( numOne ) {
  var squaredNumber = numOne * numOne
  var message = "The result of squaring the number " + numOne + " is " + squaredNumber + ".";
  console.log( message );
  return squaredNumber;
};

squareNumber ( 25 );

var halfOf = function ( numOne ) {
  var half = numOne / 2
  var message = "Half of " + numOne + " is " + half + ".";
  console.log( message );
  return half;
};

halfOf ( 130 );

var percentOf = function ( numOne, numTwo ) {
  var percent = ( numOne / numTwo ) * 100
  var message = numOne + " is " + percent +  "% of " + numTwo + ".";
  console.log( message );
  return percent;
};

percentOf ( 5, 50 );

var areaOfCircle = function ( radius ) {
  var area = Math.PI * radius * radius
  var message = "The area for a circle with radius " + radius + " is " + area + ".";
  console.log( message );
  return area;
};

areaOfCircle ( 20 );

//
// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var crazyOperation = function ( num ) {
  var half = halfOf ( num );
  var squared = squareNumber ( half );
  var area = areaOfCircle ( squared );
  var result = percentOf ( squared, area );
};

crazyOperation ( 2 );

//
// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
//
var drEvil = function ( money ) {
  if ( money === "1000000" ) {
    console.log( money + " dollars (pinky)");
  } else {
    console.log( money + " dollars");
  }
};

drEvil("50000");

//
// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//

var mixUp = function ( aString, bString ) {
    var str1 = aString;
    var str2 = str1.slice (0,2); // Ra
    var str3 = str1.slice (2); { // bbit
      var str4 = bString;
      var str5 = str4.slice (0,2); // Ho
      var str6 = str4.slice (2); // le
    }

  console.log( str5 + str3 + " " + str2 + str6 );

};

mixUp ( "Cat", "Dog" );

//
// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

var babbleThing = function( stringy ) {
  var splitString = stringy.split("");

  for( var i = 1; i < splitString.length; i++ ) {
  if( splitString[i] === splitString[0] ) {
    splitString[i] = "*";
  }
}
  console.log(splitString.join(""));
}

babbleThing("babble");

// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbing = function( word ) {
  if ( word.length < 3 ) {
    console.log( word );
  } if ( word.slice(-3) === "ing" ) {
    console.log( word + "ly" );
  } else {
    console.log( word + "ing" );
  }
}

verbing( "swimming" );

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

var notBad = function ( sentence ) {
  var notIndex = sentence.indexOf( "not" );
  var badIndex = sentence.indexOf( "bad" );
  if (notIndex == -1 || badIndex == -1 || badIndex < notIndex) {
    console.log( sentence );
  } else {
  console.log( sentence.slice(0, notIndex) + "good" + sentence.slice(badIndex + 3) );
  }
}

notBad( "This movie is bad!" );
