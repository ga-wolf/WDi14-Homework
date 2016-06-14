// There once was a wise servant who saved the life of a prince. The king promised to pay whatever the servant could dream up. Knowing that the king loved chess, the servant told the king he would like to have grains of wheat. One grain on the first square of a chess board. Two grains on the next. Four on the third, and so on.
//
// There are 64 squares on a chessboard.
//
// Write a program that shows
// - how many grains were on a particular square;
// - how many grains were on each square; and
// - the total number of grains on the board.
//
// Do it in JS (why not use Underscore to take advantage of some of its helpful, Ruby-esque methods?). When you're done, implement a simple HTML UI (feel free to use jQuery).



// 64 Squares in a chessboard
var exponents = Array(64).fill().map((x, i) => i);



var grainsPerSquare = function(square) {

    var arrAux = exponents.map(function(num) {
        return Math.pow(2, num);
    });
    return arrAux[square];
};


var totalGrains = grainsPerSquare.reduce(function(a, b) {
  return a + b;
}, 0).toExponential(3);
