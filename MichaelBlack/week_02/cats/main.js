var greyWalk = document.querySelector( ".greyWalk" );
var snake = document.querySelector( ".snake" );
var turning = document.querySelector( ".turning" );
var boom = document.querySelector( ".boom" );
var greyLeftTimer = null;
var greyRightTimer = null;
var snakeTimer = null;
var boomTimer = null;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var audio = document.querySelector( ".audio" );


var greyWalkMoveRight = function() {
  greyWalk.style.transform = "scaleX(-1)";

  var curLeft = parseFloat( greyWalk.style.left );
  var newLeft = curLeft + 4;

  if( newLeft >= windowWidth ) {
        // debugger;
    window.clearInterval( greyRightTimer );
    greyLeftTimer = window.setInterval( greyWalkMoveLeft, 10 );
    return;
  }

  greyWalk.style.left = newLeft + "px";
};

var greyWalkMoveLeft = function() {
  greyWalk.style.transform = "scaleX(1)";
  // greyWalk.style.height = "65vh";

  var curLeft = parseFloat( greyWalk.style.left );
  var newLeft = curLeft - 4;

  if( newLeft <= -100 ) {
    window.clearInterval( greyLeftTimer );
    audio.src = "https://www.youtube.com/embed/pVY1-v97Mic?autoplay=1";
    greyWalk.style.display = "none";
    turning.style.display = "none";
    snake.style.display = "inline";
    snake.style.left = "-1500px";
    snakeTimer = window.setInterval( snakeRight, 10 );
    return;
  }

  greyWalk.style.left = newLeft + "px";
};

var snakeRight = function() {
  var curLeft = parseInt( snake.style.left );
  var newLeft = curLeft + 6;

  if( newLeft >= (windowWidth + 50) ) {
    window.clearInterval( snakeTimer );
    snake.style.display="none";
    boom.style.display = "inline";
    boom.style.opacity = "0"
    boomTimer = window.setInterval( boomFade, 20 );
    return;
  }

  snake.style.left = newLeft + "px";
};

var boomFade = function() {
  var curOpacity = parseFloat( boom.style.opacity );
  var newOpacity = curOpacity + 0.02

  if( newOpacity >= 1 ){
    window.clearInterval( boomTimer );
    window.setTimeout( reset, 2500 );
    return;
  }

  boom.style.opacity = newOpacity;
};

var reset = function() {
  boom.style.opacity = "0"
  turning.style.display = "inline";
  greyWalk.style.display = "inline";
  greyWalk.style.left = "-250px";
  audio.src = "https://www.youtube.com/embed/AaEmCFiNqP0?autoplay=1"
  greyRightTimer = window.setInterval( greyWalkMoveRight, 20 );

};

// var bgFlash = function() {
//   var red = Math.random() * 255;
//   var green = Math.random() * 255;
//   var blue = Math.random() * 255;
//
//   var body = document.querySelector( "body" );
//
//   body.style.backgroundColor( "rgb(" + red + "," + green "," + blue + ")" );
//
// }

greyWalk.style.left = "-250px";
greyRightTimer = window.setInterval( greyWalkMoveRight, 20 );
