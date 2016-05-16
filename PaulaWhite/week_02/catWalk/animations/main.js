var nick = document.querySelector( ".nick" );
var widthTimer = null;
nick.setAttribute( "width", "200");
//nick.style.width = "200px";


var makeImageBigger = function (){
// Get the current width
var currentWidth = nick.width;

if (currentWidth > 500 ) {
  window.clearInterval(widthTimer);
}

console.log( widthTimer );


// if ( currentWidth > 500 ) {
//   return;
// }


// Add ten to it
var newWidth = currentWidth + 10;
// Then change the width to be the new value
nick.width = newWidth; // also can use this in browser
};

widthTimer = window.setInterval ( makeImageBigger, 100);



// always store the ID so that we can stop the timer
