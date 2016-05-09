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
          console.log(currentCell);
    } else if (player === false ){
          console.log(currentCell);
        }
    };

var checkWinner = function (){
    //for loop running through each winning combo
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
