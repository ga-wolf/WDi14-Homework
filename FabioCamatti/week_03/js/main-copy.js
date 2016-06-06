
var board;
var player;
var winConditions = [[0,1,2], [3,4,5], [6,7,8],
                       [0,3,6], [1,4,7], [2,5,8],
                       [0,4,8], [6,4,2]];
var gameOver;


//This function renders the divs, at the
//beginning of the game.

function renderBoard (){
  for (var i = 0;i<board.length;i++){
    $('.' + i).text(board[i]);
  }
}

//This function set the "X" player as the first player.
//He starts the game.
function renderText(){
  if(!checkDraw()){
  $('.playerText').text('Turn : ' + player);
} else{
  // $('.playerText').text('It\'s a draw');
  draw();
}
}


function setCell(cell){
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
  renderBoard();
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
    renderBoard();
    //Renders "0" move on the screen, html code.
    renderText();
    //Exit the function.
    return;
  }
}

//Changes the player.
function changePlayer(){
  if (player == "O")
    return player = "X";
  else
    return player = "O";
}

//Check the game state. Has a Winner? Is it a tie?
function checkState(){
  $.each(winConditions, function(index,value){
   if (board[winConditions[index][0]] == board[winConditions[index][1]]
    && board[winConditions[index][0]] == board[winConditions[index][2]]
    && board[winConditions[index][0]] != " "){
      gameOver = true;
      $('.playerText').text('Player ' + player + ' wins');
      winner();
      renderBoard();
   }
  });
}

//Initialize function: renders the board with null values and defines
//who is the current player.
function init(){
  board = [" "," "," "," "," "," "," "," "," "];
  // player = "X";
  choosePlayer();
  gameOver = false;
  if(player === "O"){
     oMove();
     checkState();
     if(gameOver) return;
     renderText();
     renderBoard();
     changePlayer();
     return;
  }
  renderBoard();
  renderText();
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
    title: "GAME OVER!",
    text: "Player " + player.toUpperCase() + " won the game!",
    confirmButtonText: "Ok!",
    confirmButtonColor: '#5d9634'
  },function(){location.reload()});
};


//Alert window for the draw!
var draw = function() {
  swal({
    title: "Hmm, it's a draw!",
    text: "No wins!",
    confirmButtonText: "Ok!",
    confirmButtonColor: '#5d9634'
  }, function(){location.reload()});
};
//Randomly choose a Player. "X" or "O".
function choosePlayer()
{
    var text = "";
    var possible = "OX";

        text = possible.charAt(Math.floor(Math.random() * possible.length));

    return player=text;
};

//Call initialize function after the page had been rendered
$(document).ready(function(){
  init();
});
