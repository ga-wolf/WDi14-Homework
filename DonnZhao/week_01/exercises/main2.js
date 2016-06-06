

// DrEvil
//
// Create a function called DrEvil.
//It should take a single argument, an amount, and return ' dollars',
//except it will add '(pinky)' at the end if the amount is 1 million.
//For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var DrEvil = function (num) {

if ( num === 100000 ) {
  console.log ( num + ' dollars (pinky)')
}
  else
  console.log ( num + ' dollars')
}






// MixUp
//
// Create a function called mixUp. It should take in two strings,

//and return the concatenation of the two strings (separated by a space)
//slicing out and swapping the first 2 characters of each.

//You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function (str1, str2) {

var strA = str1.slice (0,2) + str2.slice (2);
var strB = str2.slice (0,2) + str1.slice (2);

console.log ( strB + ' ' + strA); }



// FixStart
//
// Create a function called fixStart.
//It should take a single argument, a string,
//and return a version where all occurences of its first character have been replaced with '*',
// except for the first character itself.
//You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'


var fixStart = function (strStart) {
  var strStartCopy = strStart.split('')
  for ( i = 1 ; i < strStartCopy.length; i ++) {
    if ( strStartCopy[0] === strStartCopy [i]) {
      strStartCopy [i] = '*';
    }
  }
    console.log (strStartCopy);
   var strStartResult = strStartCopy.join('')
   console.log (strStartResult);
};



//
// // Verbing
// //
// // Create a function called verbing.
// It should take a single argument, a string.
// If its length is at least 3, it should add 'ing' to its end,
// unless it already ends in 'ing', in which case it should add 'ly' instead.
// If the string length is less than 3, it should leave it unchanged. For example:
// //
// //   verbing('swim'): 'swimming'
// //   verbing('swimming'): 'swimmingly'
// //   verbing('go'): 'go'

var verbing = function (toVerbingWord) {

  if ( toVerbingWord.slice(-3) === 'ing') {
      console.log (toVerbingWord + 'ly')
  }
  else if (toVerbingWord.length >= 3 ) {
     console.log ( toVerbingWord + 'ing') ;
  }
  else if (toVerbingWord.length < 3)  {
    console.log (toVerbingWord);
  }
}



// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not',
//then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all),
//just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
//
// var notBad = function (toNotBadWord) {
// debugger;
//   var toNotBadWordCopy = toNotBadWord.split(' ')
// for (var i = 0 ; i < toNotBadWordCopy.length ; i++) {
//   if (toNotBadWordCopy[i] === 'not') {
//     for ( var j = i; j < toNotBadWordCopy.length; j++) {
//       if (toNotBadWordCopy[j] === 'bad') {
//         toNotBadWordCopy.splice(i, j-i, ['good']);
//         console.log ( toNotBadWord.join [' '])
//       }
//
//     }
//     }
// }
//   }
var notBad = function (toNotBadWord) {
  var toNotBadWordCopy = toNotBadWord.split(' ')
for (var i = 0 ; i < toNotBadWordCopy.length ; i++) {
  if (toNotBadWordCopy[i] === 'not') {

        toNotBadWordCopy.splice(i );
        var result = toNotBadWordCopy.join (" ")
        console.log (result)
      }
    }
  }
