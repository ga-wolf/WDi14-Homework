//need to put this in for  the document ready for JS thing
$(document).ready(console.log("Are we ready? Yep. I'm ready"));
console.log ("Hello Jane and Betty. Welcome to Tic Tac Toe my second version!");

// //COMPONENT 1  - creating a visual layout for the Board.  This will be done through the use of the index.html and css file.  Currently using the following to create a DOM hieararchy
// <div class="board">
//     <div class="row one">
//       <div class="square"   data-row='0' data-column='0' >
//


// COMPONENT 2 - getting people to play the game and knowing who is player 1 and who is player 2
// use prompt and define variables to get player 1 and player 2's names and
// whether they are playing  as noughts or as the crosses.




// //COMPONENT 3 - creating a user interaction to enable the user to make a move. Need to be able to do the following
// // 1   create an event on-click in a square
//Check if can click in the square.  Need to include something to stop them from clicking in the square
//Provide user with visual feedback that the square has been clicked


//this function is supposed to toggle between x and 0
var playersMove;
var findMove = function (playersMove) {
if
      (playersMove === "x") {
       return playersMove = "0"
    }
    else {
      playersMove = "x";
      console.log ("The move to be played is " + playersMove);
      return  playersMove;
  }
}

//this function checks whether the square is free. When square is clicked, will get add a class "clicked.  This function checks if that class is present.
 //              A. have a boolean T/F - true if validPlay
//               B.  check whether that square has been clicked (squareFree === true).
//               C. if true, the player can make the move
//                  if not true, the move is not valid and need to ask the player to make a valid

var validPlay = $(".square").on("click",function (){
  // var $theClickedSquare = $(this);
  if ($(this).hasClass("clicked"))
  {validPlay = false;
    console.log ("this is not a valid play")
  }
  else {validPlay = true}
}
)

// this changes the colour of the square.  Need to add if there is a valid move.
//this calls the toggle function - which isn't working!
//should also call here the validPlay function - can only proceed if valid play is true

  var visualChangeonClick = $(".square").on("click",function (){
      var $theClickedSquare = $(this);
      $theClickedSquare.addClass("clicked");
      findMove ();
        if (playersMove === "x"){
          $theClickedSquare.html("X")}
          else {$theClickedSquare.html("0")
        };
      }
    )

    //Undo functionality for mistakes?

    // COMPONENT 4 - create a user flow - alternate between users
    // Need to ensure that we alternate between users.  If user1 has had a turn, then it must be users2 turn.  If player 1 has had a move, then it's player2's move.












//Component 5 -  is it a winning move.  To do this, need to
                // A.  keep track of each player's move and store it in an OBJECT - don't need
                //  an order - somehow push the name/index number of each square into
                //  the object when it is clicked.
//                 B.  set up the rules for what is a winning combination of moves
//                 C.  check whether the player's moves includes a winning combination of moves.




//This tells me what square was clicked and is used in the check win functino
var lastSquareClickedforWinCheck= $(".square").on("click",function (){
  var $whereClicked = $(this);
  var row = parseInt($whereClicked.data('row'));
  var column = parseInt($whereClicked.data('column'));
  var squareClicked = [row,column];
    console.log ("The last square that was clicked is " + squareClicked);
    lastSquareClicked = squareClicked;
    checkWinner(row, column);

    return {row,column};
  }
)


var board = [['', '', ''], ['', '', ''], ['', '', '']];

var checkWinner = function (r, c) {
  var n = board.length;
  var count = 0;
  // check for the row
  for (var i =0; i < board[r].length; i++){
    if (board[r][i] === player)
      count++;
  }
  if (count === n)
   return true;

   var count = 0;
   // check for the column
   for (var i =0; i < n; i++){
     if (board[i][c] === player)
       count++;
   }
   if (count === n)
    return true;

    if (r === c) {
      var count = 0;
      // check for the diagonal
      for (var i =0; i < n; i++){
        if (board[i][i] === player)
          count++;
      }
      if (count === n)
       return true;
    }

    if (c === n - 1 - r) {
      var count = 0;
      // check for the diagonal
      for (var i =0; i < n; i++){
        if (board[i][n - i - 1] === player)
          count++;
      }
    }

    return count === n;
}
