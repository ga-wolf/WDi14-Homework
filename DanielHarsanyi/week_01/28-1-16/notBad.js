// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

var notBad = function (sentence) {
  var notPosition = sentence.search("not");
  var badPosition = sentence.search("bad");


    if ((badPosition > notPosition) && (notPosition !== -1)) {
      var stringToReplace = sentence.substring(notPosition, badPosition+3);
      var newSentence = sentence.replace(stringToReplace, "good");
      console.log(newSentence);
    } else {
      console.log(sentence);
    }


};

notBad("This movie is not that bad!");



// var test_str = "|text to get| Other text.... migh have \"|\"'s ...";
// var start_pos = test_str.indexOf('|') + 1;
// var end_pos = test_str.indexOf('|',start_pos);
// var text_to_get = test_str.substring(start_pos,end_pos)
// alert(text_to_get);
