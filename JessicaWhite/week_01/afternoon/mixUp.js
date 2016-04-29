// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function(firstWord, secondWord) {
  var firstWordLetter = firstWord.charAt(0);
  var secondWordLetter = secondWord.charAt(0);
  var restOfFirstWord = firstWord.substr(1);
  var restOfSecondWord = secondWord.substr(1);
  console.log(secondWordLetter + restOfFirstWord + " " + firstWordLetter + restOfSecondWord)

};
