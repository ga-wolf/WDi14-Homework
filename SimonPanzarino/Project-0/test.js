var playGame = {
  gameBoard: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ],
  takeTurn: function() {
    for (i = 0; i < playGame.gameBoard.length; i++) {
      for (j = 0; j < playGame.gameBoard.length; j++) {
        console.log(playGame.gameBoard[i][j]);
      }
    }
  }
}

$(document).on("click", ".inner", playGame.takeTurn);
