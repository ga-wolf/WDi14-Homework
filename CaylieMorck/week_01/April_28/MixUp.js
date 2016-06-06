// // var mixUp = function(x, y) {
// //   var stringOne = x.indexOf(2);
// //   var stringTwo = y.indexOf(2);
// //
// //
// //   var twoLetterA = x[1,2]
// //   var twoLettersB = y[1,2]
// //
// //
// // }
//
//
// Create a function called mixUp. It should take in two strings, and return the
// concatenation of the two strings (separated by a space) slicing out and swapping
// the first 2 characters of each. You can assume that the strings are at least 2 characters long.

var mixUp = function (wordOne, wordTwo) {
    var wordOneFront = wordOne.slice(0, 2);
    var wordOneBack = wordOne.slice(2);
    var wordTwoFront = wordTwo.slice(0, 2);
    var wordTwoBack = wordTwo.slice(2);
    var message = ( wordOneFront + wordTwoBack + " " + wordTwoFront + wordOneBack);
    console.log( message );
}

console.log(mixUp("Hello", "World"));
console.log(mixUp("Bill", "Caylie"));
console.log(mixUp("Caylie", "Tom"));

// take first two letters of each word, split away into two substrings each.
// end up with four strings to add seperately
