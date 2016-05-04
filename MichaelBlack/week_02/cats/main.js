var greyWalk = document.querySelector( ".greyWalk" );
var greyLeftTimer;
var greyRightTimer;
var newPosition = -250;
var windowWidth = window.innerWidth -200;
// greyWalk.setAttribute( "left", "0" );

var greyWalkMoveLeft = function() {
  // var position = greyWalk.left;

  newPosition += 10;

  if( newPosition >= windowWidth ) {
    window.clearInterval( greyLeftTimer )
    window.setInterval( greyRightTimer )
  }

  greyWalk.style.left = newPosition + "px";
};

greyLeftTimer = window.setInterval( greyWalkMoveLeft, 100 );
