var gameBoard = [["cellOne", "cellTwo", "cellThree"],["cellFour", "cellFive", "cellSix"],["cellSeven", "cellEight", "cellNine"]];

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
    if (player === true){
        for (var i = 0; i < gameBoard.length ; i+=1) {
          for (j = 0; j < gameBoard[i].length ; j+=1) {
            if (currentCell === gameBoard[i][j]) {
              gameBoard[i][j] = "X";
              console.log(gameBoard[i][j]);
            }
        }
      }
    } else if (player === false){
        for (var k = 0; k < gameBoard.length ; k+=1) {
          for (l = 0; l < gameBoard[k].length ; l+=1) {
            if (currentCell === gameBoard[k][l]) {
              gameBoard[k][l] = "O";
              console.log(gameBoard[k][l]);
          }
        }
      }
    }
};

var checkWinner = function (){
  if ((gameBoard[0][0] === gameBoard[0][1]) && (gameBoard[0][1] === gameBoard[0][2])) {
      alert(gameBoard[0][0] + " is the winner");
  } else if ((gameBoard[1][0] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[1][2])) {
        alert(gameBoard[1][0] + " is the winner");
    } else if ((gameBoard[2][0] === gameBoard[2][1]) && (gameBoard[2][1] === gameBoard[2][2])) {
          alert(gameBoard[2][0] + " is the winner");
      } else if ((gameBoard[0][0] === gameBoard[1][0]) && (gameBoard[1][0] === gameBoard[2][0])) {
            alert(gameBoard[0][0] + " is the winner");
        } else if ((gameBoard[0][1] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][1])) {
              alert(gameBoard[0][1] + " is the winner");
          } else if ((gameBoard[0][2] === gameBoard[1][2]) && (gameBoard[1][2] === gameBoard[2][2])) {
                alert(gameBoard[0][2] + " is the winner");
            } else if ((gameBoard[0][0] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][2])) {
                  alert(gameBoard[1][1] + " is the winner");
              } else if ((gameBoard[0][2] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][0])) {
                    alert(gameBoard[1][1] + " is the winner");
                } else if (playersTurn === 9) {
                  alert("There was no winner! Refresh to play again");
                }
};

var playersTurn = 0;
var turnCounter = function (){
    playersTurn += 1;
    if (playersTurn % 2 !== 0) {
      return true;
  } else {
      return false;
  }
};

var gamePlay = function(){
    var player = turnCounter();
    if (player === true) {
        playX(this);
        addToArray(this, player);
        checkWinner();
        return;
  } else if (player === false ) {
        playO(this);
        addToArray(this, player);
        checkWinner();
        return;
  }
};

$(".cell").on("click", gamePlay);
