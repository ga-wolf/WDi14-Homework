//Find the element you want to animate
var nick = document.querySelector( ".nick" );
var opacityTimer = null;

// Starting point for Animaton - this will be turned into the
//string "1"

nick.style.opacity = 1;

var makeNickFade = function () {
  // Turn the string version of opacity into a number (so we cand do maths on it) - include the decimal place

  var currentOpacityValue = parseFloat( nick.style.opacity );
  var newOpacityValue =  currentOpacityValue - 0.01;

  console.log( "Make Nick Fade just ran" );  

  if ( currentOpacityValue <= 0 ) {
    window.clearInterval( opacityTimer );
    return;
  }



  // Set nicks opacity to be what we actually want
  nick.style.opacity = newOpacityValue;

};

// window.setTimeout( makeNickFade, 1000 );

opacityTimer = window.setInterval( makeNickFade, 50);
