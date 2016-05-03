// Array and Functions Bonus Material


// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
var maxOfTwoNumbers = function (numOne, numTwo) {
  var maxNum;
  if (numOne > numTwo) {
    maxNum = numOne;
  } else if( numOne < numTwo) {
    maxNum = numTwo;
  } else {
    maxNum = "This two number are same."
  }
  console.log(maxNum);
}
maxOfTwoNumbers(2, 5);
maxOfTwoNumbers(8, 8);
maxOfTwoNumbers(9, 2);


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

var maxOfThree = function (numOne, numTwo, numThree) {
  var maxNum;
  if (numOne > numTwo && numOne > numThree) {
    maxNum = numOne;
  } else if (numTwo > numOne && numTwo > numThree) {
    maxNum = numTwo;
  } else if (numThree > numOne && numThree > numTwo) {
    maxNum = numThree;
  } else {
    maxNum = "This two number are same."
  }
  console.log(maxNum);
}

maxOfThree(2,5,6);
maxOfThree(4,8,21);
maxOfThree(1,8,5);


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var vowelCheck = function (character) {
  var vowel = [ "a", "e", "i", "o", "u" ];
  var message;
  for (var i = 0; i < vowel.length; i++) {
    if (character === vowel[i]) {
      message = true;
      break;
    }
    else {
      message = false;
    }
  }
  console.log(message);
}

vowelCheck("a");
vowelCheck("i");
vowelCheck("b");



// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.


var sumArray = function (array) {
  var sum = 0;
  array.forEach(function(item) {
    sum += item;
  })
  console.log(sum);
}

sumArray([1,2,3,4]);

var multiplyArray = function (array) {
  var result = 1;
  array.forEach(function(item){
    result *= item;
  })
  console.log(result);
}
multiplyArray([1,2,3,4]);


// Bonus
//
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
var reverseString = function (inputString) {
  var newString = '';
  for (var i = inputString.length-1; i >= 0; i--) {
    newString += inputString[i];
  }
  console.log(newString);
}
reverseString("abcdefg");

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

var findLongestWord = function (array) {
  var newArray =array.map(function (item) {
    return item.length;
  });
  var longestlength = Math.max(...newArray);
  console.log(longestlength);
}

findLongestWord(["aaa", "bbbb", "ss", "rrrrrr", "k"]);

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

var filterLongWords = function (array, num) {
  var GreaterThanNum = function (item) {
    return item.length > num;
  }
  var newArray = array. filter(GreaterThanNum);
  console.log(newArray);
}

filterLongWords(["zzz", "ccccc", "vvvvvv", "tttttttt", "pppppppp", "ss"],5);
