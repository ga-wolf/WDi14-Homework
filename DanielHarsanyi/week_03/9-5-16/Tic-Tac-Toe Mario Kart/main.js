// jQuery Easing Plugin

jQuery.easing.jswing = jQuery.easing.swing;

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

//jQuery Easing Plugin END

//The below code plays the characters selection sound on mouseover

var bowserAudio = new Audio("assets/bowserSelect.mp3");
$("#bowser").mouseenter(function() {
  bowserAudio.play();
});

var donkeyKongAudio = new Audio("assets/donkeyKongSelect.mp3");
$("#donkeyKong").mouseenter(function() {
  donkeyKongAudio.play();
});

var luigiAudio = new Audio("assets/luigiSelect.mp3");
$("#luigi").mouseenter(function() {
  luigiAudio.play();
});

var marioAudio = new Audio("assets/marioSelect.mp3");
$("#mario").mouseenter(function() {
  marioAudio.play();
});

var peachAudio = new Audio("assets/peachSelect.mp3");
$("#peach").mouseenter(function() {
  peachAudio.play();
});

var toadAudio = new Audio("assets/toadSelect.mp3");
$("#toad").mouseenter(function() {
  toadAudio.play();
});

var warioAudio = new Audio("assets/warioSelect.mp3");
$("#wario").mouseenter(function() {
  warioAudio.play();
});

var yoshiAudio = new Audio("assets/yoshiSelect.mp3");
$("#yoshi").mouseenter(function() {
  yoshiAudio.play();
});

//Character sound selection END


//Setting the gameBoard to an empty array - naming convention the same as the HTML IDs to allow crosscheck of contents
var gameBoard = [["cellOne", "cellTwo", "cellThree"],["cellFour", "cellFive", "cellSix"],["cellSeven", "cellEight", "cellNine"]];
//Using local storage to store wins across refreshes
var firstPlayerWins = localStorage.firstPlayerWins || 0;
var secondPlayerWins = localStorage.secondPlayerWins || 0;
//Setting player icon variables to store image URL
var player1Icon;
var player2Icon;
//Setting opening scores to 0 or whatever was stored in local storage
$(document).ready(function(){
  $("#firstPlayerScore").html(firstPlayerWins);
  $("#secondPlayerScore").html(secondPlayerWins);
});

//Function that runs if it is player 1's turn - adds their icon and semi opaque background to the square they clicked and unbinds the click
//so player 2 can't override it
var playFirst = function ($cell) {
    $($cell).addClass("firstPlayerGameIcon");
    $($cell).css('background-image', player1Icon);
    $($cell).unbind("click");
};

//Function that runs if it is player 2's turn - adds their icon and semi opaque background to the square they clicked and unbinds the click
//so player 1 can't override it
var playSecond = function ($cell) {
    $($cell).addClass("secondPlayerGameIcon");
    $($cell).css('background-image', player2Icon);
    $($cell).unbind("click");
};

//Function that determines which cell the player clicked and then iterates through the entire gameboard. When it finds a match between
//the cell clicked and empty square in the array it replaces the array with the player number depending on which player it was. This is
//then used later for determining if a player has three squares in a row.
var addToArray = function ($cell, player){
    var currentCell = $cell.id;
    if (player === "Player 1"){
        for (var i = 0; i < gameBoard.length ; i+=1) {
          for (var j = 0; j < gameBoard[i].length ; j+=1) {
            if (currentCell === gameBoard[i][j]) {
              gameBoard[i][j] = "Player 1";
          }
        }
      }
    } else if (player === "Player 2"){
        for (var k = 0; k < gameBoard.length ; k+=1) {
          for (var l = 0; l < gameBoard[k].length ; l+=1) {
            if (currentCell === gameBoard[k][l]) {
              gameBoard[k][l] = "Player 2";
            }
        }
      }
    }
};


//Function that resets the gameBoard array to empty, the player turn to 0, removes all classes and background images from the clicked squares, unbinds all clicks and then adds back on the gameplay click so the players can restart
var reset = function (){
    gameBoard = [["cellOne", "cellTwo", "cellThree"],["cellFour", "cellFive", "cellSix"],["cellSeven", "cellEight", "cellNine"]];
    playersTurn = 0;
    $(".cell").removeClass("firstPlayerGameIcon secondPlayerGameIcon");
    $(".cell").css('background-image', '');
    $(".cell").unbind("click");
    $(".cell").on("click", gamePlay);
};


//Function that adds 1 to the winners score and puts it in the score counter in the bottom left hand corner
var addToWinnerCount = function (winner){
  if (winner === "Player 1") {
    firstPlayerWins ++;
    localStorage.firstPlayerWins = firstPlayerWins;
    $("#firstPlayerScore").html(firstPlayerWins);
  } else if (winner === "Player 2") {
    secondPlayerWins ++;
    localStorage.secondPlayerWins = secondPlayerWins;
    $("#secondPlayerScore").html(secondPlayerWins);
  }
};


// Function that resets both players scores to 0 in the local storage and in the score counter
var resetScores = function (){
  firstPlayerWins = 0;
  localStorage.firstPlayerWins = 0;
  $("#firstPlayerScore").html(firstPlayerWins);
  secondPlayerWins = 0;
  localStorage.secondPlayerWins = 0;
  $("#secondPlayerScore").html(secondPlayerWins);
};

$(".resetBothScores").on("click", resetScores);


//Function that checks to see whether a player has a winning combination. It checks square 1 against square 2, and then sqaure 2 against square 3
//showing that there would be three of the same in a row. It then shows an alert with the winning players name(number), adds 1 to their winner count
//and on clicking the reset button (called the confirm class in the sweet-alert plugin) runs the reset function described earlier.
var checkWinner = function (){
  var winner;
  if ((gameBoard[0][0] === gameBoard[0][1]) && (gameBoard[0][1] === gameBoard[0][2])) {
      swal({ title: gameBoard[0][0] + " is the Winner!",  type: "success",   confirmButtonText: "Replay!" });
      winner = gameBoard[0][0];
      addToWinnerCount(winner);
      $(".confirm").on("click", reset);
  } else if ((gameBoard[1][0] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[1][2])) {
      swal({ title: gameBoard[1][0] + " is the Winner!",  type: "success",   confirmButtonText: "Replay!" });
      winner = gameBoard[1][0];
      addToWinnerCount(winner);
      $(".confirm").on("click", reset);
    } else if ((gameBoard[2][0] === gameBoard[2][1]) && (gameBoard[2][1] === gameBoard[2][2])) {
        swal({ title: gameBoard[2][0] + " is the Winner!",  type: "success",   confirmButtonText: "Replay!" });
        winner = gameBoard[2][0];
        addToWinnerCount(winner);
        $(".confirm").on("click", reset);
      } else if ((gameBoard[0][0] === gameBoard[1][0]) && (gameBoard[1][0] === gameBoard[2][0])) {
          swal({ title: gameBoard[0][0] + " is the Winner!",  type: "success",   confirmButtonText: "Replay!" });
          winner = gameBoard[0][0];
          addToWinnerCount(winner);
          $(".confirm").on("click", reset);
        } else if ((gameBoard[0][1] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][1])) {
            swal({ title: gameBoard[0][1] + " is the Winner!",  type: "success",   confirmButtonText: "Replay!" });
            winner = gameBoard[0][1];
            addToWinnerCount(winner);
            $(".confirm").on("click", reset);
          } else if ((gameBoard[0][2] === gameBoard[1][2]) && (gameBoard[1][2] === gameBoard[2][2])) {
              swal({ title: gameBoard[0][2] + " is the Winner!",  type: "success",   confirmButtonText: "Replay!" });
              winner = gameBoard[0][2];
              addToWinnerCount(winner);
              $(".confirm").on("click", reset);
            } else if ((gameBoard[0][0] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][2])) {
                swal({ title: gameBoard[0][0] + " is the Winner!",  type: "success",   confirmButtonText: "Replay!" });
                winner = gameBoard[0][0];
                addToWinnerCount(winner);
                $(".confirm").on("click", reset);
              } else if ((gameBoard[0][2] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][0])) {
                  swal({ title: gameBoard[0][2] + " is the Winner!",  type: "success",   confirmButtonText: "Replay!" });
                  winner = gameBoard[0][2];
                  addToWinnerCount(winner);
                  $(".confirm").on("click", reset);
                } else if (playersTurn === 9) {
                  swal({ title: "No winner!",  type: "error",   confirmButtonText: "Replay!" });
                  $(".confirm").on("click", reset);
                }
};

//Function that determines whether it is player 1 or player 2's turn
var playersTurn = 0;
var turnCounter = function (){
    playersTurn +=1;
  if (playersTurn % 2 !== 0) {
      return "Player 1";
  } else if (playersTurn % 2 === 0)  {
      return "Player 2";
  }
};


//Function that runs every time a cell is clicked. It runs the turn counter, and then depending on who's turn it is it runs that players cycle(adding
//images to the cell etc, adds their name to the gameboard array and checks for a winner)
var gamePlay = function(){
    var player = turnCounter();
    if (player === "Player 1") {
        playFirst(this);
        addToArray(this, player);
        checkWinner();
        return;
  } else if (player === "Player 2") {
        playSecond(this);
        addToArray(this, player);
        checkWinner();
        return;
  }
};

//Function that determines who's turn it is to choose their player icon
var playersTurnToChoose = 0;
var iconCounter = function (){
    playersTurnToChoose +=1;
  if (playersTurnToChoose % 2 !== 0) {
      return "Player 1";
  } else if (playersTurnToChoose % 2 === 0)  {
      return "Player 2";
  }
};

//Function that removes the dark overlay over the background and removes the player icon choice screen. Called later after second players click.
var removeOverlayAndIcons = function(){
  $(".overlay").addClass('animated bounceOutLeft');
  $(".playerIconChoice").addClass('animated bounceOutRight');
};

//Function that brings in the gameboard, score counter and second logo. Also fades them in from 0 opacity.
var gameBoardAndScoresEnter = function(){
  $(".gameBoard").addClass('animated rotateIn');
  $("#scoreCounter").addClass('animated bounceInRight');
  $(".resetBothScores").addClass('animated bounceInDown');
	$(".gameLogoBoard").addClass('animated bounceInDown');
  $("#scoreCounter").fadeTo("slow", 1);
  $(".resetBothScores").fadeTo("slow", 1);
	$(".gameLogoBoard").fadeTo("slow", 1);
};

//Function that changes the h2 to "Let's play!". Called after the second players click.
var letsPlayText = function (){
  $("h2").html("Let's Play!");
};

//Function that assigns the background image from the icon that the person chose to the score counter and cells once chosen.
//Also unbinds the click from that icon so two players can't have the same.
//After the second player selects their choice the text changes to "Let's play", the overlay and icons exit and just after that the game board
//animation fires so they can enter.
var $imageSrc;
var playerChoosesIcon = function(){
  var player = iconCounter();
    if (player === "Player 1") {
      var $clickedIconImage = $("img", this);
      var $imageSrc = $clickedIconImage[0].src;
      $("#firstPlayerScoreIcon").css({
        "background-image": 'url('+$imageSrc+')'
      });
      player1Icon = 'url('+$imageSrc+')';
      $(this).addClass('animated bounce');
      // $("#bowserAudio").play();
      $(this).unbind("click");
} else {
      var $clickedIconImage = $("img", this);
      var $imageSrc = $clickedIconImage[0].src;
      $("#secondPlayerScoreIcon").css({
        "background-image": 'url('+$imageSrc+')'
      });
      player2Icon = 'url('+$imageSrc+')';
      $(this).addClass('animated bounce');
      window.setTimeout(letsPlayText,0);
      window.setTimeout(removeOverlayAndIcons,1500);
      window.setTimeout(gameBoardAndScoresEnter,2250);
}
  $("h2").html("Player 2: Choose your Player!");
  $("h2").addClass("animated tada");
};

//Function call that runs the playerChoosesIcon function when the player clicks a choice.
$(".selectIcon").on("click", playerChoosesIcon);

//Function call to make the magic happen! On a cell click the whole game play sequence runs.
$(".cell").on("click", gamePlay);

//Animation that brings in all the player icon choices
var playerIconChoiceEntry = function() {
  $(".playerIconChoice").animate({left: "0px"}, 600, "easeOutBack", function(){});
};

//Brings in the player icon choice 1s after the page loads
window.setTimeout(playerIconChoiceEntry,1000);
