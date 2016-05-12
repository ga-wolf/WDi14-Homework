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
  gameBoard: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
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

var playAi = {
  turnCount: 0,
  playerOne: {
    name: "Player One",
    choices: [],
    won: 0
  },
  playerTwo: {
    name: "Computer",
    choices: [],
    won: 0
  },
  takenSquares: {
    taken: [],
    takenByYou: [],
    takenByAi: []
  },
  takeTurn: function() {
    if (playAi.turnCount % 2 === 0) {
      console.log(playAi.turnCount % 2);
      var $yourCell = $(this);
      console.log($(this));
      $(this).parent().css("background-image", "url('images/cross.png')");
      $(this).addClass('fallOff');
      setTimeout(function() {
        $yourCell.css('visibility', 'hidden');
      }, 5000);
      playAi.turnCount++;
      playAi.playerOne.choices.push(parseInt($(this).parent()[0].id));
      playAi.takenSquares.taken.push(parseInt($(this).parent()[0].id));
      playAi.takenSquares.takenByYou.push(parseInt($(this).parent()[0].id));
      // console.log(playGame.turnCount);
      playAi.checkForWin(playAi.playerOne);
      playAi.computerTurn();
    }
  },
  computerTurn: function() {
    var yourMoves = this.playerOne.choices;
    var lastChoice = yourMoves[yourMoves.length - 1];
    // if you play center, computer plays 1
    // if you play 3, computer plays 9
    // if you play 4, computer plays
    // if you play anywhere else, computer plays center
    if (lastChoice === 1) {
      console.log("you played top left");
      if (this.turnCount === 1) {
        console.log("Turn 2");
        this.takenSquares.taken.push(5);
        setTimeout(function() {
          $('#5 .inner').addClass('fallOff');
          setTimeout(function() {
            $('#5 .inner').css('visibility', 'hidden');
          }, 5000);
        }, 5000);
      }
    } else if (lastChoice === 2) {
      console.log("you played top middle");
      if (this.turnCount === 1) {
        console.log("Turn 2");
        this.takenSquares.taken.push(5);
        setTimeout(function() {
          $('#5 .inner').addClass('fallOff');
          setTimeout(function() {
            $('#5 .inner').css('visibility', 'hidden');
          }, 5000);
        }, 5000);
      }
    } else if (lastChoice === 3) {
      console.log("you played top right");
      if (this.turnCount === 1) {
        console.log("Turn 2");
        this.takenSquares.taken.push(5);
        setTimeout(function() {
          $('#5 .inner').addClass('fallOff');
          setTimeout(function() {
            $('#5 .inner').css('visibility', 'hidden');
          }, 5000);
        }, 5000);
      }
    } else if (lastChoice === 4) {
      console.log("you played middle left");
      if (this.turnCount === 1) {
        console.log("Turn 2");
        this.takenSquares.taken.push(5);
        setTimeout(function() {
          $('#5 .inner').addClass('fallOff');
          setTimeout(function() {
            $('#5 .inner').css('visibility', 'hidden');
          }, 5000);
        }, 5000);
      }
    } else if (lastChoice === 5) {
      console.log("you played middle middle");
      if (this.turnCount === 1) {
        console.log("Turn 2");
        this.takenSquares.taken.push(1);
        setTimeout(function() {
          $('#1 .inner').addClass('fallOff');
          setTimeout(function() {
            $('#1 .inner').css('visibility', 'hidden');
          }, 5000);
        }, 5000);
      }
    } else if (lastChoice === 6) {
      console.log("you played middle right");
      if (this.turnCount === 1) {
        console.log("Turn 2");
        this.takenSquares.taken.push(5);
        setTimeout(function() {
          $('#5 .inner').addClass('fallOff');
          setTimeout(function() {
            $('#5 .inner').css('visibility', 'hidden');
          }, 5000);
        }, 5000);
      }
    } else if (lastChoice === 7) {
      console.log("you played bottom left");
      if (this.turnCount === 1) {
        console.log("Turn 2");
        this.takenSquares.taken.push(5);
        setTimeout(function() {
          $('#5 .inner').addClass('fallOff');
          setTimeout(function() {
            $('#5 .inner').css('visibility', 'hidden');
          }, 5000);
        }, 5000);
      }
    } else if (lastChoice === 8) {
      console.log("you played bottom middle");
      if (this.turnCount === 1) {
        console.log("Turn 2");
        this.takenSquares.taken.push(5);
        setTimeout(function() {
          $('#5 .inner').addClass('fallOff');
          setTimeout(function() {
            $('#5 .inner').css('visibility', 'hidden');
          }, 5000);
        }, 5000);
      }
    } else if (lastChoice === 9) {
      console.log("you played bottom right");
      if (this.turnCount === 1) {
        console.log("Turn 2");
        this.takenSquares.taken.push(5);
        setTimeout(function() {
          $('#5 .inner').addClass('fallOff');
          setTimeout(function() {
            $('#5 .inner').css('visibility', 'hidden');
          }, 5000);
        }, 5000);
      }
    }
    playAi.turnCount++;
    this.checkForWin(playAi.playerTwo);
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
      $(document).on("click", ".inner", playAi.takeTurn);
    }, 5000);
  }
}

// $('#character').css({
//   position: "absolute",
//   bottom: "0px"
// });
//
// $character = $('#character');
//
// var goingUp = true;
//
// setInterval(moveCharacter, 20);
//
// var keys = {}
//
// $(document).keydown(function(e) {
//     keys[e.keyCode] = true;
// });
//
// $(document).keyup(function(e) {
//     delete keys[e.keyCode];
// });
//
//
// function moveCharacter() {
//     for (var direction in keys) {
//         if (!keys.hasOwnProperty(direction)) continue;
//         if (direction == 37) {
//             $("#character").animate({left: "-=5"}, 0);
//         }
//         if (direction == 39) {
//             $("#character").animate({left: "+=5"}, 0);
//         }
//         if (direction == 40) {
//             $("#character").animate({bottom: "-=5"}, 0);
//         }
//         if (direction == 38) {
//             $("#character").animate({bottom: "+=5"}, 0);
//         }
//     }
// }
//
// $(document).keypress(function(e) {
//   if (e.keyCode === 32) {
//     $('#character').animate(
//     { bottom: 200 }, // what we are animating
//     {
//         duration: 'fast', // how fast we are animating
//         easing: 'swing'
//     }).animate(
//     { bottom: 0 }, // what we are animating
//     {
//         duration: 'fast', // how fast we are animating
//         easing: 'easeOutCubic'
//     });
//   }
// });

// Overlay dark with highlighted text for start

var menu = {
  onePlayer: true,
  twoPlayer: false
}

$(document).keydown(function(e) {
  console.log(e.keyCode);
  if (e.keyCode === 40 && menu.onePlayer === true) {
    $('#one').removeClass("active");
    $('#two').addClass("active");
    menu.onePlayer = false;
    menu.twoPlayer = true;
    console.log(menu.onePlayer + " " + menu.twoPlayer);
  }
  if (e.keyCode === 38 && menu.twoPlayer === true) {
    $('#one').addClass("active");
    $('#two').removeClass("active");
    menu.onePlayer = true;
    menu.twoPlayer = false;
    console.log(menu.onePlayer + " " + menu.twoPlayer);
  }
  if (e.keyCode === 13 && menu.onePlayer === true) {
    console.log("Start 1 player game");
    closeMenu(playAi.takeTurn);
  } else if (e.keyCode === 13 && menu.twoPlayer === true) {
    console.log("Start 2 player game");
    closeMenu(playGame.takeTurn);
  }
});

var closeMenu = function(option) {
  console.log()
  $(document).on("click", ".inner", option);
  $('#menu').fadeOut();
}
