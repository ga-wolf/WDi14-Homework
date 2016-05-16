// Bonus: Make it like Hangman:
//
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

var letterTarget = ["A", "P", "P", "L", "E"];
var letterGuessed = ["_", "_", "_", "_", "_"];
var wrongLetter = ["a"];
var reward = 0;
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
      reward += Math.round(Math.random()*100);
      console.log(reward);
      alert(letterGuessed.join(" ") + "\n" + "Your reward is $"+ reward); //show the guessed charactor
    } else {
      console.log(wrongLetter.indexOf[input]);
      if (wrongLetter.indexOf[input] = -1) {
        wrongLetter. push(input);
        console.log(wrongLetter);
        if (wrongLetter.length > 5) {
          alert("Sorry! You already try 6 times!");
          break;
        }
      }
      reward -= Math.round(Math.random()*100);
      alert('Try again' + "\n" + "You balace is $" + reward);
    }
  }
  if (wrongLetter.length > 5) {
    alert("Game Over");
  } else {
    alert("Congratulation! \n" + "You earnd $" + reward +" in total." );
  }




}
guessedLetters();
