 console.log ("homework");


//  Exercises: For loops
// The even/odd reporter
//
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").


/*ok. Here is my thinking:  I need to tell the computer that there's going to be a number and I'm going to call it something.  THIS IS GOING TO BE THE VARIABLE I'm going to use a variable to give it a name. It's my envelope for that data.
I'm going to test whether or not that number that I'm working with is an even number. To do this, I'm going to ask the computer whether the number can be divided by two. If it can be divided by 2, I'm going get the computer to say "Hey, the number I'm looking at is [this] and it's an even number.  Isn't that great."  Or something like that. In all other cases, I'm going to write " Hey, the number I'm looking at is [this] and it's not even number.  Wow.  You are amazing computer.  You too Jane, for coding this! Boy, is it going to be a long night!"   THIS IS GOING TO BE THE FUNCTION
Ok. Then, I'm going to have to make that number go up by 1 each time.  To do this, I need to do a calculation that adds 1 to that number - I'm going to get a new number, which i'm going to call the same thing and use later.   Confused, yep. Me too. THIS IS GOING TO BE PART OF THE LOOP
I'm then going to run the bit all over again that says "hey computer is this number divisible by 2" If it is write.  But I don't want it to go forever, so I'm going to ask the computer to stop once the loop gets to twenty. THIS IS GOING TO BE PART OF THE LOOP */


// var canIdivideIt = function (myNumber){
//   if (myNumber % 2 === 0){
//   console.log ("The number is " + myNumber + " and is an even number");
//   }
//   else {
//   console.log ("The number is " + myNumber + " and is an odd number");
//   }
// }
// canIdivideIt (1);
// for (var i = 0; i <= 20; i++){
//   canIdivideIt(i);


//
// Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
//
// The Grade Assigner
//
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.


// The Calculator
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."



// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

//


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

//
//
// }




// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

// A=πr2

//still need to round it.  Got something to do with fixedTo (2);

//
// }
// areaOfCircle (10,2);


// Bonus: Round the result so there are only two digits after the decimal.








// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// var squareNumber = function (num){
//  var square = num * num;
//  console.log ("The answer for the square of " + num + " is " + square);
//
// }



//  var percentOf = function (topNumber, bottomNumber){
//   var percent = (topNumber / bottomNumber) * 100;
//   console.log (topNumber + " is " + percent  + " percent" + " of " + bottomNumber);
//  }
//
// var areaOfCircle = function (radius){
//  var area  = Math.PI * radius * radius;
//  math.round (area);
//  console.log (topNumber + " is " + percent  + " percent" + " of " + bottomNumber);
//  }

var halfNumber = function (num){
 var halve = num / 2;
 console.log ("Half of " + num + " is " + halve);
 }
 halfNumber (10);


var bigCalculation = function (myNumber){
  var halveIt =  halfNumber(myNumber);
  var message = ("half the number is " + halveIt);
  console.log (message);
  return halveIt;
 }

bigCalculation (10);






//
// Take half of the number and store the result
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).


// Raw  js-homework-2.md


// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

// var DrEvil = function (amount){
//   var message1 = ("$" + amount);
//   var message2 = ("$" + amount + " pinky");
//   if (amount === 1000000){
//     console.log (message2);
//   }
//   else (console.log (message1));
//  }
// DrEvil (1000000);



// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

// Jane's notes
// Need to remove the first two letters of each word and store those letters for later use.
// Then need to pass those letters into the word in the right spot.

// consider beginSlice
// Endslice
//
// split ()

// var s = 'john smith~123 Street~Apt 4~New York~NY~12345';
// var fields = s.split(/~/);
// var name = fields[0];
// var street = fields[1];

// This splits the phrase

// var phrase = "hello world";
// var splitPhrase = phrase.split(" ");
// var word1 = splitPhrase[0];
// var word2 = splitPhrase[1];
// console.log (word1, word2);
  // OR
// substr()

// var = split (potato) [2];
// console log (split);
//
// this is good. It returns the result of "um "  The first letter nuber is what letter to start at; the second number is how many letters to extract
// var str = "pumpkin";
// var res = str.substr(1,2);
// console.log (res);




// var mixUp = function (word1, word2){



// }


// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

// use replace ()
// have to find out what is the first character and store that
// then need to find out if there are any of the same characters in the word
// then need to delete those letters and replace with *
//

// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
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
