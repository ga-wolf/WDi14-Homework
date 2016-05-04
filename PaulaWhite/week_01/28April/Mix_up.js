//MIX UP (NOT COMPLETE) (Tanya = mentor helped me complete )
var mixUP = function (wordOne, wordTwo){

  var firstLetterWordOne = wordOne.slice (0,1); //first letter
  var wordOneSubstrg = wordOne.substring (1); //all letters except 1st (on position 0)
  var wordTwoSlice = wordTwo.slice (0,1); // 1st letter word 2
  var wordTwoSubstrg = wordTwo.substring (1); // same for word 2

  var message = firstLetterWordOne + wordTwoSubstrg + ', ' + wordTwoSlice + wordOneSubstrg;
  console.log (message);

// return mixUp; // you cannot return function inside which you are located
  // return message;
};

mixUP ('cat', 'dog'); //
