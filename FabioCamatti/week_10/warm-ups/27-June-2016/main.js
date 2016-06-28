//
// # Working with Arrays
//
// The goal of this exercise is to manipulate arrays by creating a function that can reverse an array and by creating a function that can flatten an array. Do not use any library functions (i.e. .reverse or .each) to complete this task, write this stuff from scratch!
//
// - Make two functions
//   - reverse
//   - flatten
//
// ```
// reverse( [1, 2, 3, 4] ); // Should return [ 4, 3, 2, 1 ]
// flatten( ["Hello", ["World", 42] ] ); // Should return [ "Hello", "World", 42 ]
// ```
//
// Only make flatten work to one level deep! You should be able to flatten this - ` ["Hello", ["World"]] ` - but not this - ` ["Hello", [[["World"]]]] `
//
// Hint: You're going to need to be looping through the arrays to get a solution.





var n, c, d;
var a = [];
var b = [];



n = prompt("Enter the number of elements in array");


for (c = 0; c < n; c++) {
    a[c] = prompt("Enter the array elements");
}

console.log("The array is " + a);
/*
 * Copying elements into array b starting from end of array a
 */

for (c = n - 1, d = 0; c >= 0; c--, d++) {
    b[d] = a[c];
}
/*
 * Copying reversed array into original.
 * Here we are modifying original array, this is optional.
 */

for (c = 0; c < n; c++) {
    a[c] = b[c];
}
console.log("Reverse array is " + a);


// Flattening an array.

a = [["fabio", "Maria"], a]

var newa = [];
for (var i = 0; i < a.length; ++i) {
  for (var j = 0; j < a[i].length; ++j)
    newa.push(a[i][j]);
}
console.log(newa);
