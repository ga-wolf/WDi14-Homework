// //  // I need to have a starting point
// //  // I need to have a condition
// //  // I need a step (some way to make the condition evaluate to false - to end the loop)
// //
// // var count = 10;
// // while (count > 0) {
// //
// //   console.log( count );
// //   count -= 1;
// // }
// //
// // console.log( "Lift off!" );
// //
// // for (var countdown = 10; countdown > 0; countdown -= 1) {
// //   console.log( countdown );
// // }
// // console.log( "Lift off!" );
//
//  // I want to have some way of saying my 9 times tables
//  // I want to do that using a function called multiplyNumbers
//  // 1 through 12
// //
// var multiplyNumbers = function( numOne, numTwo ) {
//   var result = numOne * numTwo;
//   var message = numOne + " multiplied by " + numTwo + " is " + result;
//   console.log( message );
//   return result;
// };
// //
// // for (var i = 1; i <= 12; i += 1) {
// //   var numTwo = i;
// //   multiplyNumbers( 9, i );
// // }
//
// // for (var i = 0; i <= 1010; i += 1) {
// //   console.log( i );
// //   if ( i === 7 ) {
// //     break; //Pause on a bad movie
// //   }
// // }
//
// for (var j = 1; j <= 12; j +=1) {
//   console.log( "J is now " + j );
//  for (var i = 1; i <= 12; i += 1) {
//   var numTwo = i;
//   multiplyNumbers( j, i );
//  }
// }
//
// var printOutLetters = function ( name ) {
//   for (var i = 0; i < name.length; i += 1) {
//    var currentLetter = name.charAt( i );
//    console.log( (i + 1) + " is " + currentLetter );
//  }
// }
//
// printOutLetters ( "Oedipus Rex" );


// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
//
// for ( var num = 0; num <= 20 ; num += 1 ) {
//   if ( num === 0 ) {
//     console.log( "Zero isn't even or odd." );
//   } else if ( num % 2 === 0 ) {
//     console.log( num + " is even." );
//   } else if ( num % 2 !== 0 ) {
//     console.log( num + " is odd." );
//   }
// }

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

var testResults = 88;

if ( testResults >= 90 ) {
  console.log( "Well done! You got an A." );
} else if ( testResults >= 80 ) {
  console.log( "Good job! You got a B." );
} else if ( testResults >= 70 ) {
  console.log( "You passed! Well done on the C." );
} else if ( testResults >= 60 ) {
  console.log( "Just scraping by buddy, study up for next time. You got a D.");
} else if ( testResults >= 50 ) {
  console.log( "Uh oh! You got an E." );
} else {
  console.log( "Dun dun dunnnnnn. YOU GOT AN F." );
}
