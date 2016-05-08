var playGame = {
  turnCount: 0,
  playerOne: {
    name: "Player One",
    choices: [],
    won: 0
  },
  playerTwo: {
    name: "Player Two",
    choices: [],
    won: 0
  },
  takeTurn: function() {
    if (playGame.turnCount % 2 === 0) {
      console.log($(this).parent()[0].id);
      var $yourCell = $(this);
      $(this).parent().css("background-image", "url('images/cross.png')");
      $(this).addClass('fallOff');
      setTimeout(function() {
        $yourCell.css('visibility', 'hidden');
      }, 5000);
      playGame.turnCount++;
      playGame.playerOne.choices.push(parseInt($(this).parent()[0].id));
      // console.log(playGame.turnCount);
      playGame.checkForWin(playGame.playerOne);
    } else {
      console.log($(this).parent()[0].id);
      var $yourCell = $(this);
      $(this).addClass('fallOff');
      setTimeout(function() {
        $yourCell.css('visibility', 'hidden');
      }, 5000);
      playGame.turnCount++;
      playGame.playerTwo.choices.push(parseInt($(this).parent()[0].id));
      // console.log(playGame.turnCount);
      playGame.checkForWin(playGame.playerTwo);
    }
  },
  checkForWin: function(player) {
    if (player.choices.indexOf(1) >= 0 && player.choices.indexOf(2) >= 0 && player.choices.indexOf(3) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(4) >= 0 && player.choices.indexOf(5) >= 0 && player.choices.indexOf(6) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(7) >= 0 && player.choices.indexOf(8) >= 0 && player.choices.indexOf(9) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(1) >= 0 && player.choices.indexOf(4) >= 0 && player.choices.indexOf(7) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(2) >= 0 && player.choices.indexOf(5) >= 0 && player.choices.indexOf(8) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(3) >= 0 && player.choices.indexOf(6) >= 0 && player.choices.indexOf(9) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(1) >= 0 && player.choices.indexOf(5) >= 0 && player.choices.indexOf(9) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(3) >= 0 && player.choices.indexOf(5) >= 0 && player.choices.indexOf(7) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (this.turnCount === 9) {
      console.log("It's a draw!");
      this.clearBoard();
    }
  },
  clearBoard: function() {
    this.turnCount = 0;
    this.playerOne.choices = [];
    this.playerTwo.choices = [];
    $(document).off("click", ".inner");
    setTimeout(function() {
      $(".cell").css("background-image", "url('images/nought.png')");
      $(".inner").removeClass("fallOff");
      $(".inner").css("visibility", "visible");
      $(document).on("click", ".inner", playGame.takeTurn);
    }, 5000);
  }
}

$(document).on("click", ".inner", playGame.takeTurn);
