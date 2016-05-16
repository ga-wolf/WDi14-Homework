var gameboard = [ ["", "", ""], [ "", "", ""], ["", "", ""] ];
//add in index later


var winner;
var turnCounter = 1;
var player = "X";
var buttonID;
var indexOfButt;
var arrayIndex;

var playerMove = function ( colorChange ) {
  if (turnCounter % 2 === 0){
    player = "O";
    $(colorChange).addClass("classO");
    // $(".button").unbind("click");
  }
  else {
    player = "X";
    $(colorChange).addClass("classX");
  }
  turnCounter += 1
}

$(".button").on("click", function () {
  //updated HTML to give "data row & collum. Use parseInt to turn strings to value.
  // var row = parseInt($(this).data('row'));
  // var column = parseInt($(this).data('column'));
  // if (gameboard[row][column])
  //   return;
playerMove(this);
for ( var i = 0; i < gameboard.length; i++ ) {
  for (var j = 0; j <gameboard[i].length; j++ ) {
    indexOfButt= gameboard[i].indexOf(this.id);
    $(this).animate({
      width: '110px',
      height: '110px'
      //to call animation on button click, no matter which class. Makes boxes bigger
    }, 10, function() {
      $(this).animate({
        width: '100px',
        height: '100px'
      })
      //to call second function within the button click, to make smaller/go back to original size.
    });
    if (indexOfButt !== -1 ) {
      buttonID = "#" + this.id;
      console.log(buttonID);
      console.log ($(buttonID));
      arrayIndex = i;
      gameboard[arrayIndex][indexOfButt] = player;
      console.log(gameboard[0])
      console.log(gameboard[1])
      console.log(gameboard[2])
      getWinner();
      return;
      }
    }
  }
});

var getWinner = function () {
  if ( gameboard[0][0] === gameboard[0][1] && gameboard[0][0] === gameboard[0][2] ) {
    winner = gameboard[0][0];
    // console.log("Winner is " + winner);
    alert ("Congratulations! Winner is " + winner);
    resetGame();
  }
  if ( gameboard[1][0] === gameboard[1][1] && gameboard[1][2] === gameboard[1][0] ) {
    winner = gameboard[1][0];
    alert ("Congratulations! Winner is " + winner);
    resetGame();
  }
  if ( gameboard[2][0] === gameboard[2][1] && gameboard[2][2] === gameboard[2][0] ) {
    winner = gameboard[2][0];
    alert ("Congratulations! Winner is " + winner);
    resetGame();
  }
  if ( gameboard[0][0] === gameboard[1][0] && gameboard[2][0] === gameboard[0][0] ) {
    winner = gameboard[0][0];
    alert ("Congratulations! Winner is " + winner);
    resetGame();
  }
  if ( gameboard[0][1] === gameboard[1][1] && gameboard[2][1] === gameboard[0][1] ) {
    winner = gameboard[0][1];
    alert ("Congratulations! Winner is " + winner);
    resetGame();
  }
  if ( gameboard[0][2] === gameboard[1][2] && gameboard[2][2] === gameboard[0][2] ) {
    winner = gameboard[0][2];
    alert ("Congratulations! Winner is " + winner);
    resetGame();
  }
  if ( gameboard[0][0] === gameboard[1][1] && gameboard[2][2] === gameboard[0][0] ) {
    winner = gameboard[0][0];
    alert ("Congratulations! Winner is " + winner);
    resetGame();
  }
  if ( gameboard[0][2] === gameboard[1][1] && gameboard[2][0] === gameboard[0][2] ) {
    winner = gameboard[0][2];
    alert ("Congratulations! Winner is " + winner);
    resetGame();
  }

  //add if for tie game
}

//if playerMove clicked > 8 times - throw reset function and

//change every winner console log to an even listener with dialog box.


var resetGame = function () {
  gameboard = [ ["00", "01", "02"], [ "10", "11", "12"], ["20", "21", "22"] ];
  turnCounter = 1;
  player = "X";
  $(".button").removeClass("classX").removeClass("classO");


}

//use condition to exlude whatever's already been clicked
//return
// if index has an x, return
