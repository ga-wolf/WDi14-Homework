var playGame = {
  turnCount: 1,
  takeTurn: function() {
    if (playGame.turnCount % 2 === 0) {
      console.log(this);
      $(this).parent().css("background-image", "url('images/cross.png')");
      $(this).addClass('box-rotate');
      playGame.turnCount++;
      console.log(playGame.turnCount);
    } else {
      console.log(this);
      $(this).addClass('box-rotate');
      playGame.turnCount++;
      console.log(playGame.turnCount);
    }
  }
}

$(document).on("click", ".inner", playGame.takeTurn);
