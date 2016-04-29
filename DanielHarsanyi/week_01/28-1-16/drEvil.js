//Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//DrEvil(10): 10 dollars
//DrEvil(1000000): 1000000 dollars (pinky)

var drEvil = function (amount) {
  if (amount === 1000000){
      var drEvilSay = amount + " dollars " + " (cheeky pinky gesture)"
      console.log(drEvilSay)
  } else {
    console.log(amount + " dollars");
  }
};

drEvil(1000000);
