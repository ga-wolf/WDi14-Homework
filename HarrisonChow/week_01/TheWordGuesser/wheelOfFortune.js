// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

var letterTarget = ["A", "P", "P", "L", "E"];
var letterGuessed = ["_", "_", "_", "_", "_"];
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
      reward -= Math.round(Math.random()*100);

      alert('Try again' + "\n" + "You balace is $" + reward);
    }
  }
  alert("Congratulation! \n" + "You earnd $" + reward +" in total." );


}
guessedLetters();
