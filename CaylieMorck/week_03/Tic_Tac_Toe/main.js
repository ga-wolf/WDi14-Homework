
var gameboard = [ ["", "", ""], [ "", "", ""], ["", "", ""] ];

var scoreX = parseInt(sessionStorage.scoreX) || 0;
var scoreO = parseInt(sessionStorage.scoreO) || 0;
var winner;
var player = "X";


$(".button").on("click", function () {
  var row = parseInt($(this).data('row'));
  var column = parseInt($(this).data('column'));
  if (gameboard[row][column])
    return;
  gameboard[row][column] = player;
  if (player === 'X') {
    $(this).addClass("classX");
  } else {
    $(this).addClass("classO");
  }
  $(this).animate({
    width: '110px',
    height: '110px'
  }, 10, function() {
    $(this).animate({
      width: '100px',
      height: '100px'
    })
  });
  var won = getWinner(row, column);
  var tie = false;
  if (won) {
    swal("Congratulations! Winner is " + player)
    if (player === "X") {
      scoreX++;
      localStorage.scoreX = scoreX;
    } else {
      scoreO++;
      localStorage.scoreO = scoreO;
    }
    updateScore();

  } else {
      var tie = checkTie();
      if (tie)
        swal("No winner! You've tied ")
  }
  if (won || tie) {
    resetGame();
  }
  if (player === 'X')
    player = 'O';
  else
    player = 'X';
  });

var checkTie = function () {
  for (var i = 0; i < gameboard.length; i++) {
    for (var j = 0; j < gameboard.length; j++)
      if (!gameboard[i][j]) {
        return false;
      }
  }
  return true;
}

var checkRow = function (row) {
  for (var i = 0; i < gameboard.length; i++) {
    if (gameboard[row][i] !== player) {
      return false;
    }
  }
  return true;
}

var checkColumn = function (column) {
  for (var i = 0; i < gameboard.length; i++) {
    if (gameboard[i][column] !== player ) {
      return false;
    }
  }
  return true;
}

var checkDiagonal = function () {
  for (var i = 0; i < gameboard.length; i++) {
    if (gameboard[i][i] !== player) {
      return false;
    }
  }
  return true;
}
var checkReverseDiagonal = function () {
  for (var i = 0; i< gameboard.length; i++) {
    if (gameboard[i][gameboard.length-1-i] !== player) {
      return false;
    }
  }
  return true;
}

var getWinner = function(row, column) {
  var wonByRow = checkRow(row);
  if (wonByRow) {
      return true;
  }
var wonByColumn = checkColumn(column);
  if (wonByColumn) {
    return true;
  }
  if (row === column) {
    var wonByDiagonal = checkDiagonal();
    if (wonByDiagonal)
      return true;
  }
  if (row + column === gameboard.length - 1) {
    var wonByReverseDiagonal = checkReverseDiagonal();
    if (wonByReverseDiagonal)
      return true;
  }
  return false;
}
var resetGame = function () {
  gameboard = [ ["", "", ""], [ "", "", ""], ["", "", ""] ];
  player = "X";
  $(".button").removeClass("classX").removeClass("classO");
}

var updateScore = function () {
  $(".OPlayer").text("Player O score: " + scoreO);
  $(".XPlayer").text("Player X score: " + scoreX);
}
