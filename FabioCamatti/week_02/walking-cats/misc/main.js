var nick = document.querySelector(".nick");
var widthTimer;

nick.setAttribute("width", "200px");
// nick.style.width = "200px";

var makeImageBigger = function () {
  // Get the current width
  var currentWidth = nick.width;

console.log(widthTimer);
  if (currentWidth > 800 ) {
    window.clearInterval( widthTimer );
  }

  // Add ten to it
   var newWidth = currentWidth + 1;
  // Then change the width to be the new value
  nick.width = newWidth;


}

widthTimer = window.setInterval( makeImageBigger, 1 );
