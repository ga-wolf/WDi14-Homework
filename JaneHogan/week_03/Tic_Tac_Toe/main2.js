//need to put this in for  the document ready for JS thing
$(document).ready(console.log("Are we ready? Yep. I'm ready"));
console.log ("Hello Jane and Betty. Welcome to Tic Tac Toe my second version!");

// //COMPONENT 1  - creating a visual layout for the Board.  This will be done through the use of the index.html and css file.  Currently using the following to create a DOM hieararchy
// <div class="board">
//     <div class="row one">
//       <div class="square"   data-row='0' data-column='0' >

//Component 2 - getting users name etc

// //COMPONENT 3 - creating a user interaction to enable the user to make a move. Need to be able to do the following
// // 1   create an event on-click in a square
//    2 Check if can click in the square.  Need to include something to stop them from clicking in the square
//    3 Provide user with visual feedback that the square has been clicked
    // 4 toggle between users


//this function is supposed to toggle between x and 0.  Can't get it to pass in the new value of the playersMove


// There also needs to toggle the player
// We need a global variable that keeps track of who is currently going
// If that person is "X", make that person "0"
// If that person is "0", make that person "X"


var playersMove = "x";
var togglePlayer = function () {
  if (playersMove === "x") {
    console.log("The move to be played is " + playersMove);
    playersMove = "0";
  } else if (playersMove ==="0"){
    console.log ("The move to be played is " + playersMove);
    playersMove = "x";
  }
};

// // There needs to be a function that determines a valid move
// // It receives an element that was clicked
// // If that has the class of clicked, return false
// // Otherwise return true

var validMove = function ( $el ) {
  if ( $el.hasClass("clicked") ) {
    return false;
  } else {
    return true;
  }
};


var checkWin = function () {
  // go through each one of the winning combinations
  // If (for example), the first 3 squares have the class x, we know that that is a win
  // Select the first square, .hasClass("x"), then the second

  //rows win by x
          if ( $(".square").eq( 0 ).hasClass("x") && $(".square").eq( 1 ).hasClass("x") && $(".square").eq( 2 ).hasClass("x") ) {
              alert( "X you rock.  You won!" );
              newGame();
            }
          else if  ( $(".square").eq( 3 ).hasClass("x") && $(".square").eq( 4 ).hasClass("x") && $(".square").eq( 5 ).hasClass("x") ) {
            alert( "X you rock.  You won!" );
            newGame();
          }
         else if ( $(".square").eq( 6 ).hasClass("x") && $(".square").eq( 7 ).hasClass("x") && $(".square").eq( 8 ).hasClass("x") ) {
                  alert( "X you rock.  You won!!" );
                }

// rows win by 0

        else if ( $(".square").eq( 0 ).hasClass("0") && $(".square").eq( 1 ).hasClass("0") && $(".square").eq( 2 ).hasClass("0") ) {
                    alert( "We have a winner!" );
                    newgame();
                  }
        else if  ( $(".square").eq( 3 ).hasClass("0") && $(".square").eq( 4 ).hasClass("0") && $(".square").eq( 5 ).hasClass("0") ) {
                  alert( "We have a winner!" );
                  newGame();
                }
        else if ( $(".square").eq( 6 ).hasClass("0") && $(".square").eq( 7 ).hasClass("0") && $(".square").eq( 8 ).hasClass("0") ) {
        alert( "We have a winner!" );
          newGame();
                        }

        //columns win by X

        else if ( $(".square").eq( 0 ).hasClass("x") && $(".square").eq( 3 ).hasClass("x") && $(".square").eq( 6 ).hasClass("x") ) {
                            alert( "X you rock.  You won!" );
                          newGame();
                          }

        else if  ( $(".square").eq( 1 ).hasClass("x") && $(".square").eq( 4 ).hasClass("x") && $(".square").eq( 7 ).hasClass("x") ) {
                          alert( "X you rock.  You won!" );
                          newGame();
                        }

        else if ( $(".square").eq( 2 ).hasClass("x") && $(".square").eq( 5 ).hasClass("x") && $(".square").eq( 8 ).hasClass("x") ) {
                                alert( "X you rock.  You won!!" );
                              newGame();
                              }

        //column win by 0

        else if ( $(".square").eq( 0 ).hasClass("0") && $(".square").eq( 3 ).hasClass("0") && $(".square").eq( 6 ).hasClass("0") ) {
                                                  alert( "0 you rock.  You won!" );
                                                    newGame();
                                                }


        else if  ( $(".square").eq( 1 ).hasClass("0") && $(".square").eq( 4 ).hasClass("0") && $(".square").eq( 7 ).hasClass("0") ) {
                                                alert( "0 you rock.  You won!" );
                                                  newGame();
                                              }

        else if ( $(".square").eq( 2 ).hasClass("0") && $(".square").eq( 5 ).hasClass("0") && $(".square").eq( 8 ).hasClass("0") ) {
                                                      alert( "0 you rock.  You won!!" );
                                                      newGame();
                                                    }

        //diagonoal win by X
        else if ( $(".square").eq( 0 ).hasClass("x") && $(".square").eq( 4 ).hasClass("x") && $(".square").eq( 8 ).hasClass("x") ) {
                            alert( "X you rock.  You won!" );
                              newGame();
                          }
        else if  ( $(".square").eq( 2 ).hasClass("x") && $(".square").eq( 4 ).hasClass("x") && $(".square").eq( 6 ).hasClass("x") ) {
                          alert( "X you rock.  You won!" );
                            newGame();
                }
        //diagonoal win by 0
        else if ( $(".square").eq( 0 ).hasClass("0") && $(".square").eq( 4 ).hasClass("0") && $(".square").eq( 8 ).hasClass("0") ) {
                                    alert( "0  you rock.  You won!" );
                                      newGame();
                                  }

        else if  ( $(".square").eq( 2 ).hasClass("0") && $(".square").eq( 4 ).hasClass("0") && $(".square").eq( 6 ).hasClass("0") ) {
                                  alert( "0 you rock.  You won!" );
                                    newGame();
                        }
                        
      //Tie - why is this not working!
      if ( ($(".clicked").length === 9)) {
        console.log ("The game is a tie");
        alert ("It's a tie! Do you want to play a new game?");
          newGame();
      }
};

var newGame = function() {
  swal({   title: "Do you want to play a new game?",   text: "Everything will be reset!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes!",   closeOnConfirm: true }, function(){
    $('.square').removeClass("x");
    $('.square').removeClass("o");
    $('.square').removeClass ("clicked");
    $('.square').empty();
  });
};

// // There needs to be a function that runs every time a square is clicked
// // It accesses the element that was clicked and saves that
//   // Determine whether it is a valid move using the function validMove
//   // Add the class "clicked" to the element that was clicked
//   // ( checkWin() )
//   // Toggle the player using the function up the top

$(".square").on("click", function () {

  var $theClickedSquare = $(this);
  var isValid = validMove( $theClickedSquare );

  if ( isValid !== true ) {
    alert("Play a different move!");
  } else {
    // The right move part
    $theClickedSquare.addClass("clicked");
    $theClickedSquare.addClass( playersMove );
    $theClickedSquare.text( playersMove );
    checkWin();
    togglePlayer();
  }

  console.log( "Is this a valid move? ", isValid );
});




// var validPlay = $(".square").on("click",function (){
//   var $theClickedSquare = $(this);
//   if ($(this).hasClass("clicked"))
//   {validPlay = false;
//   }
//   else {validPlay = true;
//   }
// }



//
// //this function checks whether the square is free. Should be run when clicked.  Dependencies - visualChangeonClick function - will ad a class of "clicked" to the "this" square which this function checks for.
//
// var validPlay = $(".square").on("click",function (){
//   var $theClickedSquare = $(this);
//   if ($(this).hasClass("clicked"))
//   {validPlay = false;
//   }
//   else {validPlay = true;
//   }
// }
// )
//
// // There also needs to toggle the player
// // We need a global variable that keeps track of who is currently going
// // If that person is "X", make that person "0"
// // If that person is "0", make that person "X"
//
// // There needs to be a function that determines a valid move
// // It receives an element that was clicked
// // If that has the class of clicked, return true
// // Otherwise return false
//
// // There needs to be a function that runs every time a square is clicked
// // It accesses the element that was clicked and saves that
//   // Determine whether it is a valid move using the function move
//   // Add the class "clicked" to the element that was clicked
//   // ( checkWin() )
//   // Toggle the player using the function up the top
//
//
//
// // this provides visual feedback to the user that the square is clicked - ideally colour change and insert x or 0.  Need it to also check the validPlay function   Need to add if there is a validPlay function  - if true can proceed, if not have to stop them somehow.
// //this calls the toggle function - which isn't working!
// //should also call here the validPlay function - can only proceed if valid play is true
//
//   var changeOnClick = $(".square").on("click",function (){
//       var $theClickedSquare = $(this);
//         if (validPlay === true) {
//           $theClickedSquare.addClass("clicked");
//         }
//         else {alert ("This is not a valid move");
//           }
//       findMove ();
//         if (playersMove === "x"){
//           $theClickedSquare.html("X");
//           }
//           else {$theClickedSquare.html("0");
//         };
//       }
//     )
//
//     //Ideal feature Undo functionality for mistakes?
//
//
// //Component 5 -  is it a winning move.  To do this, need to
//                 // A.  keep track of each player's move and store it in an OBJECT - don't need
//                 //  an order - somehow push the name/index number of each square into
//                 //  the object when it is clicked.
// //                 B.  set up the rules for what is a winning combination of moves
// //                 C.  check whether the player's moves includes a winning combination of moves.
//
//
//
//
// //This tells me what square was clicked and is used in the checkWinner function
// // var numSqforWinFunction= $(".square").on("click",function (){
// //   var $whereClicked = $(this);
// //   var row = parseInt($whereClicked.data('row'));
// //   var column = parseInt($whereClicked.data('column'));
// //   var squareClicked = [row,column];
// //     console.log ("The last square that was clicked is " + squareClicked);
// //     lastSquareClicked = squareClicked;
// //     return {row,column};
// //   }
// // )
//
// var board = [['', '', ''], ['', '', ''], ['', '', '']];
// var playersMove;
//
//
// var checkWinner = function (row, column) {
//   var boardSize= board.length;
//   var numSqforWinFunction= $(".square").on("click",function (){
//     var $whereClicked = $(this);
//     var row = parseInt($whereClicked.data('row'));
//     var column = parseInt($whereClicked.data('column'));
//     }
//   )
//   var count = 0;
//   // check for the row
//       for (var i =0; i < board[row].length; i++){
//         if (board[row][i] === playersMove)
//           count++;
//       }
//       if (count === boardSize)
//        return true;
//
//        var count = 0;
//        // check for the column
//        for (var i =0; i < n; i++){
//          if (board[i][c] === playersMove)
//            count++;
//        }
//        if (count === n)
//         return true;
//
//         if (r === c) {
//           var count = 0;
//           // check for the diagonal
//           for (var i =0; i < n; i++){
//             if (board[i][i] === playersMove)
//               count++;
//           }
//           if (count === n)
//            return true;
//         }
//
//         if (c === n - 1 - r) {
//           var count = 0;
//           // check for the diagonal
//           for (var i =0; i < n; i++){
//             if (board[i][n - i - 1] === playersMove)
//               count++;
//           }
//         }
//
//         return count === n;
// }
//
//
// // //This is Sherif's original check win stuff.  I want to be able to pass my results for numSqforWinFunction function, but can't...
// //
// // var board = [['', '', ''], ['', '', ''], ['', '', '']];
// //
// // var checkWinner = function (r, c) {
// //   var n = board.length;
// //   var count = 0;
// //   // check for the row
// //   for (var i =0; i < board[r].length; i++){
// //     if (board[r][i] === player)
// //       count++;
// //   }
// //   if (count === n)
// //    return true;
// //
// //    var count = 0;
// //    // check for the column
// //    for (var i =0; i < n; i++){
// //      if (board[i][c] === player)
// //        count++;
// //    }
// //    if (count === n)
// //     return true;
// //
// //     if (r === c) {
// //       var count = 0;
// //       // check for the diagonal
// //       for (var i =0; i < n; i++){
// //         if (board[i][i] === player)
// //           count++;
// //       }
// //       if (count === n)
// //        return true;
// //     }
// //
// //     if (c === n - 1 - r) {
// //       var count = 0;
// //       // check for the diagonal
// //       for (var i =0; i < n; i++){
// //         if (board[i][n - i - 1] === player)
// //           count++;
// //       }
// //     }
// //
// //     return count === n;
// // }
//
//
// // reset game - on click of reset game button, need to change all the colours of the squares back to the original,
// // remove the x or 0
// // remove the clicked class
