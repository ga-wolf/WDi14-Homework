var greyWalk = document.querySelector( ".greyWalk" );
var greyLeftTimer = null;
var greyRightTimer = null;
var windowWidth = window.innerWidth;

greyWalk.style.left = "-250px"

var greyWalkMoveRight = function() {
  greyWalk.style.transform = "scaleX(-1)"

  var curLeft = parseFloat( greyWalk.style.left );
  var newLeft = curLeft + 2;

  if( newLeft >= windowWidth ) {
    window.clearInterval( greyRightTimer )
    greyLeftTimer = window.setInterval( greyWalkMoveLeft, 20 )
  }

  greyWalk.style.left = newLeft + "px";
};

var greyWalkMoveLeft = function() {
  greyWalk.style.transform = "scaleX(1)"

  var curLeft = parseFloat( greyWalk.style.left );
  var newLeft = curLeft - 2;

  if( newLeft <= -200 ) {
    window.clearInterval( greyLeftTimer )
    greyRightTimer = window.setInterval( greyWalkMoveRight, 20 );
  }

  greyWalk.style.left = newLeft + "px";
};

greyRightTimer = window.setInterval( greyWalkMoveRight, 20 );
