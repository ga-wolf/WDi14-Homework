// Pling Plang Plong
// Write a program that converts a number to a string per the following rules:

// If the number contains 3 as a prime factor, output 'Pling'. If the number contains 5 as a prime factor, output 'Plang'. If the number contains 7 as a prime factor, output 'Plong'.

// If the number does not contain 3, 5, or 7 as a prime factor, simply return the string representation of the number itself.

// E.g.

// The prime factors of 28 are [2, 2, 7].

// # => "Plong"
// The prime factors of 1755 are [3, 3, 3, 5, 13].

// # => "PlingPlang"
// The prime factors of 34 are [2, 17].

// # => "34"

var numberGame = function(x){
var outputNum;
if(x % 3 === 0 && x % 5 === 0 && x % 7 === 0){
	outputNum = "Pling Plang Plong";
} else if (x % 3 === 0 && x % 5 === 0) {
	outputNum = "Pling Plang ";
} else if (x % 3 === 0 && x % 7 === 0) {
	outputNum = "Pling Plong";
} else if (x % 5 === 0 && x % 7 === 0) {
	outputNum = "Plang Plong";
} else if (x % 3 === 0) {
	outputNum = "Pling";
} else if (x % 5 === 0) {
	outputNum = "Plang";
} else if (x % 7 === 0) {
	outputNum = "Plong";
} else{
	outputNum = x;
}
console.log(outputNum);
}

numberGame(15);



// var numberGame = function(x){
// 	var outputNum;
// 	if (x % 3 === 0){
// 	outputNum = "Pling";}
//     if (x % 5 === 0)
// 	outputNum = "Plang";
//     if (x % 7 === 0)
// 	outputNum = "Plong";
// 	outputNum = x;
// }
// }





// var numberGame01 = function(x){
//   var game01 = function(y){
// 	if(y % 3 === 0){console.log("Pling");}
//   }
//   var game02 = function(y){
// 	if(y % 5 === 0){console.log("Plang");}
//   }
//   var game03 = function(y){
// 	if(y % 7 === 0){console.log("Plong");}
//   }
//   if(game01(x)&&game02(x)&&game03(x)){
//   	console.log("Pling Plang Plong");
//   } else if (game01(x)&&game02(x)) {
//   	console.log("Pling Plang");
//   } else if (game01(x)&&game03(x)) {
//   	console.log("Pling Plong");
//   } else if (game03(x)&&game02(x)) {
//   	console.log("Plang Plong");
//   } else{
//   	console.log(x);
//   }
// }


// numberGame01(15);
