//Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*',
//except for the first character itself.
//You can assume that the string is at least one character long. For example:
//fixStart('babble'): 'ba**le'

var fixStart = function (word) {
  var starredWord = word.charAt(0);
  var firstLetter = word.charAt(0);

    for (var i=1; i <= word.length; i += 1){
      if (word.charAt(i) === firstLetter) {
          starredWord += "*";
      } else {
        starredWord += word.charAt(i);
      };
    };
  console.log(starredWord);
};

fixStart("hey hey, how are you doing?")
