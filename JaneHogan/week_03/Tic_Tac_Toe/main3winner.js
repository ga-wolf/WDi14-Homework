//need to put this in for  the document ready for JS thing
$(document).ready(console.log("Are we ready? Yep. I'm ready"));
console.log ("Hello Jane and Betty. Welcome to Tic Tac Toe my second version!");



// //This tells me what square was clicked and is used in the checkWinner function
//   var numSqforWinFunction= $(".square").on("click",function (){
//   var $whereClicked = $(this);
//   var row = parseInt($whereClicked.data('row'));
//   var column = parseInt($whereClicked.data('column'));
//   var squareClicked = [row,column];
//     console.log ("The last square that was clicked is " + squareClicked);
//     lastSquareClicked = squareClicked;
//     return {row,column};
  }
)


var board = [['', '', ''], ['', '', ''], ['', '', '']];
var playersMove;


var checkWinner = function (row, column) {
  var boardSize= board.length;
  var numSqforWinFunction= $(".square").on("click",function (){
  var $whereClicked = $(this);
  var row = parseInt($whereClicked.data('row'));
  var column = parseInt($whereClicked.data('column'));
  var count = 0;
  // check for the row
      for (var i =0; i < board[row].length; i++){
        if (board[row][i] === playersMove)
          count++;
      }
      if (count === boardSize)
       return true;

       var count = 0;
       // check for the column
       for (var i =0; i < n; i++){
         if (board[i][c] === playersMove)
           count++;
       }
       if (count === n)
        return true;

        if (r === c) {
          var count = 0;
          // check for the diagonal
          for (var i =0; i < n; i++){
            if (board[i][i] === playersMove)
              count++;
          }
          if (count === n)
           return true;
        }

        if (c === n - 1 - r) {
          var count = 0;
          // check for the diagonal
          for (var i =0; i < n; i++){
            if (board[i][n - i - 1] === playersMove)
              count++;
          }
        }

        return count === n;
}


// reset game - on click of reset game button, need to change all the colours of the squares back to the original,
// remove the x or 0
// remove the clicked class
