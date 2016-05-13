var kitty = document.querySelector( ".kitty" );
//starting style attributes - use units(px) when necessary!
  kitty.style.top = "0px";
  kitty.style.left = "0px";
  var leftTimer = null;

var makeKittyDance = function () {
  //use parseFloat to round the number up
  var currentLeftValue = parseFloat( kitty.style.left );
  //inner.width = use that point because it's the width of the screen, and we want the animation to stop at the end of the screen.
if ( currentLeftValue > window.innerWidth - 300 ) {
  kitty.style.left = "0px";
  return;
}

var newLeftValue = currentLeftValue + 10;
  kitty.style.left = newLeftValue + "px";
};
leftTimer = window.setInterval( makeKittyDance, 50 );









//Kane tips=
// You want to be working off 2 conditions basically. You want to be checking:
//
// Am I below this value? => Start counting up.
// Have I hit this value , or am I over it? => Start counting down.
//
// [5:05]
// I would probably use another variable to decide whether you want to count up or down. So you have a  function that says:
//
// if myVariable is true count up else count down
