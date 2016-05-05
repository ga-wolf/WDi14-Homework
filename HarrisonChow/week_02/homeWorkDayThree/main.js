var dance = document.querySelector(".main");
var danceTimer = null;
var alldanceTimer = null;
dance.setAttribute("width","150");
dance.style.marginLeft = "-75px";
var direction = 1;

var dancing = function () {
  var currentPosition = parseFloat(dance.style.marginLeft);
  if (direction === 1) {
    if(currentPosition < innerWidth-75) {
      var newPosition = (currentPosition + 10);
      dance.style.marginLeft = newPosition+"px";
    } else {
      direction = -1;
    }
  } else {
    if(currentPosition > -75) {
      var newPosition = (currentPosition - 10);
      dance.style.marginLeft = newPosition+"px";
    } else {
      direction = 1;
    }
  }
};


danceTimer = window.setInterval(dancing, 50);
