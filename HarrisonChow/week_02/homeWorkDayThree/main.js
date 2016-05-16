var dance = document.querySelector(".main");
var audio = document.querySelector("audio");
var danceTimer = null;
var danceTime = 8000;
var currentPosition = 0;
var imageWidth = 200;
var alldanceTimer = null;
dance.setAttribute("width",imageWidth);
dance.style.marginLeft = "-75px";


var createDancers = function(numOfDancers) {
  var dancers = document.createElement('div');
  for(var i=1; i<=numOfDancers; i++) {
    var dancer = document.createElement("img");
    dancer.setAttribute("src", "images/"+i+".gif");
    dancer.setAttribute("width", "250");
    dancers.appendChild(dancer);
  }
  dancers.style.marginLeft = "auto";
  dancers.style.marginRight = "auto";
  dancers.style.marginTop = "-220px";
  dancers.style.width = "1000px";
  document.body.appendChild(dancers);
  return dancers;
}

var move = function (direction) {
  currentPosition = parseFloat(dance.style.marginLeft);
  var newPosition = currentPosition + 10*direction;
  dance.style.marginLeft = newPosition+"px";
}

var dancers = createDancers(4);
dancers.style.opacity = 0;

var danceForwardLeft = function(){
  move(1);
  if (currentPosition > innerWidth/2-imageWidth) {
    window.clearInterval(danceTimer);
    dance.style.opacity = 0;
    dancers.style.opacity = 1;
    audio.play();
    var danceContinue = window.setTimeout(startToDanceForwardRight,danceTime);

  }
}

var startToDanceForwardRight = function() {
  audio.pause();
  dance.style.opacity = 1;
  dancers.style.opacity = 0;
  danceTimer = window.setInterval(dancingForwardRight, 50);
}

var dancingForwardRight =  function () {
  move(1);
  if (currentPosition >= innerWidth-imageWidth) {
    window.clearInterval(danceTimer);
    danceTimer = window.setInterval(dancingBackwardRight, 50);
  }
}

var dancingBackwardRight = function () {
  move(-1);
  if (currentPosition < innerWidth/2) {
    window.clearInterval(danceTimer);
    dance.style.opacity = 0;
    dancers.style.opacity = 1;
    audio.play();
    window.setTimeout(startToDanceBackwardLeft, danceTime);

  }

}

var startToDanceBackwardLeft = function () {
  audio.pause();
  dance.style.opacity = 1;
  dancers.style.opacity = 0;
  danceTimer = window.setInterval(danceBackwardLeft,50);
}

var danceBackwardLeft = function () {
  move(-1);
  if (currentPosition < 0) {
    window.clearInterval(danceTimer);
    danceTimer = window.setInterval(danceForwardLeft,50);
  }
}

danceTimer = window.setInterval(danceForwardLeft, 50);
