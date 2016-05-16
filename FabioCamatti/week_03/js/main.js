//var autoPlay = sessionStorage.getItem('autoPlay',autoPlay);
var board;
var player;
var gameOver;
var winCountX = sessionStorage.getItem('winCountX', winCountX);
var winCountO = sessionStorage.getItem('winCountO', winCountO);
var winConditions = [

//Horizontal winning positions
  [0,1,2],
  [3,4,5],
  [6,7,8],
//Vertically winning positions
  [0,3,6],
  [1,4,7],
  [2,5,8],
//Diagonal winning positions
  [0,4,8],
  [6,4,2]

];

//This function renders the divs, at the
//beginning of the game.

var renderBoard = function() {
  for (var i = 0;i<board.length;i++){
    $('.' + i).text(board[i]);
  }
}

//This function set the "X" player as the first player.
//He starts the game.
var renderText = function() {
    if(!checkDraw()){
      $('.playerText').text('Turn : ' + player);
    } else {
    // $('.playerText').text('It\'s a draw');
    draw();
    }
}

var setCell = function (cell){
  //Verify if the single player mode is enabled.
  var autoPlay = $( "#autoPlay" ).is(":checked");
  //If has a winner stops the function
  if (gameOver) return;
  //Check if the div(cell) isn't filled.
  if (board[cell] !== " ") {
    return; //exit function
  }
  //Board cell gets the 'X' value.
  board[cell] = player;
  //Checks 'X' move on the board
  checkState();
  //If has a winner stops the function
  if (gameOver) return;
  //Changes the Player to "O";
  changePlayer();
  //Recheck the board state for a winner.
  checkState();
  //Render the board.
  waitBoardRendering(500);
  //Render the 'X' move to the board
  renderText();
  //Test if the current play is "O" and if the Single Player Mode was enabled.
  if(player === "O" && autoPlay){
    //"O" makes a move through a random value.
    oMove();
    //Function checks the current state of the game (Array board[]).
    checkState();
    //If found a winning position, exit function.
    if (gameOver) return;
    //Else, changes the player back to "X";
    changePlayer();
    //Renders the board again;
    waitBoardRendering(500);
    //Renders "0" move on the screen, html code.
    renderText();
    //Exit the function.
    return;
  }
}

//Changes the player.
var changePlayer = function(){
  if (player == "O")
    return player = "X";
  else
    return player = "O";
}

//Check the game state. Has a Winner? Is it a tie?
var checkState = function(){
  $.each(winConditions, function(index,value){
   if (board[winConditions[index][0]] == board[winConditions[index][1]]
    && board[winConditions[index][0]] == board[winConditions[index][2]]
    && board[winConditions[index][0]] != " "){
      gameOver = true;
      renderBoard();
      $('.playerText').text('Player ' + player + ' wins');
      renderBoard();
      ((player === "X")? winCountX++ : winCountO++);
      // // Save data to sessionStorage
      // sessionStorage.setItem('winCountX', winCountX);
      // sessionStorage.setItem('winCountO', winCountO);
      renderScore();
      winner();
   }
  });
}

//Initialize function: renders the board with null values and defines
//who is the current player.
var init = function(){
  board = [" "," "," "," "," "," "," "," "," "];
  //Choose the first player to play randomly
  choosePlayer();
  gameOver = false;
  if(player === "O" && autoPlay){
     initPlayerMove();
     oMove();
     checkState();
     if(gameOver) return;
     renderText();
     waitBoardRendering(2000);
     changePlayer();
     renderScore();
     return;
  }
  initPlayerMove();
  waitBoardRendering(2000);
  renderText();
  renderScore();
}

//Checks if the board was completely filled.
var checkDraw = function () {
  for (var i = 0; i < board.length; i++) {
    if ( board[i] === " " ) {
      return false;
    }
  }
  return true;
};

//Set the 'O' player move.
var oMove = function(){
  var i = Math.floor((Math.random()*9)+1);
  // MAKE SURE NO ONE IS IN THIS POSITION AND IT IS NOT A DRAW
  if (board[i] !== " " && !checkDraw()) {
    return oMove(); //exit function
  }
  return board[i]=player;


};

//Alert window for the winner!
var winner = function() {
  swal({
        title: "Player " + player.toUpperCase() + " won the game!",
        showCancelButton: true,
        cancelButtonText: "GAME OVER!",
        confirmButtonText: "PLAY AGAIN?",
        confirmButtonColor: '#5d9634',
        closeOnConfirm: false,
        closeOnCancel: false },
          function(isConfirm){
                if (isConfirm) {
                      location.reload();
                } else {
                  swal({
                                    title: "RESET SCORE?",
                                    text: $(".score p").text(),
                                    showCancelButton: true,
                                    cancelButtonText: "NO!",
                                    cancelButtonColor: '#5d9634',
                                    confirmButtonText: "YES!",
                                    confirmButtonColor: "#DD6B55" },
                                    function(isConfirm){

                                        if (isConfirm) {
                                                resetScore();
                                                location.reload();
                                                location.href = "game-over.html"

                                        } else {
                                          location.reload();
                                          location.href = "game-over.html"

                                        }


                                    }
                      );
                      }
  });
}

//Alert window for the draw!
var draw = function() {
  swal({
    title: "Hmm, it's a draw!",
    showCancelButton: true,
    cancelButtonText: "GAME OVER!",
    confirmButtonText: "PLAY IT AGAIN?",
    confirmButtonColor: '#5d9634',
    closeOnConfirm: false,
    closeOnCancel: false
  }, function(isConfirm){
        if (isConfirm) {
              location.reload();
        } else {
          swal({
                            title: "RESET SCORE?",
                            text: $(".score p").text(),
                            showCancelButton: true,
                            cancelButtonText: "NO!",
                            cancelButtonColor: '#5d9634',
                            confirmButtonText: "YES!",
                            confirmButtonColor: "#DD6B55" },
                            function(isConfirm){

                                if (isConfirm) {

                                        resetScore();
                                        location.reload();

                                } else {
                                  location.reload();

                                }


                            }
              );
              }
  });
};
//Alert the user that the computer will start the game.
var initPlayerMove = function() {  swal({title:"Player: " + player.toUpperCase() + " starts", timer: 1100,   showConfirmButton: false });
};
//Start
var start = function () {

swal({  title: "LET'S PLAY TIC TAC TOE?",
        text: "",
        timer: 3000,   showConfirmButton: false });
        waitWindow(3500);
};
//Randomly choose a Player. "X" or "O".
var choosePlayer = function()
{
    var text = "";
    var possible = "OX";

        text = possible.charAt(Math.floor(Math.random() * possible.length));

    return player=text;
};

//Render the score and look after it
var renderScore = function () {
  sessionStorage.setItem('winCountX', winCountX);
  sessionStorage.setItem('winCountO', winCountO);
  var playX = sessionStorage.getItem('winCountX');
  var playO = sessionStorage.getItem('winCountO');
  //Initialize the score to 0 at the game start.
  if((playX === undefined || playX === null || isNaN(playX)) && (playO === undefined || playO === null || isNaN(playO))){
        playX = 0;
        playO = 0;
        winCountO = 0;
        winCountX = 0;
        // $(".score").text("SCORE: ");
        $(".score p").text("PLAYER " + ((player === "X")? "X" : "X") + " - " + playX + " - PLAYER " + ((player === "X")? "O" : "O") + " - " + playO);
  } else {
      // $(".score").text("SCORE: ");
      $(".score p").text("PLAYER " + ((player === "X")? "X" : "X") + " - " + playX + " - PLAYER " + ((player === "X")? "O" : "O") + " - " + playO);
  }
};

var resetScore = function () {
    sessionStorage.setItem('winCountX', winCountX = 0);
    sessionStorage.setItem('winCountO', winCountO = 0);
    $(".score p").text("PLAYER " + ((player === "X")? "X" : "X") + " - " + winCountX + " - PLAYER " + ((player === "X")? "O" : "O") + " - " + winCountO);
}
//important piece of code for call functions.
var waitBoardRendering = function(Pause) {
  setTimeout( function() {
    renderBoard();
  }, Pause );
  return;
};
//Fixing
//important piece of code for call functions.
var waitWindow = function(Pause) {
  setTimeout( function() {
    init();
  }, Pause );
  return;
};
//Call initialize function after the page had been rendered
$(document).ready(function(){
      init();
    });
