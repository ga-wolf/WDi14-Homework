// PART 1
//
//
//The Calculator
//
//
//Part 1
//
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.



var part1 = function(){

  var squareNumber = function (num){

      var x = Math.pow(num,2);
      return ("The result of squaring the number " + num + " is " + x);

  };

  var halfNumber = function(num){
      var x= (num /2);
      return ("Half of " + num + " is " + x);

  };

  var percentOf = function(numOne, numTwo){
      numTwo = (numOne * 1.4390).toFixed(2);
      var x = ((numOne / numTwo)*100).toFixed(2);
      return ( numOne + " is " + x + "% of " + numTwo);
  };

  var areaOfCircle = function(num) {

      //A=πr^2=π·8^2≈201.06193 dfads
      var x = Math.pow(num,2)*Math.PI;
      return ("The area for a circle wiht radius " + num + " is " + x.toFixed(2));
  };
  console.log("PART1\n\nCalculator, Part: 1");
  console.log("\n" + squareNumber(8));
  console.log(halfNumber(8));
  console.log(percentOf(8, 8));
  console.log(areaOfCircle(8));
};

part1();

// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var part2 = function(num){
  var squareNumber = function (num){
      return Math.pow(num,2);
  };

  var halfNumber = function(num){
      return (num /2);
  };

  var percentOf = function(numOne, numTwo){
      return (((numOne / numTwo)*100));
  };

  var areaOfCircle = function(num) {
      //A=πr^2=π·8^2≈201.06193 dfads
      return (Math.pow(num,2)*Math.PI);
  };
//Take half of the number and store the result.
   var half = halfNumber(num);
//Square the result of #1 and store that result.
   var sqr = squareNumber(half);
//Calculate the area of a circle with the result of #2 as the radius.
   var areac = (areaOfCircle(sqr)/1000)*1000;
//Calculate what percentage that area is of the squared result (#3).
   var ww = percentOf(areac,sqr);

   return ((half.toFixed(2)) + " " + (sqr.toFixed(2)) + " " + (areac.toFixed(3)) + " " + (ww.toFixed(2) + "%"));

};
console.log("PART1\n\nCalculator, Part: 2");
console.log("\n" + part2(8));

//PART2
//
//
// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

console.log("PART2\n\n");

var DrEvil = function (num) {
    if (num === 1000000){
        return (num + " dollars (pinky)");
    } else {
        return (num + " dollars");
    }
};
console.log("DrEvil function");
console.log(DrEvil(10));
console.log(DrEvil(1000000));

// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function (str1,str2){
       var tex1 = str2.substr(0,2) + str1.substr(2,(str1.length-1));
       var tex2 = str1.substr(0,2) + str2.substr(2,(str2.length-1));
       return (tex1 + " " + tex2);
};
console.log("mixUp function");
console.log(mixUp("mix", "pod"));
console.log(mixUp("dog", "dinner"));
console.log(mixUp("Pedro", "partes"));
console.log(mixUp("Google","Facebook"));


// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

var fixStart = function(word){
    var first = word.charAt(0);
    var newText = first;
    for (var i=1; i<word.length;i++){
        if (first === word.charAt((i))){
           newText+="*";
        } else {
            newText += word.charAt(i);
        }
    }
    if (word === newText){

           return ("The word: \'" + word + "\' has only one occurence of the character " + first + ".");

    } else{

        return newText;

    }


};
console.log("fixStart function");
console.log(fixStart("babble"));
console.log(fixStart("fabio"));

// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbling = function(word){
       var size = word.substr((word.length-3),(word.length));
       var regex = /[^aeiou][aeiou][^aeiou]$/.test(word);
       if(word.length < 3){
           return word;
       } else if (size === "ing"){
           return word + "ly";
       } else if (word.length >= 3){
           if(regex){
               return word + word.substr((word.length-1)) + "ing";
           } else{
             
               return word.slice(0,-1) + "ing";
           }

       }

};
console.log("verbling function");
console.log(verbling("swim"));
console.log(verbling("swimming"));
console.log(verbling("go"));
console.log(verbling("live"));

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

var notBad = function(word){

    var newstr = word.replace(/not.*?bad|not/ig, 'good');
    return newstr;
};
console.log("notBad function");
console.log(notBad("This dinner is not that bad!"));
console.log(notBad("This movie is not so bad!"));
console.log(notBad("This dinner is bad!"));
