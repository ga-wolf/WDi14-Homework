var gameBoard = [["cellOne", "cellTwo", "cellThree"],["cellFour", "cellFive", "cellSix"],["cellSeven", "cellEight", "cellNine"]];
var jokerWins = 0;
var heathWins = 0;


var playX = function ($cell) {
    $($cell).addClass("xImage");
    $($cell).unbind("click");
};

var playO = function ($cell) {
    $($cell).addClass("oImage");
    $($cell).unbind("click");
};

var addToArray = function ($cell, player){
    var currentCell = $cell.id;
    if (player === "The Joker"){
        for (var i = 0; i < gameBoard.length ; i+=1) {
          for (var j = 0; j < gameBoard[i].length ; j+=1) {
            if (currentCell === gameBoard[i][j]) {
              gameBoard[i][j] = "The Joker";
          }
        }
      }
    } else if (player === "Heath"){
        for (var k = 0; k < gameBoard.length ; k+=1) {
          for (var l = 0; l < gameBoard[k].length ; l+=1) {
            if (currentCell === gameBoard[k][l]) {
              gameBoard[k][l] = "Heath";
            }
        }
      }
    }
};

var reset = function (){
    gameBoard = [["cellOne", "cellTwo", "cellThree"],["cellFour", "cellFive", "cellSix"],["cellSeven", "cellEight", "cellNine"]];
    playersTurn = 0;
    $(".cell").removeClass("oImage xImage");
    $(".cell").unbind("click");
    $(".cell").bind("click", gamePlay);
};

var addToWinnerCount = function (winner){
  if (winner === "The Joker") {
    jokerWins ++;
    console.log("Joker Wins: " + jokerWins);
    $("#jokerScore").html(jokerWins);
  } else if (winner === "Heath") {
    heathWins ++;
    console.log("Heath Wins: " + heathWins);
    $("#heathScore").html(heathWins);
  }
};

var checkWinner = function (){
  var winner;
  if ((gameBoard[0][0] === gameBoard[0][1]) && (gameBoard[0][1] === gameBoard[0][2])) {
      swal({ title: gameBoard[0][0] + " is the Winner!",  type: "success",   confirmButtonText: "Replay!" });
      winner = gameBoard[0][0];
      addToWinnerCount(winner);
      $(".confirm").on("click", reset);
  } else if ((gameBoard[1][0] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[1][2])) {
      swal({ title: gameBoard[1][0] + " is the Winner!",  type: "success",   confirmButtonText: "Replay!" });
      winner = gameBoard[1][0];
      addToWinnerCount(winner);
      $(".confirm").on("click", reset);
    } else if ((gameBoard[2][0] === gameBoard[2][1]) && (gameBoard[2][1] === gameBoard[2][2])) {
        swal({ title: gameBoard[2][0] + " is the Winner!",  type: "success",   confirmButtonText: "Replay!" });
        winner = gameBoard[2][0];
        addToWinnerCount(winner);
        $(".confirm").on("click", reset);
      } else if ((gameBoard[0][0] === gameBoard[1][0]) && (gameBoard[1][0] === gameBoard[2][0])) {
          swal({ title: gameBoard[0][0] + " is the Winner!",  type: "success",   confirmButtonText: "Replay!" });
          winner = gameBoard[0][0];
          addToWinnerCount(winner);
          $(".confirm").on("click", reset);
        } else if ((gameBoard[0][1] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][1])) {
            swal({ title: gameBoard[0][1] + " is the Winner!",  type: "success",   confirmButtonText: "Replay!" });
            winner = gameBoard[0][1];
            addToWinnerCount(winner);
            $(".confirm").on("click", reset);
          } else if ((gameBoard[0][2] === gameBoard[1][2]) && (gameBoard[1][2] === gameBoard[2][2])) {
              swal({ title: gameBoard[0][2] + " is the Winner!",  type: "success",   confirmButtonText: "Replay!" });
              winner = gameBoard[0][2];
              addToWinnerCount(winner);
              $(".confirm").on("click", reset);
            } else if ((gameBoard[0][0] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][2])) {
                swal({ title: gameBoard[0][0] + " is the Winner!",  type: "success",   confirmButtonText: "Replay!" });
                winner = gameBoard[0][0];
                addToWinnerCount(winner);
                $(".confirm").on("click", reset);
              } else if ((gameBoard[0][2] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][0])) {
                  swal({ title: gameBoard[0][2] + " is the Winner!",  type: "success",   confirmButtonText: "Replay!" });
                  winner = gameBoard[0][2];
                  addToWinnerCount(winner);
                  $(".confirm").on("click", reset);
                } else if (playersTurn === 9) {
                  swal({ title: "No winner!",  type: "error",   confirmButtonText: "Replay!" });
                  $(".confirm").on("click", reset);
                }
};

var playersTurn = 0;
var turnCounter = function (){
    playersTurn +=1;
  if (playersTurn % 2 !== 0) {
      return "The Joker";
  } else if (playersTurn % 2 === 0)  {
      return "Heath";
  }
};

var gamePlay = function(){
    var player = turnCounter();
    if (player === "The Joker") {
        playX(this);
        addToArray(this, player);
        checkWinner();
        return;
  } else if (player === "Heath") {
        playO(this);
        addToArray(this, player);
        checkWinner();
        return;
  }
};

$(".cell").bind("click", gamePlay);
