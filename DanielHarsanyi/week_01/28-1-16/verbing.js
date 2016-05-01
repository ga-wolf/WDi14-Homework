//Create a function called verbing. It should take a single argument, a string. If its length is at least 3,
//it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead.
//If the string length is less than 3, it should leave it unchanged. For example:

//verbing('swim'): 'swimming'
//verbing('swimming'): 'swimmingly'
//verbing('go'): 'go'

var verbing = function (word) {
  var lastThreeChar = word.substring(word.length - 3)
  var lastChar = word.charAt(word.length-1)
  var secondLastChar = word.charAt(word.length-2)
  var vowelsLoop = function () {
      var vowels = ["a", "e", "i", "o", "u"];
      for (i=0;i<vowels.length;i+=1){
        if (secondLastChar === (vowels[i])) {
        return vowels[i];
      }
    }
  };

  if ((word.length >= 3) && (lastThreeChar === "ing")) {
    console.log(word + "ly");
} else if ((word.length >= 3) && (secondLastChar === vowelsLoop())) {
    console.log(word + lastChar + "ing");
  } else if (word.length >= 3) {
    console.log(word + "ing");
  } else {
    console.log(word);
  }
  };

verbing("exist");
