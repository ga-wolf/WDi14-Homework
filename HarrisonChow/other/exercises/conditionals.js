// Write a function named greaterNum that:
//
// Takes 2 arguments, both numbers.
// Returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").ddss

// Write an if statement that tests two number (numOne and numTwo), and prints the biggest number
// well, I need two numbers, I am going tp call them numOne(10) and numTwo(2)
//I need to test numOne is bigger than numTwo.
//if it is, print out the value of numOne
//if not ,print out the calue of numTwo


var greaterNum = function(x,y){
  var x;
  var y;
  if (x > y) {
    console.log(x + " is the greater number.");
  }
  else {
    console.log(y + " is the greater number.");
  }
}


// The World Translator
//
// Write a function named helloWorld that:
//
// Takes 1 argument, a language code (e.g. "es", "de", "en")
// Returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
// The Grade Assigner
//
// Write a function named assignGrade that:
//
// Takes 1 argument, a number score.
// Returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.


var helloWorld = function(x){

  if(x === "fe"){
    console.log("Bonjour le monde");
  } else if (x === "ch") {
    console.log("你好 世界");
  } else if (x === "jp") {
    console.log("こんにちは世界");
  }
  else {
    console.log("hello World!");
  }
}

var assignGrade = function(x){
  if( x >= 90 ){
    console.log("your score is 'A'");
  } else if (x<90 && x>=80) {
    console.log("your score is 'B'");
  } else if (x<80 && x>=70) {
    console.log("your score is 'C'");
  } else if (x<70 && x>=60) {
    console.log("your score is 'D'");
  } else {
    console.log("your score is 'F'");
  }
}



// The Pluralizer
//
// Write a function named pluralize that:
//
// Takes 2 arguments, a noun and a number.
// Returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".



var pluralize = function(x,noun) {
  if(x === 1){
    console.log(x + " " + noun);
  } else if (x>1) {
    if(noun === "goose"){
      console.log(x + " geese.");
    } else if (noun === "sheep") {
      console.log(x + " sheep.");
    } else {
      console.log(x + " " + noun + "s.");
    }
  }
}
