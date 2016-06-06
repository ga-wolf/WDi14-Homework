//PSUEDOCODE

//I need to be able to place a value in any of the 9 pixels
//I need to determine a player one and a player two
//Everytime a player has a turn the game has to swith to the alternate player
//I need to determine a winner
//A winner is determined by var winnerIsX = function() {
//   return winsRowX() || winsColumnX() || winsDiagonalX();
// }  AND
//var winnerIsO = function() {
//   return winsRowO() || winsColumnO() || winsDiagonalO();
var boardGame =[ ["", "", ""], ["", "", ""], ["", "", ""] ];
var player = 'x';
var started = false;

var checkWinner = function (row, column, input){
  var count = 0;
  var n = boardGame.length;
  // for the row
  for (var i = 0; i < n; i++){
    if (boardGame[row][i] === input)
      count++;
  }
  if (count === n)
    return [[row, 0], [row, 1], [row, 2]];

  count = 0;
  // for the column
  for (var i = 0; i < n; i++) {
     if (boardGame[i][column] === input)
      count++;
  }

  if (count === n)
    return [[0, column], [1, column], [2, column]];

  // for the diagonal if the element is on diagonal
  if (row === column) {
    count = 0;
    for (var i = 0; i < n; i++){
      if (boardGame[i][i] === input)
        count++;
      }
  }
  if (count === n)
   return [[0,0], [1,1], [2,2]];

  // for the reverse diagonal if element is on reverse diagonal
  if (column === n - 1 - row) {
     count = 0
     for (var i = 0; i < n; i++) {
       if (boardGame[i][n - 1 - i] === input)
        count++;
     }
  }
  if (count === n)
    return [[0, 2], [1, 1], [2, 0]];
  else return null;
};

var checkTie = function (){
 var tie = true;
 for ( var i = 0; i < boardGame.length; i++){
   for ( var j = 0; j < boardGame.length; j++)
    if (!boardGame[i][j]) {
      tie = false;
      break;
    }
 }
 return tie;
};




$(".imabutton").on("click", function(){
    $("div").css('cursor','url("images/greyxcursor.png") 45 45,auto');
    started = true;
});


$(".pixel").on("click", function () {
  if (!started)
   return;
  var $currentPixel = $( this );
  var row = parseInt($currentPixel.data('row'));
  var column = parseInt($currentPixel.data('column'));
  if (boardGame[row][column]) return;
  boardGame[row][column] = player;
  var winArray = checkWinner(row, column, player);
  if (winArray) {
    $(".pixel").css('opacity', 0);
    $.each(winArray, function(index, value) {
      var i = value[0];
      var j = value[1];
      var selector = "[data-row=" + i + "][data-column=" + j + "]";
      $(selector).css('opacity', 1);
    });
  }

  if (player === 'x')
    $currentPixel.addClass("playerX");
  else
    $currentPixel.addClass("playerO");

  if (!winArray) {
    if (player === 'x')
      player = 'o';
    else
      player = 'x';
  }
  var changeEffects = function() {
    if (winArray) {
      //  playerX score = x++;
      //  playerO score = o++;
      $("div").css('cursor', 'auto');
        $('#congratulations').text("Congratulations " + player);
        $(".winner").show();
        $(".replay").on("click", function(){
            $("div").css('cursor','url("images/greyxcursor.png") 45 45,auto');
            started = true;
        $(".winner").hide();
        $(".pixel").css('opacity', 1).removeClass("playerX").removeClass("playerO");
        });

        boardGame =[ ["", "", ""], ["", "", ""], ["", "", ""] ];
        player = 'x';

    } else if (checkTie()) {
      $("div").css('cursor', 'auto');
      $(".tie").show();
      $(".replay").on("click", function(){
          $("div").css('cursor','url("images/greyxcursor.png") 45 45,auto');
          started = true;
      $(".tie").hide();
      $(".pixel").css('opacity', 1).removeClass("playerX").removeClass("playerO");
      });

      boardGame =[ ["", "", ""], ["", "", ""], ["", "", ""] ];
      player = 'x';


    }
    else if (player === 'o')
      $("div").css('cursor','url("images/pinkocursor.png") 45 45,auto');
    else
      $("div").css('cursor','url("images/greyxcursor.png") 45 45,auto');

    $('.playerX, .playerO').css('cursor','none');
  }
  setTimeout(changeEffects, 100);
});
