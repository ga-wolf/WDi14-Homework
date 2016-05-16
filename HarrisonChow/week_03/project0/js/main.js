var sameRow = function(moves, grid) {
  var allYs = moves.map(function(value) { return value[1]; });
  var win = false;

  for(var row=0; row < grid; row ++) {
    var matchedRow = allYs.filter(function(value) { return value === row });
    if(matchedRow.length === grid) {
      return win = true;
    }
  }
  return win;
};

var sameColumn = function(moves,grid) {
  var allXs = moves.map(function(value){ return value[0]; });
  var win = false;

  for (var column = 0; column < grid; column++) {
    var matchedColumn = allXs.filter(function(value) {return value === column;});
    if (matchedColumn.length === grid){
      return win = true;
    }
  }
  return win;
};

var diagonalForward = function(moves, grid) {
  var win = false;
  var sameXYs = moves.filter(function(value) {
    return value[0]===value[1];
  });

  if(sameXYs.length===grid){
    return win = true;
  }
  return win;
};

var diagonalBackward = function(moves, grid) {
  var win = false;
  var xPlusYs = moves.filter(function(value) {
    return value[0]+value[1] === grid - 1;
  });
  if (xPlusYs.length === grid) {
    return win = true;
  }
  return win;
};


var checkAll = function(moves,grid) {
  return sameRow(moves, grid) || sameColumn(moves, grid) || diagonalForward(moves,grid) || diagonalBackward(moves, grid);
}

var playerOneCurrent = [];
var playerTwoCurrent = [];
var playerOne = 1;
var playerTwo = -1;
var PlayerOneWinCount = 0;
var playerTwoWinCount = 0;
var tieCount = 0;
var currentPlayer = playerOne;
var playerOneImg;
var playerTwoImg;
var cells= {};
var numOfPlayer = 1;
var numOfGrid;

$('#cellStart').on("click", function () {
  $(this).toggleClass('fadeOutLeftBig');
  $(".player").addClass('animated fadeInRightBig');
  $(".player").css('visibility','visible');
});

$('#OnePlayer').on("click", function () {
  numberOfPlayer = 1;
  reset();
});

$('#TwoPlayer').on("click", function () {
  numberOfPlayer = 2;
  reset();
});

var createBoard = function () {
  $("div.main").remove();
  numOfGrid = parseInt($("select.grid").val());

  for (var j = 0; j < numOfGrid; j++) {
    var $newDivOut = $("<div class='main'></div>");
    $newDivOut.appendTo(document.body);
    for (var i = 0; i < numOfGrid; i++) {
      var $newDivIn = $("<div class='cell' id='cell"+(j*numOfGrid+i)+"'></div>");
      $newDivIn.appendTo($newDivOut);
      cells["cell"+(j*numOfGrid+i)] = [i, j];
    }
  }
}

var selectStyle = function() {
  var selectedImage = parseInt($("select.bgimg").val());
  if (selectedImage === 2 ) {
    playerOneImg = "images/01.jpg";
    playerTwoImg = "images/02.png";
  } else if(selectedImage === 3 ) {
    playerOneImg = "images/03.png";
    playerTwoImg = "images/04.png";
  } else if(selectedImage === 4 ) {
    playerOneImg = "images/05.jpg";
    playerTwoImg = "images/06.jpg";
  } else {
    playerOneImg = "images/cross.png";
    playerTwoImg = "images/circle.png";
  }
}

function popUp(title) {
  swal({
    title: title,
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Try again!",
    closeOnConfirm: true },
    function(){
      reset();
    });
}

function congrate(playerName) {
  popUp("Congratulations!  "+ playerName + " is the winner!");
}

function tie() {
  popUp("Tie!");
}
var reset = function() {
  createBoard();
  selectStyle();
  playerOneCurrent = [];
  playerTwoCurrent = [];
  currentPlayer = playerOne;

  if(numberOfPlayer === 1) {
    gameOfOnePlayer();
  }else{
    gameOfTwoPlayers();
  }
}

var gameOfTwoPlayers = function () {
  $("div.cell").off();
  $("div.cell").one("click", function (event) {
    var $currentCell = $(this);
    $currentCell.css("background", "black");

    if (currentPlayer === playerOne) {
      $currentCell.css("backgroundImage", "url("+playerOneImg+")");
      console.log(playerOneImg);
      playerOneCurrent.push(cells[$currentCell.attr('id')]);

      if(checkAll(playerOneCurrent, numOfGrid)) {
        PlayerOneWinCount +=1;
        $("#PlayerOne").html("Player One won: "+PlayerOneWinCount);
        congrate("Player One");
      }

    } else {
      $currentCell.css("backgroundImage", "url("+playerTwoImg+")");
      playerTwoCurrent.push(cells[$currentCell.attr('id')]);

      if(checkAll(playerTwoCurrent, numOfGrid)) {
        congrate("Player Two");
        playerTwoWinCount +=1;
        $("#PlayerTwo").html("Player Two won: "+playerTwoWinCount);
      }
    }
    if (!checkAll(playerOneCurrent, numOfGrid) && !checkAll(playerTwoCurrent, numOfGrid) && ((playerOneCurrent.length+playerTwoCurrent.length) === numOfGrid*numOfGrid)) {
      tie();
      tieCount +=1;
      $("#Tie").html("Tie: "+tieCount);
    }
    currentPlayer = currentPlayer * -1;
  })
}


var gameOfOnePlayer = function() {
  $("div.cell").off();
  $("div.cell").one("click", function (event) {
    var $currentCell = $(this);
    $currentCell.css("backgroundImage", "url("+playerOneImg+")");
    playerOneCurrent.push(cells[$currentCell.attr('id')]);
    var playerOneWin = checkAll(playerOneCurrent, numOfGrid);
    var gameOver = ((playerOneCurrent.length+playerTwoCurrent.length) === numOfGrid*numOfGrid);
    if(playerOneWin) {
      PlayerOneWinCount +=1;
      $("#PlayerOne").html("Player One won: "+PlayerOneWinCount);
      congrate('Player One');
    } else if(gameOver) {
      tie();
      tieCount +=1;
      $("#Tie").html("Tie: "+tieCount);
    } else {
      var allMoves = Object.keys(cells).map(function(key){return cells[key]})
      var availableMoves = allMoves.filter(function(value) {
        return (playerOneCurrent.indexOf(value) === -1) && (playerTwoCurrent.indexOf(value) === -1);
      })

      var randomId = Math.floor(Math.random()*(availableMoves.length));
      var nextMove = availableMoves[randomId];
      var computerId = allMoves.indexOf(nextMove);
      $("#cell"+computerId).css("backgroundImage", "url("+playerTwoImg+")");

      playerTwoCurrent.push(cells['cell'+computerId]);
      var playerTwoWin = checkAll(playerTwoCurrent, numOfGrid);
      gameOver = ((playerOneCurrent.length+playerTwoCurrent.length) === numOfGrid*numOfGrid);

      if(playerTwoWin) {
        playerTwoWinCount +=1;
        $("#PlayerTwo").html("Player Two won: "+playerTwoWinCount);
        congrate('Player Two');
      }else if(gameOver) {
        tie();
        tieCount +=1;
        $("#Tie").html("Tie: "+tieCount);
      }
    }
  });
};
