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
var PlayerOneCount = 0;
var PlayerTwoCount = 0;
var tieCount = 0;
var currentPlayer = playerOne;
var numGet = 3;
var playerOneImg;
var playerTwoImg;
var cells= {};




$('#cellStart').on("click", function () {
  reset();
  $(this).css('background', '#ff00ff');

});


var createPlayBoard = function () {
  $("div.main").remove();
  numGet = parseInt($("select.grid").val());
  imgurl = $("select.bgimg").val();
  for (var j = 0; j < numGet; j++) {
    var $newDivOut = $("<div class='main'></div>");
    $newDivOut.appendTo(document.body);
    for (var i = 0; i < numGet; i++) {
      var $newDivIn = $("<div class='cell' id='cell"+(j*numGet+i)+"'></div>");
      $newDivIn.appendTo($newDivOut);
      cells["cell"+(j*numGet+i)] = [i, j];
    }
  }
  addEventHandlers();
}


var styleSelect = function() {
  imgurl = parseInt($("select.bgimg").val());
  if (imgurl === 2 ) {
    playerOneImg = "images/01.jpg";
    playerTwoImg = "images/02.png";
  } else if(imgurl === 3 ) {
    playerOneImg = "images/03.jpg";
    playerTwoImg = "images/04.jpg";
  } else {
    playerOneImg = "images/cross.png";
    playerTwoImg = "images/circle.png";
  }
}

var addEventHandlers = function () {
  styleSelect();

  $("div.cell").off();
  $("div.cell").one("click", function (event) {
    var $currentCell = $(this);
    $currentCell.css("background", "black");

    if (currentPlayer === playerOne) {
      $currentCell.css("backgroundImage", "url("+playerOneImg+")");
      console.log(playerOneImg);
      playerOneCurrent.push(cells[$currentCell.attr('id')]);

      if(checkAll(playerOneCurrent, numGet)) {
        PlayerOneCount +=1;
        $("#PlayerOne").html("Player One won: "+PlayerOneCount);
        popUp();
      }

    } else {
      $currentCell.css("backgroundImage", "url("+playerTwoImg+")");
      playerTwoCurrent.push(cells[$currentCell.attr('id')]);

      if(checkAll(playerTwoCurrent, numGet)) {
        popUp();
        PlayerTwoCount +=1;
        $("#PlayerTwo").html("Player Two won: "+PlayerTwoCount);
      }
    }
    if (!checkAll(playerOneCurrent, numGet) && !checkAll(playerTwoCurrent, numGet) && ((playerOneCurrent.length+playerTwoCurrent.length) === numGet*numGet)) {
      popUpTie();
      tieCount +=1;
      $("#Tie").html("Tie: "+tieCount);
    }
    currentPlayer = currentPlayer * -1;
  })
}


function popUp() {
  var playerName = currentPlayer === playerOne ? 'Player One' : 'Player Two';
  swal({
    title: "Congratulations!  "+ playerName + " is the winner!",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Try again!",
    closeOnConfirm: true },
    function(){
      reset();
    });
}

function popUpTie() {
  swal({
    title: "Tie!",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Try again!",
    closeOnConfirm: true },
    function(){
      reset();
    });
}

var reset = function() {
  createPlayBoard();
  playerOneCurrent = [];
  playerTwoCurrent = [];
  currentPlayer = playerOne;
}
