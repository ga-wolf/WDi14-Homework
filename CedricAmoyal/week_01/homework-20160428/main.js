// The Calculator
// Part 1
//
// Write a function called squareNumber that will take one argument (a number),
// square that number, and return the result. It should also log a string like
//  "The result of squaring the number 3 is 9."

var squareNumber = function (numb1) {
  var sqResult = numb1 * numb1;
  console.log("The results of squaring the number " + numb1 + " is " + sqResult );
  return sqResult;
}

// Write a function called halfNumber that will take one argument (a number),
// divide it by 2, and return the result. It should also log a string like
// "Half of 5 is 2.5.".

var halfNumber = function (numb1) {
  var haResult = numb1 / 2;
  console.log("Half of " + numb1 + " is " + haResult );
  return haResult;
}


// Write a function called percentOf that will take two numbers, figure
// out what percent the first number represents of the second number, and
// return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function (numb1, numb2) {
  var perResult = numb1 * numb2 / 100;
  console.log(perResult + " is " + numb1 + "% of " + numb2 );
  return perResult;
}

// Write a function called areaOfCircle that will take one argument (the radius),
// calculate the area based on that, and return the result. It should also log a
// string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

var areaOfCircle = function (numb1) {
  var areaResult = numb1 * numb1 * 3.14;
  console.log("The area for a cercle with radius " + numb1 + " is " + areaResult );
  return areaResult;
}

//
// Part 2
//
// Write a function that will take one argument (a number) and perform
// the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var part2 = function (numb1) {

var line1 = halfNumber(numb1);
var line2 = squareNumber(line1);
var line3 = areaOfCircle(line2);
var line4 = percentOf(line3,line2);

}
//
// DrEvil
//
// Create a function called DrEvil. It should take a single argument,
// an amount, and return ' dollars', except it will add '(pinky)' at the end if
// the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var DrEvil = function (numb1) {
  if (numb1 === 1000000){
    console.log("DrEvil(1000000): 1000000 dollars (pinky)");
  } else { console.log("DrEvil (" + numb1 + ") : " + numb1 + "dollars");
}
  }


  // MixUp
  //
  // Create a function called mixUp. It should take in two strings, and
  //return the concatenation of the two strings (separated by a space)
  // slicing out and swapping the first 2 characters of each. You can assume that
  //the strings are at least 2 characters long. For example:
  //
  //   mixUp('mix', pod'): 'pox mid'
  //   mixUp('dog', 'dinner'): 'dig donner'
  // Look up the JavaScript string reference to find methods
  //which may be useful!
  //

//   var str1 = 'The morning is upon us.';
// var str2 = str1.slice(4, -2);
//
// console.log(str2); OUTPUT: morning is upon u


var mixUp = function (string1, string2) {
  var resultString1 = string1.substr(1);
  var resultString2 = string2.substr(1);
  var resultString1 = string2.charAt(0) + resultString1;
  var resultString2 = string1.charAt(0) + resultString2;
  var message = string1 + " " + string2 + " became " + resultString1 + " " + resultString2;
  return message;
}
//
// FixStart
//
// Create a function called fixStart. It should take a single argument, a string,
// and return a version where all occurences of its first character have been
// replaced with '*', except for the first character itself. You can assume that
// the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

var fixStart = function (strinGG) {

  var newStrinGG = strinGG[0];

  for (var i = 1; i < strinGG.length; i++) {

  if ( strinGG[i] !== strinGG[0]){
    newStrinGG += strinGG[i];
  }

  if ( strinGG[i] === strinGG[0]){
    newStrinGG += "*";
  }
}
  return newStrinGG;
}


// Verbing
//
// Create a function called verbing. It should take a single argument,
//a string. If its length is at least 3, it should add 'ing' to its end,
//unless it already ends in 'ing', in which case it should add 'ly' instead.
//If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbing = function (strinGGG) {

var newStrinGGG = strinGGG;

  if (strinGGG.length > 2 && strinGGG.endsWith('ing')) {
    newStrinGGG += "ly";
  }
  else if (strinGGG.length > 2) {
    newStrinGGG += "ing";
  }

   return newStrinGGG
}

// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
// substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all),
// just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
//'Blue Whale'.includes('blue'); // returns false



var notBad = function (strinGGGG) {
      var newStringCombinaison = strinGGGG;
      var notWord = strinGGGG.indexOf('not');
      var badWord = strinGGGG.indexOf('bad');

          console.log( notWord + " and " + badWord);

      if (0 <= notWord < badWord) {
         var newStringPart1 = strinGGGG.split("not");
              console.log(newStringPart1);
         var newStringPart2 = strinGGGG.split("bad");
              console.log(newStringPart2);
         var newStringCombinaison = newStringPart1[0] + "very good" + newStringPart2[1];
       }
       return newStringCombinaison;
      }

      //
      // Leap Year Warmup Exercise
      // Do this in HTML and JS!
      //
      // Write a function that will take any given year and return
      //whether it is a leap year or not. Remember that a leap year is:
      //
      // Every year that is evenly divisible by 4
      // Except if it is evenly divisible by 100...
      // Unless it is also divisible by 400
      // Test Data... Make sure it is working!

var leapYear = function (yearY){
  var yearY = prompt("What year do you want to check?");
            if (yearY % 4 === 0){
                    if (yearY % 400 === 0) {
                      console.log(yearY + " is a leap year, it should return true");
                    }
                    else if (yearY % 100 === 0) {
                      console.log(yearY + " is not leap year, it should return false");
                    } else {
                      console.log(yearY + " is a leap year, it should return true");
                    }
            } else {console.log(yearY + " is not leap year, it should return false");
          }
          console.log("hello");
          return yearY;

}
