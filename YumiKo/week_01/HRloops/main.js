//The Calculator


var squareNumber = function(num) {
  var square = num * num;
  console.log("The result of squaring the number " + num + " is " + square)
  return square;
}

var halfNumber = function(num) {
  var half = num/2;
  console.log("Half of " + num + " is " + half);
  return half;
}

var percentOf = function(numOne, numTwo) {
  var percentize = numOne/numTwo*100;
  console.log(numOne + " is " + percentize + "% of " + numTwo);
  return percentize;
}

var areaOfCircle = function(radius) {
  var area = Math.PI*radius*radius;
  var roundArea=Math.round(area);
  console.log("The area for a circle with radius " + radius + " is " + roundArea);
  return roundArea;
}

var someFun = function(num) {
  var result = halfNumber(num);
  var result = squareNumber(result);
  var result = areaOfCircle(result);
  var sqrResult = result*result;
  var result = percentOf(result,sqrResult);
}


// Strings

var drEvil = function(amount) {
  var print = amount + " dollars";
  if (amount===1000000) {
    return print + " (pinky)"
  } else {
    return print;
  }
}


// Test///
// var mixUp = function (stOne, stTwo) {
//   var delHead = function (str) {
//     return str.slice(1)
//   }
//   return delHead(stOne).padStart(stTwo.charAt(0)) + delHead(stTwo).padStart(stOne.charAt(0));
// }

// var mixUp = function (stOne, stTwo) {
//   var splitOne = stOne.split("")
//   var splitTwo = stTwo.split("")
//   return splitTwo[0] + stOne.slice(1) + " " + splitOne[0] + stTwo.slice(1);
// }


var mixUp = function (stOne, stTwo) {
  return stTwo.charAt(0) + stOne.slice(1) + " " + stOne.charAt(0) + stTwo.slice(1);
}







var verbing = function (string) {
  if (string.length >= 3 && string.endsWith("ing")) {
    return string + "ly";
  } else if (string.length >= 3) {
    return string + "ing";
  } else {
    return string;
  }
}

var notBad = function(string) {

    if (string.includes("not") && string.includes("bad") && string.indexOf("not")<string.indexOf("bad")) {
      var sliceN = string.indexOf("not");
      var sliceB = string.indexOf("bad");
      var slicer = string.slice(sliceN,sliceB+3);
      return string.replace(slicer,"good");
    } else {
      return string;
    }
}








// var babbleThing = function (stringy) {
//   var splitString = stringy.split("");
//
//   for (var i=1; i < splitString.length; i += 1) {
//     if (splitString[i] === splitString[0]) {
//       splitString[i] = "*";
//     }
//   }
//   console.log(splitString);
// }
//
// babbleThing("babble");
