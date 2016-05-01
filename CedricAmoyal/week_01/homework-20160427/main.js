// Write a function named greaterNum that:
//
// Takes 2 arguments, both numbers.
// Returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and
//log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
var numb1 = 1;
var numb2 = 1;
if (numb1 > numb2) {
  console.log(numb1);
} else if (numb2 > numb1) {
  console.log(numb2);
} else { console.log("they are equals !!");
}

// The World Translator
//
// Write an if statement that writes Hello World in different languages
//(i.e. if the language is english, write Hello World, if the language is
// French write something romantic)

var worldLanguages = "fr";
if (worldLanguages==="en") {
  console.log("Hello World");
} else if (worldLanguages==="fr"){
  console.log("Bonjour le Monde");
} else {console.log("What language are you speaking?");
}

// The Grade Assigner
//
// Write an if statement that gives users a score (A, B, C, D, E or F) based
//on the test results

var testResults = "E";
if (testResults==="A") {
  console.log("You are a A class champion !!");
} else if (testResults==="B") {
  console.log("You are a B class champion !!");
} else if (testResults==="C") {
  console.log("C is not to bad !!");
} else if (testResults==="D") {
  console.log("D, huuuum sure you can do better !!");
} else if (testResults==="E") {
  console.log("E !! That's no Good !!");
} else { console.log(testResults + ", That is really bad Bro !!");}



// The Pluralizer
//
// Write an if statement that works with a noun and a number.
//Make the noun plural if necessary!!

var noun1 = "boy";
var num = 2;
if (num === 1){
  console.log(noun1);
} else {
  console.log(noun1 + "s");
}
//
// Pling Plang Plong
// Write a program that converts a number to a string per the following rules:
//
// If the number contains 3 as a prime factor, output 'Pling'. If the number
//contains 5 as a prime factor, output 'Plang'. If the number contains 7 as a
//prime factor, output 'Plong'.
//
// If the number does not contain 3, 5, or 7 as a prime factor, simply return
//the string representation of the number itself.

var numberToString = 22;
if (numberToString % 3 === 0) {
      if (numberToString % 5 === 0 && numberToString % 7 === 0) {
        console.log("Pling " + "Plang " + "Plong");
      }
      else if (numberToString % 5 === 0) {
        console.log("Pling " + "Plang ");
      }
      else if (numberToString % 7 === 0) {
        console.log("Pling " + "Plong");
      }
      else {console.log("Pling");
      }

} else if (numberToString % 5 === 0) {
      if (numberToString % 7 === 0) {
        console.log("Plang " + "Plong");
      }
      else {
        console.log("Plang ");
      }

} else if (numberToString % 7 === 0) {
        console.log("Plong");


} else {console.log(numberToString);
        }


var numberToString2 = 24;
var message2 = "";
if (numberToString2 % 3 === 0) {
  message2 = message2 + " pling ";
}

if (numberToString2 % 5 === 0) {
  message2 = message2 + " plang ";
}

if (numberToString2 % 7 === 0) {
  message2 = message2 + " plong ";
}


if (message2 === "") {
  message2 = numberToString2
}

console.log(message2);
