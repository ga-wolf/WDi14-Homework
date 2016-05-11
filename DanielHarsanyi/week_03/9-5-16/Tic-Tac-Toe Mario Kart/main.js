/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
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

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */





















var gameBoard = [["cellOne", "cellTwo", "cellThree"],["cellFour", "cellFive", "cellSix"],["cellSeven", "cellEight", "cellNine"]];
var firstPlayerWins = localStorage.firstPlayerWins || 0;
var secondPlayerWins = localStorage.secondPlayerWins || 0;
var player1Icon;
var player2Icon;
$(document).ready(function(){
  $("#firstPlayerScore").html(firstPlayerWins);
  $("#secondPlayerScore").html(secondPlayerWins);
});

var playFirst = function ($cell) {
    $($cell).addClass("firstPlayerGameIcon");
    $($cell).css('background-image', player1Icon);
    $($cell).unbind("click");
};

var playSecond = function ($cell) {
    $($cell).addClass("secondPlayerGameIcon");
    $($cell).css('background-image', player2Icon);
    $($cell).unbind("click");
};

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

var reset = function (){
    gameBoard = [["cellOne", "cellTwo", "cellThree"],["cellFour", "cellFive", "cellSix"],["cellSeven", "cellEight", "cellNine"]];
    playersTurn = 0;
    $(".cell").removeClass("firstPlayerGameIcon secondPlayerGameIcon");
    $(".cell").css('background-image', '');
    $(".cell").unbind("click");
    $(".cell").on("click", gamePlay);
};

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

var resetScores = function (){
  firstPlayerWins = 0;
  localStorage.firstPlayerWins = 0;
  $("#firstPlayerScore").html(firstPlayerWins);
  secondPlayerWins = 0;
  localStorage.secondPlayerWins = 0;
  $("#secondPlayerScore").html(secondPlayerWins);
};

$(".resetBothScores").on("click", resetScores);

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

var playersTurn = 0;
var turnCounter = function (){
    playersTurn +=1;
  if (playersTurn % 2 !== 0) {
      return "Player 1";
  } else if (playersTurn % 2 === 0)  {
      return "Player 2";
  }
};

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

//Icon Setup

var playersTurnToChoose = 0;
var iconCounter = function (){
    playersTurnToChoose +=1;
  if (playersTurnToChoose % 2 !== 0) {
      return "Player 1";
  } else if (playersTurnToChoose % 2 === 0)  {
      return "Player 2";
  }
};

var $imageSrc;

var removeOverlayAndIcons = function(){
  $(".overlay").addClass('animated bounceOutLeft');
  $(".playerIconChoice").addClass('animated bounceOutRight');
};

var gameBoardAndScoresEnter = function(){
  $(".gameBoard").addClass('animated rotateIn');
  $("#scoreCounter").addClass('animated bounceInRight');
  $(".resetBothScores").addClass('animated bounceInDown');
  $("#scoreCounter").fadeTo("slow", 1);
  $(".resetBothScores").fadeTo("slow", 1);
};

var letsPlayText = function (){
  $("h2").html("Let's Play!");
};

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
  $("h2").html("Player 2: Choose your icon");
  $("h2").addClass("animated tada");
};

$(".selectIcon").on("click", playerChoosesIcon);

$(".cell").on("click", gamePlay);

//Animations

var playerIconChoiceEntry = function() {
  $(".playerIconChoice").animate({left: "0px"}, 600, "easeOutBack", function(){});
};


window.setTimeout(playerIconChoiceEntry,1000);
