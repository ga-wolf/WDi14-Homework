//Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space)
//slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//mixUp('mix', pod'): 'pox mid'
//mixUp('dog', 'dinner'): 'dig donner'
//Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function (word1, word2) {
  var firstLetterFirstWord = word1.charAt(0);
  var firstLetterSecondWord = word2.charAt(0);

  for (var i=1 ; i <=word1.length; i+= 1){
    firstWord = firstLetterSecondWord += word1.charAt(i);
  };

    for (var x=1 ; x <=word2.length; x+= 1){
      secondWord = firstLetterFirstWord += word2.charAt(x);
    };

  console.log(firstWord + " " + secondWord);
};

// mixUp("Dan", "Harsanyi");

var mixUpSecondEd = function (word1, word2) {
  var firstLetterFirstWord = word1.charAt(0);
  var firstLetterSecondWord = word2.charAt(0);
  var restOfFirstWord = word1.substr(1);
  var restOfSecondWord = word2.substr(1);

  console.log(firstLetterSecondWord+restOfFirstWord + " " + firstLetterFirstWord+restOfSecondWord);
};

mixUpSecondEd("Nikole", "Music");
