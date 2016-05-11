// remove next two lines
var drawArray = [1, 3, 6, 8]
var drawIndex = 0;

var board = ["", "", "", "", "", "", "", "", ""];
var turnTimer = 0; // Initial turn tracking value
var winCheck = "no win";
var p = ""; // Player var
var q = ""; // computer/player 2 var
var gameOver = false;
var gameMode = "";

//set defaults
$("#PlayerVsPlayer").on("click", function(){
  gameMode = "vsPlayer";
})

//VS AI button
$("#PlayerVsDumbAi").on("click", function(){
  gameMode = "dumbass";
})

//Use type X
$("#typeX").on("click", function(){
  p = "X";
  q = "O";
});

//Use type O
$("#typeO").on("click", function(){
  p = "O";
  q = "X";
});

//Resets all values
$("#newGame").on("click", function(){
  board = ["", "", "", "", "", "", "", "", ""];
  turnTimer = 1;
  winCheck = "no win";
  gameOver = false;
  $(".turnTimer").text("Player turn " + turnTimer);
  for(i = 0; i <= board.length; i++)  {
    $("#box" + i).text("");
  }
  return turnTimer;
});

// On clicks for AI
$(".Box").on("click", function(){
  if(gameMode === "dumbass")  {
    var index = $(this).attr("index")
    if(board[index] === "X" || board[index] === "O") {
      alert("Cant do that dawg")
    } else {
      board[index] = p;
      $("#box" + index).text(p);
      dumbassConditionals();
    }
  } else if(gameMode === "vsPlayer")  {   // this is for player clicks
    var index = $(this).attr("index")
    var num = ";"
    if(board[index] === "X" || board[index] === "O") {
      alert("Cant do that dawg")
    } else {
        if(turnTimer % 2 === 0) {
          board[index] = p;
          $("#box" + index).text(p);
        } else {
          board[index] = q;
          $("#box" + index).text(q);
        }
        //add click change text player 2
        playerVSConditionals();
    }
  }

})

//AI kind of..
var ai = function (){
  if (gameOver) return;
  var index = randomNumber();
  if(board[index] === "")  {
    board[index] = q;
    $("#box" + index).text(q);
  } else  {
      ai();
  }
};

//create randdom number
var randomNumber = function() {
  index = Math.floor(Math.random() * 9);
  // return index;
  return drawArray[drawIndex++];
};

//Turn Timer
var switchTurns = function()  {
  turnTimer++;
  $(".turnTimer").text("Player turn " + turnTimer);
  return turnTimer;
};

//Player conditions for Victory
var playerWinConditions =  function() {
  if ((board[0] === p && board[1] === p && board[2] === p) ||
      (board[3] === p && board[4] === p && board[5] === p) ||
      (board[6] === p && board[7] === p && board[8] === p) ||

      (board[0] === p && board[3] === p && board[6] === p) ||
      (board[1] === p && board[4] === p && board[7] === p) ||
      (board[2] === p && board[5] === p && board[8] === p) ||

      (board[0] === p && board[4] === p && board[8] === p) ||
      (board[6] === p && board[4] === p && board[2] === p)
    ) {
    winCheck = "Player 1 Win";
    alert("Winner Winner chicken dinner");
    gameOver = true;
    //turns is > 4 moves "how dud you manage to take you that long to beat my dumbass AI!"

  }
};

//AI win condtions
var aiWinConditions =  function() {
  if ((board[0] === q && board[1] === q && board[2] === q) ||
      (board[3] === q && board[4] === q && board[5] === q) ||
      (board[6] === q && board[7] === q && board[8] === q) ||

      (board[0] === q && board[3] === q && board[6] === q) ||
      (board[1] === q && board[4] === q && board[7] === q) ||
      (board[2] === q && board[5] === q && board[8] === q) ||

      (board[0] === q && board[4] === q && board[8] === q) ||
      (board[6] === q && board[4] === q && board[2] === q)
    ) {
    winCheck = "Player 2 Win";
    alert("How the fuck did you lose this?!");
    gameOver = true;
  }
};

//Draw conditions for dumbass ai
var drawConditions = function() {
  gameOver = true;
  for(i = 0; i <= board.length; i++)  {
      if(board[i] === "") {
      gameOver = false;
      }
    }
  if(gameOver === true && winCheck === "no win")  {
    alert("you drew bro..")
  }
};

//Click functions for Dumbass AI Play
var dumbassConditionals =  function() {
  playerWinConditions();
  drawConditions();
  if(gameOver === true) {
    alert("Game pover");
  }  else {
    switchTurns();
    ai();
    aiWinConditions();
    drawConditions();
  }
};

//Click functions for PVP play
var playerVSConditionals = function() {
  playerWinConditions();
  drawConditions();
  aiWinConditions();
  if(gameOver === true) {
    alert("Game pover");
  }
  else {
}   switchTurns();
    drawConditions();
}
