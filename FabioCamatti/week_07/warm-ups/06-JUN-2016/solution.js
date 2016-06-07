// # Accumulate
//
// For example, given the collection of numbers:
//
// - 1, 2, 3, 4, 5
//
// And the operation:
//
// - square a number
//
// Your code should be able to produce the collection of squares:
//
// - 1, 4, 9, 16, 25
//
// ## Optional Extras
//
// - Square Root a Number
// - Cube a number
// - Even and Odd
// - Or return an object containing all of those things:
//
//   ```
//   {
//     original: [1, 2, 3, 4, 5],
//     squares: [...],
//     squareRoots: [...],
//     cubes: [...],
//     evenAndOdd: [true, false, true]
//   }
//   ```
//
// ## Restrictions
//
// Keep your hands off that collect/map/fmap/whatchamacallit functionality
// provided by your standard library!
//
// Solve this one yourself using other basic tools instead.


var Results = {
  original: [],
  squares: [],
  squareRoots: [],
  cubes: [],
  evenAndOdd: []
}

var square = function (e) {
    Results.squares.push(e*e);
}

var squareRoot = function (e) {
  Results.squareRoots.push(Math.sqrt(e));
}

var cube = function (e) {
   Results.cubes.push(e*e*e);
}

var evenAndOdd = function (e) {
  Results.evenAndOdd.push( e % 2 == 0);
}

var Callbacks = [square, squareRoot, cube, evenAndOdd];
  Results.originals = [1,2,3,4,5];

Callbacks.forEach(function (callback) {
  Results.originals.forEach(function (num) {
      callback(num);
  });
});

console.log(Results);
