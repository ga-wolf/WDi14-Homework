// defining winning conbinations array
var winningCombinations = [
  // Horizontals
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Verticals
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Diagonals
  [0, 4, 8],
  [2, 4, 6]
];

// defining current playing as X
var currentPlayer = 'x';
var scoreX = 0;
var scoreO = 0;

// defining selected cells as empty array
var chosenCells = {
  'x': [],
  'o': []
}

// click funtion on the board
$('.board').on('click', ".cell:not('.cell-x, .cell-o')", function(event) {
  var $cell = $(event.currentTarget);
  $cell.addClass('cell-' + currentPlayer);

  var indexOfCell = $('.board .cell').index($cell);
  var currentPlayerCells = chosenCells[currentPlayer]
  currentPlayerCells.push(indexOfCell);

  $.each(winningCombinations, function(index, combination) {
    var hasAllCells = true;

    $.each(combination, function(index, cell) {
      if ($.inArray(cell, currentPlayerCells) === -1) {
        hasAllCells = false;
      }
    });

    if (hasAllCells) {
      if (currentPlayer === 'x'){
        scoreX++;
      }
      else{
        scoreO++;
      }
      if (scoreX < 2)
        $(".score-x").text("X won " + scoreX + " time");
      else
        $(".score-x").text("X won " + scoreX + " times");
      if (scoreO < 2)
        $(".score-o").text("O won " + scoreO + " time");
      else
        $(".score-o").text("O won " + scoreO + " times");
      alert(currentPlayer + ' wins!');
      clearBoard();
    }
  });

  // Swap current player's token
  if (currentPlayer === 'x') {
    currentPlayer = 'o';
  } else {
    currentPlayer = 'x';
  }
});

// clear game board once the game is over
var clearBoard = function(){
  $('.wave').slideDown("slow").slideUp("fast");
  $('.cell').removeClass('cell-x').removeClass('cell-o');
  chosenCells = {
    'x': [],
    'o': []
  };
  currentPlayer = 'x';
};
