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

// defining current player as X
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
    var winner = true;

    $.each(combination, function(index, cell) {
      if ($.inArray(cell, currentPlayerCells) === -1) {
        winner = false;
      }
    });

    if (winner) {
      if (currentPlayer === 'x'){
        scoreX++;
      }
      else{
        scoreO++;
      }
      if (scoreX < 2){
        $(".score-x").text("X won " + scoreX + " time");
      }  else {
        $(".score-x").text("X won " + scoreX + " times");
      }

      if (scoreO < 2){
        $(".score-o").text("O won " + scoreO + " time");
      } else {
        $(".score-o").text("O won " + scoreO + " times");
      }
      swal({title: "Good job!", text: "You won!", type: "success"}, clearBoard);

    }


  // test for a Tie

  if (chosenCells.x.length + chosenCells.o.length === 9) {
    swal({title: "It's a Tie!"}, clearBoard);
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
  $('.wave').slideDown("slow");
  var sound = $('#wave-sound')[0];
  sound.play();
  setTimeout(function(){
    $(sound).animate({volume: 0}, 1000);
  }, 4500);
  $('.wave').slideUp("fast");
  $('.cell').removeClass('cell-x').removeClass('cell-o');
  chosenCells = {
    'x': [],
    'o': []
  };
  currentPlayer = 'x'
};
