











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
//Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.

//Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.va


var maxOfTwoNumbers = function(a,b){

  if(a < b){
  return b;


}else if (b<a) {
   return a;

}
}
maxOfTwoNumbers(5,10);


//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
var greatest;
var maxOfThree = function(a, b, c){
  greatest = a;
  if (greatest < b) {
    greatest = b;
  }
  if (greatest < c) {
    greatest = c;
  }
  return greatest;
};

maxOfThree(10,7,15);



//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.
 //For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
 function sumArray(abc){
   var total = 0;

   for (var i = 0; i < abc.length; i++){
     total += abc[i];
   }

   return total;
 }

 var myArray = [1,2,3,4];

 // Returns 10
 console.log( sumArray([1,2,3,4]) );



 function multiplyArray(abc){
   var total = 0;

   for (var i = 0; i < abc.length; i++){
     total += abc[i];
   }

   return total;

 }

 var myArray = [1,2,3,4];

 console.log( multiplyArray([1,2,3,4]) );



   //You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

   //Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
   //Write a function called guessLetter that will:
   //Take one argument, the guessed letter.
   //Iterate through the word letters and see if the guessed letter is in there.
   //If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
   //When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
   //It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
   //Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
   var theWord = "CAT";
   var splitWord = theWord.split('');
   var guessedWord = ["_", "_", "_"];
   var letter;

   var guessLetter = function (insert) {
     letter=insert.split('');
     for (var i=0; i<letter.length; i+=1) {
       if (splitWord.includes(letter[i])) {
         guessedWord.splice(splitWord.indexOf(letter[i]), 1, letter[i]);
       }
       if (splitWord.includes(letter[i])) {
         console.log("You found it")
       } else {
         console.log("Try again");
       }
     }
       console.log(guessedWord);
       if (guessedWord.join("") === theWord) {
         console.log("The word is " + guessedWord.join("") + ". You've successfully found out. Congratulations")
       }
       // return guessedWord;
   }







 }

 var myArray = [1,2,3,4];





 console.log( multiplyArray([1,2,3,4]) );





// Given the following a rectangle object like the one below, write the following functions:

 //isSquare - Returns whether the rectangle is a square or not
 //area - Returns the area of the rectangle
 //perimeter - Returns the perimeter of the rectangle
var length = 4;
var width = 4;

 var isSquare=function(){
   if(length === width){
     console.log("It is a square");
   }
   else{
     console.log("It is a rectangle");
   }
 }
isSquare();


var length = 4;
var width = 4;
var result;
var areaOfRectangle = function(){
  var result = rectangle.width * rectangle.length;
return result;
}
areaOfRectangle(;)


var perimeter=function(){
  var result=2*(rectangle.width+rectangle.length)
  return result;
}

//Given the following a triangle object like the one below, write the following functions:

//isEquilateral - Returns whether the triangle is equilateral or not
//isIsosceles - Returns whether the triangle is isosceles or not
//area - Returns the area of the Triangle
//isObtuse - Returns whether the triangle is obtuse or not

var triangle={
  sideA = 3,

  sideB = 4,
  sideC = 4
}
var myOneA = triangle.sideA;
var myoneB = triangle.sideB;
var myOneC = triangle.sideC;
var isEquilateral=function(){
  var result= (myOneA === myoneB && myOneB === myOneC && myOneC === myOneA);
    return result;

}

var isIsosceles=function(){
  var result = (myOneA===myOneB || myOneB===myOneC ||myOneC ===myOneA)
  return result;
}
var = function(){
  var result =
}



//There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

//The bank has many accounts. Accounts should be objects that all share a set of common functionality.

//Accounts

//Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

//There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

//You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.


var Account = {
  balance : 0,
  name: "",
  number: 123,

  init: function(name, balance, number) {
    this.name = name;
    this.balance = balance;
    this.number = number;
    return this;
  },
  withdraw: function(amount) {
    if (balance < amount) {
      console.log("You don;t have that much");
      return;
    }
    balance -= amount;
  },
  deposit: function(amount) {
    balance += amount;
  }
}

var a = Account.init("name", 1000, "32323");


var Bank = {
  accounts: [],
  bankName: "",
  BSB: "",


  OpenAccount: function(account) {
    accounts.push(account);
  },

  closeAccount: function(account) {
    
  }
}

var currBalance;
var name;
var accounts=[{
  currBalance:2000,
  name:"chandler"
},{
  currBalance:3000,
  name:"joy"
},{
  currBalance:1000,
  name:"monica"
}

];
var addAccount = function(balance,newName){
  var newInfo{ }

























//  You'll need these:

  //Letter                           Value
  //A, E, I, O, U, L, N, R, S, T       1
  //D, G                               2
  //B, C, M, P                         3
  //F, H, V, W, Y                      4
  //K                                  5
  //J, X                               8
  //Q, Z                               10

  var scrabble={
    scoreCalc:function(word){
      var totalScore=0;
      word=word.toUppercase();
      for(var i =0;i<word.length;i++){
        var thisLetter=word[i];
        var thisSum= this.letterScore[thisLetter] ||0;
        totalScore+=thisSum
      }
      console.log(word + "has a value of:"+totalScore);
      return result;
    }
    letterScore{
      "A": 1,
   "E": 1,
   "I": 1,
   "O": 1,
   "U": 1,
   "L": 1,
   "N": 1,
   "R": 1,
   "S": 1,
   "T": 1,
   "D": 2,
   "G": 2,
   "B": 3,
   "C": 3,
   "M": 3,
   "P": 3,
   "F": 4,
   "H": 4,
   "V": 4,
   "W": 4,
   "Y": 4,
   "K": 5,
   "J": 8,
   "X": 8,
   "Q": 10,
   "Z": 10
    }
  }
















//Serge answers 'Sure.' if you ask him a question.

//He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

//He says 'Fine. Be that way!' if you address him without actually saying anything.

//He answers 'Whatever.' to anything else.

//To call the function, we want to be able to do something like this - Serge.respondTo( "Some string here" )

//What do you need to do?

//Make your HTML and JS files
//Make sure you work with an object to get this working - remember to keep your functions small!
//Figure out the appropriate response
//If you are flying through, do something cool with the CSS or work more on the homework from last night



serge={
  respondTo: function(userInput){
    if(serge.isQuestion(userInput)){
      console.log("sure");
    }else if (serge.isSilent(userInput)) {
      console.log("Be that way ")
    }else if (serge.isLoud(userInput)) {
      console.log("Whoa,chill out");

    }else {
      console.log("Whatever");
    }
  },
  isQuestion:function(userInput{
    if(userInput.trim().endsWith("?")===true){
      return true;
    }else {
      return false;
    }
  }
},

isLoud:function(userInput){
  if(userInput===userInput.toUppercase()){
    return true
  }else{
    return false
  }
},
isSilent:function(userInput){
  if(userInput===""){
    console.log("Be That Way")
  }
}
serge.respondTo("Question?");
serge.respondTo("Loud");
serge.respondTo(" ");
serge .respondTo("")


//MTA lab
