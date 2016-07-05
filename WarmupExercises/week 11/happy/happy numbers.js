var happyNumbers = {}
var unHappyNumbers = {}

var happy = function(number) {
  sequence = {}
  while(number !== 1 && !sequence[number] && !unHappyNumbers[number]) {
    if (happyNumbers[number])
      return true;
    sequence[number] = true;
    number = number.toString();
    var sum = 0;
    for (var i = 0; i < number.length; i++) {
      var digit = parseInt(number[i]);
      sum += digit * digit;
    }
    number = sum;
  }
  if (number == 1) {
    for (var s in sequence) {
      happyNumbers[s] = true;
    }
  } else {
    for (var s in sequence) {
      unHappyNumbers[s] = true;
    }
  }
  return number == 1;
}


var number = 1;
for (var i = 1; i <= 100;) {
  if (happy(number)) {
    console.log(number);
    i++;
  }
  number++;
}
