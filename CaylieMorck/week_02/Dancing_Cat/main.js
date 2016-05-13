var kitty = document.querySelector( ".kitty" );
kitty.style.top = "0px";
kitty.style.left = "0px";
var leftTimer = null;


var makeKittyDance = function () {
  //get current width
  var currentLeftValue = parseFloat( kitty.style.left );


  if (currentLeftValue >window.innerWidth - 200 ) {
    nick.style.left = "0px";
    return;
  }

var newLeftValue = currentLeftValue + 10;

kitty.style.left = newLeftValue + "px";

// console.log( "This just ran" );
// if ( currentWidth > 500 ) {
//   window.clearInterval( widthTimer )
// }
//
//   //add ten to it
//   var newWidth = currentWidth + 10;
//   //then change the width to be the new value
//   kitty.width = newWidth;
// };
//
//
// widthTimer = window.setInterval( makeKittyDance, 100 );
//
//
// window.setTimeout(delayMilliseconds, 1000);
//
// var kittyWalk = funtion () {
//
// }
