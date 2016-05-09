//need to put this in for  the document ready for JS thing
$(document).ready(console.log("Are we ready? Yep. I'm ready"));
console.log ("Hello Jane and Betty. Welcome to Tic Tac Toe");

// //COMPONENT 1  - creating a visual layout for the Board.  This will be done through the use of the index.html and css file.  Currently using the following to create a DOM hieararchy
// <div class="board">
//     <div class="row one">
//       <div class="square" id="a">


// COMPONENT 2 - getting people to play the game and knowing who is player 1 and who is player 2
// use prompt and define variables to get player 1 and player 2's names and
// whether they are playing  as noughts or as the crosses.




// //COMPONENT 3 - creating a user interaction. Need to be able to do the following
// // 1   create an event on-click in a square
// // 2   once the event is triggered, need to do the following
//     // a.  for the user
              // i.  provide some sort of visual feedback so that they know they have clicked in a square.
              // ii. Need to also prevent them from clicking in a square that is already taken.
//     //b.   for the computer:
// // //      i. has the square been played:
//               create a value set in the square that toggles from squareFree to clicked - need to
 //              A. have a boolean T/F - true if squareFree
//               B.  check whether that square has been clicked (squareFree === true).
//               C. if true, the player can make the move
//                  if not true, the move is not valid and need to ask the player to make a valid move


//Clicking in the square
$("div.row, class.square").on("click", function(){
    console.log ("the square was clicked");
    //var locationOfClick = how do I figure out which square was clicked?
    //squareClickState = false; to say it's been clicked, so that it can't be clicked again




  }
)

//Working out if the the square been played.  Need to work out how to set the state on the square and change it
var move = squareClick;
var squareClickState;
var hasSquareBeenPlayed = function(squareClickState) {
    if(squareClickState === null){
      var hasSquareBeenPlayed = false;
      console.log ("The square has not been played.  Go ahead.  Make your play!");
    } else {
      console.log ("You can't play this square.  It's been taken!")
    }
}





// COMPONENT 4 - create a user flow
// Need to ensure that we alternate between users.  If user1 has had a turn, then it must be users2 turn.  If player 1 has had a move, then it's player2's move.



//Component 5 -  is it a winning move.  To do this, need to
                // A.  keep track of each player's move and store it in an OBJECT - don't need
                //  an order - somehow push the name/index number of each square into
                //  the object when it is clicked.
//                 B.  set up the rules for what is a winning combination of moves
//                 C.  check whether the player's moves includes a winning combination of moves.

// Keeping track of the players moves.  I think I should be able to make this into one function somehow

var playersMoves = {
  player1:[],
  player2:[]
};

var player1tracking = function (player1Move){
  playersMoves.player1.push(player1Move);
  console.log ("Player 1's moves so far are in the following squares: "  + playersMoves.player1);
}
//
// var player2tracking = function (player2Move){
//   playersMoves.player2.push(player2Move);
//   console.log ("Player 2's moves so far are in the following squares: "  + playersMoves.player2);
// }
// console.log ("The players' moves so far are : player 1 played " +playersMoves.player1 + "player 2 played " + playersMoves.player2);
