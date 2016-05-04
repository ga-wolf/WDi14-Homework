// Create a function called fixStart. It should take a single argument, a string,
//and return a version where all occurences of its first character have been replaced with '*',
// except for the first character itself. You can assume that the string is at least one character long.
//For example:
// fixStart('babble'): 'ba**le'
var fixStart = function (word){
//1. get the first letter of the word
//2. walk throught the word and find matching letters
//3. replace matching letters with '*'
//4 return our new version of the word

  var firstLetter = word.slice(0, 1); //1. letter = b

  var transformedWord = '';

  for (var i = 1; i <= word.length - 1; i++) {
    if (word[i] == firstLetter){
      transformedWord = transformedWord + '*';
    } else {
      transformedWord = transformedWord + word[i];
    }
  }

  var finalWord = firstLetter + transformedWord;

  console.log(finalWord);
};
//get the rest of the word  restOfTheWord = word.splice(1)
//replace - a function in js restOfTheWord.replace(firstLetter, '*')
fixStart('babble');
