var cat = document.querySelector(".cat");
var body = document.querySelector("body");
var moveTimer = null;
var rollover = true;
var flip = false;



//Setting the location of my cat
cat.style.left = "0px";

//cat to move forward
var move = function() {
  var currentPos = parseInt(cat.style.left);
  var newPos = currentPos + 2;
  if(currentPos >= window.innerWidth - cat.width) {
    window.clearInterval(moveTimer);
    rollover = false;
    return rollover;
  }
  cat.style.left = newPos + "px";
};

//cat to move back
var moveBack = function() {
  var currentPos = parseInt(cat.style.left);
  var newPos = currentPos - 2 ;
  if(currentPos === 0) {
    window.clearInterval(moveTimer);
    rollover = true;
    return rollover;
  }
  cat.style.left = newPos + "px";
};

//Movement loop and img flip
var movement = function() {
  if(flip === true) {
    cat.style.transform = "rotateY(0deg)";
  }
  if(rollover === true) {
    moveTimer = window.setInterval(move, 10);
} else {
    cat.style.transform = "rotateY(180deg)";
    flip = true;
  moveTimer = window.setInterval(moveBack, 10);
  }
};

//Boom catwoman
var switchTime = function() {
  cat.src="catwoman.gif";
  cat.style.top = "70px";
  cat.style.width= "400px";

};

//aww change back
var switchBack = function() {
  cat.src="http://www.anniemation.com/clip_art/images/cat-walk.gif";
  cat.style.top = "230px";
  cat.style.width ="296px";
};

//theatrics
var smoke =  function() {
  cat.src="http://www.zweifuss.ca/ibuki/cloud.gif";
};

var money = function()  {
  body.style.background = "http://i26.photobucket.com/albums/c124/craigpearce88/rain-money.gif";
}

var back = function() {
  body.appendChild(background = "red")
}


var money = function()  {
  body.style.background = "url(http://i26.photobucket.com/albums/c124/craigpearce88/rain-money.gif)";
};

var noMoney = function()  {
  body.style.background = null;
}
//kick off
window.setInterval(movement, 5000);
window.setTimeout(smoke, 14500);
window.setTimeout(switchTime, 15000);
window.setInterval(money, 16000)
window.setInterval(noMoney, 24000)
window.setTimeout(smoke, 24500);
window.setTimeout(switchBack, 25000);
