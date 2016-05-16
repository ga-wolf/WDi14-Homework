// Homework: The Word Guesser

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
var letterTarget = ["A", "P", "P", "L", "E"];
var letterGuessed = ["_", "_", "_", "_", "_"];
//  function of guessLetter
var guessedLetters = function () {
  // console.log("Please start the word gussing.");
  while (letterTarget.join() != letterGuessed.join()) {  //check guess letter is match the target or not
    var input = prompt("Please start the word gussing.")  //input and start the game
    var bingo = false;
    for (var i = 0; i < letterTarget.length; i++) { // check the input with the target one by one
      if (input === letterTarget[i]) {
        letterGuessed[i] = letterTarget[i];  // align the correct value to letterGuessed array
        bingo = true;
      }
    }
    if(bingo) {
      alert(letterGuessed.join(" ")); //show the guessed charactor
    } else {
      alert('Try again');
    }
  }
  alert("Congratulation!");


}
guessedLetters();
