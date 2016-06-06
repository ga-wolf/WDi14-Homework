//need to put this in for  the document ready for JS thing
$(document).ready(console.log("Are we ready? Yep. I'm ready"));
console.log ("Hello Jane and Betty. Welcome to Tic Tac Toe");

// //COMPONENT 1  - creating a visual layout for the Board.  This will be done through the use of the index.html and css file.  Currently using the following to create a DOM hieararchy
// <div class="board">
//     <div class="row one">
//       <div class="square unplayed" id="a">


// COMPONENT 2 - getting people to play the game and knowing who is player 1 and who is player 2
// use prompt and define variables to get player 1 and player 2's names and
// whether they are playing  as noughts or as the crosses.


var player = 'x';
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


$('.square').on('click', function() {
  var $element = $(this);
  var row = parseInt($element.data('row'));
  var column = parseInt($element.data('column'));
  if (board[row][column])
    return;
  board[row][column] = player;
  var winner = checkWinner(row, column)
  if(winner === true) {
    swal("Great work!", "Player " + player + "  won the game!", "success");
  }
  if (player === 'x') {
    $element.addClass('x');
    player = 'o';
  } else {
    $element.addClass('o');
    player = 'x';
  }
})

var fnNewGame = function() {
  swal({   title: "Are you sure?",   text: "Everything will be reset!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes!",   closeOnConfirm: true }, function(){
    board = [['', '', ''], ['', '', ''], ['', '', '']];
    $('.square').removeClass('x').removeClass('o');
  });
}
// prompt("Do you want to play?");





// //COMPONENT 3 - creating a user interaction to enable the user to make a move Need to be able to do the following
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



//COMPONENT 3.1 Clicking in a square
// //Clicking in the square - looping through these.  I think I need each and these.
//








// COMPONENT 3.1(a) - visual feedback - will add text.



//COMPONENT 3.1(b) (ii) Checking to see if the square is free. Try setting a class for each square of "unplayed".  If class = unplayed, square is free.  If no, square is played.  If square is free it can be played.  Class of "unplayed" needs to be changed to class of "played".  Want to make the square status = class id.

      //Simple version - do something when the square is clicked

      $("#a").onclick = function(){
            $("#a").html ("The square was clicked and the players move was in square a");
            console.log ("the square was clicked");

      };

      // var squareStatus  = $(".unplayed").html();
      // console.log (squareStatus);


      // if (squareStatus === "played"){
      //   console.log("Oops you can't play this square");
      //   }
      //   else {
      //     var squareStatus = "played";
      //     var playerMoveLocation = "a";
      //     $("#a").html ("The square was clicked and the players move was in square a");
      //     console.log ("the square was clicked");
      //     console.log ("The square status is now " + squareStatus);
      //     console.log ("The player move in square " + playerMoveLocation);
      //     }


// version of the abovevar squareStatus;
// var squareStatusPlayed = function (squareStatus) {if(squareStatus === "played")
//   {console.log ("You can't play this square. It's been played")
//    }
//   else {
//     squareStatus = "played";
//     console.log (" The square status was null but is now "  + squareStatus)
//   }
// }
//


    //var locationOfClick = how do I figure out which square was clicked?
    //squareClickState = false; to say it's been clicked, so that it can't be clicked again




//   }
// )

//Working out if the the square been played.  Need to work out how to set the state on the square and change it

//

// Keeping track of the players moves.  I think I should be able to make this into one function somehow

var playersMoves = {
  player1:[],
  player2:[]
};

var player1tracking = function (player1Move){
  playersMoves.player1.push(player1Move);
  console.log ("Player 1's moves so far are in the following squares: "  + playersMoves.player1);
}
player1Move = "a";

//
var player2tracking = function (player2Move){
  playersMoves.player2.push(player2Move);
  console.log ("Player 2's moves so far are in the following squares: "  + playersMoves.player2);
}
console.log ("The players' moves so far are : player 1 played " +playersMoves.player1 + "player 2 played " + playersMoves.player2);


// COMPONENT 4 - create a user flow - alternate between users
// Need to ensure that we alternate between users.  If user1 has had a turn, then it must be users2 turn.  If player 1 has had a move, then it's player2's move.



//Component 5 -  is it a winning move.  To do this, need to
                // A.  keep track of each player's move and store it in an OBJECT - don't need
                //  an order - somehow push the name/index number of each square into
                //  the object when it is clicked.
//                 B.  set up the rules for what is a winning combination of moves
//                 C.  check whether the player's moves includes a winning combination of moves.
