var Results = {
  originals: [],
  squares: [],
  squareRoots: [],
  cubes: [],
  evenAndOdd: []
}

var square = function(e) {
  Results.squares.push(e*e);
}

var squareRoot = function(e) {
  Results.squareRoots.push(Math.sqrt(e));
}

var cube = function(e) {
  Results.cubes.push(e*e*e);
}

var evenAndOdd = function(e) {
  Results.evenAndOdd.push(e % 2 == 0);
}


var callbacks = [square, squareRoot, cube, evenAndOdd];
Results.originals = [1, 2, 3, 4, 5];


callbacks.forEach(function(callback) {
  Results.originals.forEach(function(num) {
    callback(num);
  });
});

console.log(Results);
