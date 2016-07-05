// https://gist.github.com/sherif-gamal/73a1c97cf08eca344a50e20afacd7ff9
var happyNumbers = {};
var unHappyNumbers = {};

var happy = function (number) {
  var current = number;
  sequence = {};
  while (number !== 1 && !sequence[number] && !unHappyNumbers[number]){
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
  }else {
    for (var p in sequence) {
      unHappyNumbers[p] = true;
    }
  }
  return number == 1;
};
//Get 10 happy number
var number = 1;
for (var i = 1; i <=10;) {
  if (happy(number)) {
    console.log(number);
    i++;
  }
  number++;
}
