// Global variables
var board = ["", "", "", "", "", "", "", "", ""];
var turnTimer = 1;
var playerTurn =  "Player 1";
var winCheck = "no win";
var p = ""; // Player var
var q = ""; // computer/player 2 var
var gameOver = false;
var gameMode = "vsPlayer"
var player1Img = "player1.gif"
var player2Img = "player1.gif"

//set gamemode
$("#pvp").change(function(){
  if(this.checked){
    gameMode = "vsPlayer"
  }
})
$("#pva").change(function(){
  if(this.checked){
    gameMode = "vsDumbass"
  }
})

//Character Selection screen on load minute addition...
$("#ken").on("click", function(){
  player1Img = "http://vignette2.wikia.nocookie.net/streetfighter/images/7/7f/Ken-gem-power.gif/revision/latest?cb=20130126134929"
  $(".player1Select").css("visibility", "hidden");
})
$("#chun-lee").on("click", function(){
  player1Img = "http://vignette4.wikia.nocookie.net/screwattackdeathbattle/images/7/73/Pocketchun12.gif/revision/latest?cb=20140613050650"
  $(".player1Select").css("visibility", "hidden");
})
$("#ryuu").on("click", function(){
  player1Img = "http://vignette4.wikia.nocookie.net/streetfighter/images/5/5e/Ryu-gem-super2.gif/revision/latest?cb=20100409224452"
  $(".player1Select").css("visibility", "hidden");
})
$("#akuma").on("click", function(){
  player2Img = "http://vignette1.wikia.nocookie.net/streetfighter/images/4/49/Akuma-gem-tatsumaki.gif/revision/latest?cb=20120917162840"
  $(".player2Select").css("visibility", "hidden");
})
$("#weirdo").on("click", function(){
  player2Img = "http://i.imgur.com/uKVpZGB.gif"
  $(".player2Select").css("visibility", "hidden");
})
$("#evil-ryuu").on("click", function(){
  player2Img = "http://vignette2.wikia.nocookie.net/streetfighter/images/3/3c/Pocket_evil_ryu_-_evil_ryu_chibi.gif/revision/latest?cb=20091024095116"
  $(".player2Select").css("visibility", "hidden");
})


//Use type X
$("#typeX").on("click", function(){
  p = "X";
  q = "O";
});

//Use type O
$("#typeO").on("click", function(){
  p = "O";
  q = "X";
});

//Resets all values
$("#newGame").on("click", function(){
  board = ["", "", "", "", "", "", "", "", ""];
  turnTimer = 1;
  winCheck = "no win";
  gameOver = false;
  playerTurn =  "Player 1";
  $(".player1Select").css("visibility", "hidden");
  $(".player2Select").css("visibility", "hidden");
  $(".playersImg").css("visibility", "visible");
  if(gameMode === "vsDumbass")  {
    $("#player1Img").attr("src", player1Img);
    $("#player2Img").attr("src", "dumbass.gif");
  } else if(gameMode = "vsPlayer")  {
    $("#player1Img").attr("src", player1Img);
    $("#player2Img").attr("src", player2Img);
  }
  $(".turnTimer").text("Player turn " + turnTimer);
  $(".playerTurn").text(playerTurn + "'s turn");
  for(i = 0; i <= board.length; i++)  {
    $("#box" + i).text("");
  }
  return turnTimer;
});

// On clicks for AI
$(".Box").on("click", function(){
  if(gameMode === "vsDumbass")  {
    var index = $(this).attr("index")
    if(board[index] === "X" || board[index] === "O") {
      alert("Cant do that dawg")
    } else {
        board[index] = p;
        $("#box" + index).text(p);
        dumbassConditionals();
    }
  } else if(gameMode === "vsPlayer")  {   // this is for player clicks
    var index = $(this).attr("index")
    if(board[index] === "X" || board[index] === "O") {
      alert("Cant do that dawg")
    } else {
        if(turnTimer % 2 != 0) {
          board[index] = p;
          playerTurn = "Player 2";
          $(".playerTurn").text(playerTurn + "'s turn");
          $("#box" + index).text(p);
        } else {
            board[index] = q;
            playerTurn = "Player 1";
            $(".playerTurn").text(playerTurn + "'s turn");
            $("#box" + index).text(q);
        }
        //add click change text player 2
        playerVSConditionals();
    }
  }
})

//AI kind of..
var ai = function (){
  if (gameOver) return;
    var index = randomNumber();
  if(board[index] === "")  {
    board[index] = q;
    $("#box" + index).text(q);
  } else  {
      ai();
  }
};

//create randdom number
var randomNumber = function() {
  index = Math.floor(Math.random() * 9);
  // return drawArray[drawIndex++];
};

//Turn Timer
var switchTurns = function()  {
  turnTimer++;
    $(".turnTimer").text("Player turn " + turnTimer);
};

//Player conditions for Victory
var player1WinConditions =  function() {
  if ((board[0] === p && board[1] === p && board[2] === p) ||
      (board[3] === p && board[4] === p && board[5] === p) ||
      (board[6] === p && board[7] === p && board[8] === p) ||

      (board[0] === p && board[3] === p && board[6] === p) ||
      (board[1] === p && board[4] === p && board[7] === p) ||
      (board[2] === p && board[5] === p && board[8] === p) ||

      (board[0] === p && board[4] === p && board[8] === p) ||
      (board[6] === p && board[4] === p && board[2] === p)
    ) {
    winCheck = "Player 1 Win";
    if(gameMode === "vsDumbass")  {
      swal({  title: "Winner winner Chicken Dinner!",
              text: "He's special..",
              timer: 2000,
              showConfirmButton: false
            });
    } else if(gameMode === "vsPlayer")  {
      swal({  title: "Player 1 Winner",
              text: "Dont feel too proud you went first...ass",
              timer: 2000,
              showConfirmButton: false
            });
    }
    gameOver = true;
    //turns is > 4 moves "how dud you manage to take you that long to beat my dumbass AI!"

  }
};

//AI win condtions...
var player2WinConditions =  function() {
  if ((board[0] === q && board[1] === q && board[2] === q) ||
      (board[3] === q && board[4] === q && board[5] === q) ||
      (board[6] === q && board[7] === q && board[8] === q) ||

      (board[0] === q && board[3] === q && board[6] === q) ||
      (board[1] === q && board[4] === q && board[7] === q) ||
      (board[2] === q && board[5] === q && board[8] === q) ||

      (board[0] === q && board[4] === q && board[8] === q) ||
      (board[6] === q && board[4] === q && board[2] === q)
    ) {
    winCheck = "Player 2 Win";
    if(gameMode === "vsDumbass")  {
      swal({  title: "HOW?! JUST HOW THE HELL DID YOU LOSE!!!",
              text: "Cmoooonn he has the IQ of a bucket...",
              timer: 3000,
              showConfirmButton: false
            });
    } else if(gameMode === "vsPlayer")  {
        swal({  title: "Player 2 Winner",
                text: "Nice!",
                timer: 2000,
                showConfirmButton: false
              });
    }
    gameOver = true;
  }
};

//Draw conditions for dumbass ai
var drawConditions = function() {
  gameOver = true;
  for(i = 0; i <= board.length; i++)  {
      if(board[i] === "") {
        gameOver = false;
        }
    }
  if(gameOver === true && winCheck === "no win")  {
    swal({  title: "You Drew",
            text: "you see this alot dont you?",
            timer: 1500,
            showConfirmButton: false
          });
  }
};

//Click functions for Dumbass AI Play
var dumbassConditionals =  function() {
  player1WinConditions();
  drawConditions();
  switchTurns();
  ai();
  player2WinConditions();
  drawConditions();
};

//Click functions for PVP play
var playerVSConditionals = function() {
  player1WinConditions();
  drawConditions();
  player2WinConditions();
  switchTurns();
  drawConditions();
}
