var inputNum = 15;
var outputNum = '';

// The modulus operator (%) takes 2 numbers, divides them and
// gives us back the remainder.
// 10 % 2 = 0.
// 10 % 3 = 1.

if( inputNum % 3 === 0){
  outputNum += "Pling";
};

// The addition assignment (+=) allows us to easily add to a
// variable.
// In this case, we add the word "Pling" to outputNum when the
// if statement condition is true.

if( inputNum % 5 === 0){
  outputNum += "Plang";
};

// The reason we use += is it allows us to add strings together.
// When the first 'if' statement is true, and when the above
// 'if' statement is true, we get "PlingPlong".

if( inputNum % 7 === 0){
  outputNum += "Plop"
};

// Lastly we check whether outputNum has been given a value.
// If it HASN'T, we will get a result of 0 when we check the
// length.

if( outputNum.length === 0){
  outputNum = inputNum;
};

// So by this point the program has gone:
// "Does this number divide by 3, 5 or 7 evenly?"
//    if yes => add a string to outputNum for each of those that are true
//  or:
//    if no => outputNum is the same as the value of inputNum


// And lastly, we print out the final value of outputNum:

console.log(outputNum);
