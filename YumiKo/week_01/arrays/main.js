// Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
//
// var theWord = "CAT";
// var splitWord = theWord.split('');
// var guessedWord = ["_", "_", "_"];
// var letter;
//
//
// var guessLetter = function (letter) {
//   // for (var i=0; i<splitWord.length; i+=1) {
//     if (splitWord.includes(letter)) {
//     guessedWord.splice(splitWord.indexOf(letter), 1, letter);
//     }
//     if (splitWord.includes(letter)) {
//       console.log("You found it")
//     } else {
//       console.log("Try again");
//     }
//   // }
//     console.log(guessedWord);
//     if (guessedWord.join("") === theWord) {
//       console.log("The word is " + guessedWord.join("") + ". You've successfully found out. Congratulations")
//     }
//     // return guessedWord;
// }
//


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




// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
//


var theWord = "CAT";
var splitWord = theWord.split('');
var guessedWord = ["_", "_", "_"];
var letter;
var amount = 0;
var reward = 1;


var fortuneGuessLetter = function (insert) {
  letter=insert.split('');
  for (var i=0; i<letter.length; i+=1) {
    if (splitWord.includes(letter[i])) {
      guessedWord.splice(splitWord.indexOf(letter[i]), 1, letter[i]);
    }
    if (splitWord.includes(letter[i])) {
      reward *= Math.round(Math.random()*1000);
      amount += reward;
      console.log("You found it")
      console.log("Your current reward is " + amount + '.');
    } else {
      amount -= Math.round(Math.random()*1000);
      console.log("Try again");
      console.log("Your current reward is " + amount + '.');
    }
  }
    console.log(guessedWord);
    if (guessedWord.join("") === theWord) {
      console.log("The word is " + guessedWord.join("") + ". You've successfully found out. Congratulations")
      console.log("Your reward is " + amount + " amount.")
    }
    // return guessedWord;
}

//
// var fortune = function(insert) {
//   letter=insert.split('');
//   for (var i=0; i<letter.length; i+=1) {
//     if (splitWord.includes(letter[i])) {
//       reward *= Math.round(Math.random()*1000);
//       amount += reward;
//     } else {
//       amount -= Math.round(Math.random()*100);
//       return amount;
//     }
//     if (guessedWord.join("") === theWord) {
//     }
//   }
// }

//when you found a single letter


//when you found multiple letters




// Bonus: Make it like Hangman:
//
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.









// Array and Functions Bonus Material

var maxOfTwoNumbers = function (numOne, numTwo) {
  if (numOne>numTwo) {
    return numOne;
  } else if (numOne===numTwo) {
    console.log("Watch it twice, choose different numbers.");
  } else {
    return numTwo;
  }
}

var maxOfThree = function (numOne,numTwo,numThree) {
  if (numOne === numTwo && numTwo === numThree ) {
    console.log("Watch it twice, choose different numbers.");
  } else if (numOne > numTwo && numTwo>=numThree) {
    return numOne;
  } else if (numTwo > numOne && numOne>=numThree) {
    return numTwo;
  } else {
    return numThree;
  }
}

var isVowel = function (character) {
  var vowel = ["a", "e", "i", "o", "u"];
  return vowel.indexOf(character)>=0;
}

var isVowel = function (character) {
  var vowel = ["a", "e", "i", "o", "u"];
  return vowel.includes(character);
}


var sumArray = function (array) {
  var result=0;
  for (var i=0; i<array.length; i+=1) {
    result += array[i]
  }
  return result;
}

var multiplyArray = function (array) {
  var result=1;
  for (var i=0; i<array.length; i+=1) {
    result *= array[i]
  }
  return result;
}

//Bonus
//
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
//

var reverseString = function(string) {
  var result = string.split('').reverse().join('');
  return result;
}

var findLongestWord = function(array) {
  var longest = 0;
  var length = null;
  for (var i=0; i <array.length; i +=1) {
    var stringLength = array[i].length;
    if(longest < stringLength) {
      longest = stringLength;
    }
  }
  return longest;
}

var filterLongWords = function (array) {
  var number = 5;
  var result = [];
  for (var i=0; i<array.length; i +=1) {
    if (array[i].length > number){
      result.push(array[i]);
    }
  }
  return result;
}
