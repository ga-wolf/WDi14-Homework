//Define a function maxOfTwoNumbers that takes two numbers as arguments and
//returns the largest of them. Use the if-
//then-else construct available in Javascript. You'll have to remember your pre-work,
//or do some googling to figure this out. Define a function maxOfThree that takes
//three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1)
//and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and
//multiplies (respectively) all the numbers in an array of numbers.
//For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.


//Bonus
//
// Define a function reverseString that computes the reversal of a string.
//For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns
//the length of the longest one.
// Write a function filterLongWords that takes an array of words and an
//number i and returns the array of words that are longer than i.

// MAX OF TWO
var maxOfTwoNumbers = function (numOne, numTwo)
{
if (numOne > numTwo){
   console.log(numOne);
}
  else{
 console.log (numTwo);

}
};

maxOfTwoNumbers(10, 20)

// MAX OF THREE
var maxOfThreeNumbers = function (numOne, numTwo, numThree)
{
if (numOne > numTwo && numThree){
   console.log(numOne);
}
 else if (numTwo > numThree && numOne){
 console.log (numTwo);
}
else {
  console.log(numThree);
}
};

maxOfThreeNumbers(67, 1, 7)

//Write a function that takes a character
// (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
 var letterFunction = function (letter) {
   var vowels = ["A", "E", "I", "O", "U"];
  //  debugger;
//if a e i o u = return true
//else = false
    for (var i = 0; i < vowels.length; i++) {
      if ( letter === vowels[i] ){
        console.log ("true");
        return;
      }
    }
    console.log("false");
  }
letterFunction("I")

//Define a function sumArray and a function multiplyArray that sums and multiplies
//(respectively) all the numbers in an array of numbers.
//For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.


//PC
// I need to create two functions, one called sumArray and one called multiplyArray.
//The result of sumArray will respectively add the numbers together. I need to create the array
//with unknown length and then create a function that will add numOne + numTwo + numThree etc.
// multiplyArray will be numOne * numTwo * numThree etc.
//I need a loop so that the array total can be 2 numbers or 10 numbers the array.length
//not to be specified in my formular.
var sumArray = function (){}
var
var multuiplyArray = function (){}
var resultMultiplyArray =

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

//PC
// I need to create a function? that mirrors the word or phrase. If the phrase is 7 characters,
// character one will be replaced with character 7, 2 with 6, 3 with 5 etc.
//
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
//PC
I need to create a function the will take an array of length unknown
