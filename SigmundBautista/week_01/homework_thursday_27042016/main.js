//The Calculator: Part 1
//================================================================================
// Write a function called squareNumber that will take one argument (a number),
// square that number, and return the result. It should also log a string like
// "The result of squaring the number 3 is 9."
//
// Write a function called halfNumber that will take one argument (a number),
// divide it by 2, and return the result. It should also log a string like "Half of
// 5 is 2.5.".
//
// Write a function called percentOf that will take two numbers, figure out what
// percent the first number represents of the second number, and return the result.
//  It should also log a string like "2 is 50% of 4."
//
// Write a function called areaOfCircle that will take one argument (the radius),
// calculate the area based on that, and return the result. It should also log a
// string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
//
// var squareNumber = function(num) {
//   var squareNumberResult = num * num;
//   console.log("The result of squaring the number " + num + " is " + squareNumberResult);
//   return squareNumberResult;
// };
//
// var halfNumber = function(num)  {
//   var halfNumberResult = num / 2;
//   console.log("Half of " + num + " is " + halfNumberResult);
//   return halfNumberResult;
// };
//
// var percentOf = function(numOne, numTwo) {
//   var percentOfResult = (numOne / numTwo) * 100;
//   console.log(numOne + " is " + percentOfResult + "% of " + numTwo);
//   return percentOfResult;
// }
//
// var areaOfCircle = function(radius) {
//   var areaOfCircleResult = Math.PI * radius * radius;
//   console.log("The area for a circle with radius " + radius + " is " + areaOfCircleResult.toFixed(9));
// };

//The Calculator: Part 2
//================================================================================
// Write a function that will take one argument (a number) and perform the following
// operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
//
// var aNumber = function(num) {
//   var results = num;
//   halfNumber(results);
//   squareNumber(results);
//   areaOfCircle(results);
//   percentOf(results, squareNumber(results));
//
//
// };
//
// aNumber(1000);
//
//Dr Evil
//================================================================================
// Create a function called DrEvil. It should take a single argument, an amount,
// and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million.
// var drEvil = function(amount) {
//   if(amount === 1000000)  {
//     console.log(amount +" dollars(pinky)")
//   } else {console.log(amount + " dollars")
//   };
// };
//
// drEvil(1000000);
//
//MixUp
//================================================================================
// Create a function called mixUp. It should take in two strings, and return the
// concatenation of the two strings (separated by a space) slicing out and swapping
// the first 2 characters of each. You can assume that the strings are at least 2
// characters long.
//
// var mixUp = function (wordOne, wordTwo) {
// var wordOne = wordOne.split("");
// var wordTwo = wordTwo.split("")
// var str1 = wordOne[1]
// var str2 = wordTwo[2]
// wordOne[1] = str2;
// wordTwo[2] = str1;
// console.log(wordOne.join("") + " " + wordTwo.join(""));
// };
//
// mixUp("joh", "kun")
//

// Verbing
// ================================================================================
// Create a function called verbing. It should take a single argument, a string.
// If its length is at least 3, it should add 'ing' to its end, unless it already
// ends in 'ing', in which case it should add 'ly' instead. If the string length is
// less than 3, it should leave it unchanged. For example:
// determine lenght of string
// minus length of string by 3
// check if ing is present if so break
// check if s is present if so pop last
// if not add ing
//
var verbing = function(word)  {
  var word3 = word.slice(-3);
  var ingWordLength = word.subString(word.length - 3);

  if(word.length <= 3){
    console.log(word);
  }  else if( word3 === "ing" )  {
    console.log(word.slice(ingWordLength) +"ly" );
  } else {
    console.log(word + "ing");
  }

};
verbing ("howeverying")
//
//
// var verbing = function(word)  {
// var word = word.split("");
// if (word.length <= 3) {
//   console.log(word.join(""));
// } else if(word[-2] === "i" && word[-1] === "n" && word[-0] === "g")  {
//     word[-0] = " ";
//     word[-1] = "l";
//     word[-2] = "y";
//     console.log(word.join(""));
// }
// };
//
// verbing("booing");
