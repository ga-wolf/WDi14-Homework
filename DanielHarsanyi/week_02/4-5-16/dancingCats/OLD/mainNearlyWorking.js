var catGif = document.querySelector('.blackCatGif');
var dubstepCat = document.querySelectorAll('.dubstepCat');
var pinkCat = document.querySelector('#pinkCat');
var beanieCat = document.querySelector('#beanieCat');
catGif.setAttribute("style", "left: 0px");
pinkCat.setAttribute("width", "10px");

var pinkCatGrowTimer;

var browserRightBorder = window.innerWidth - 267;
var browserLeftBorder = window.screenLeft;

var walkTimerRight = null;

var catWalkRight = function () {
  var currentLeftPosition = parseInt(catGif.style.left);

  if (currentLeftPosition > browserRightBorder ) {
      rotateLeft();
      window.clearInterval(walkTimerRight);
      walkTimerLeft = window.setInterval(catWalkLeft, 50);
  }

  var newLeftPosition = currentLeftPosition + 10;
  catGif.style.left = newLeftPosition+"px";
};

var catWalkLeft = function () {
  var currentLeftPosition = parseInt(catGif.style.left);

  if (currentLeftPosition < browserLeftBorder ) {
      rotateRight();
      window.clearInterval(walkTimerLeft);
      walkTimerRight = window.setInterval(catWalkRight, 50);
  }

  var newLeftPosition = currentLeftPosition - 10;
  catGif.style.left = newLeftPosition+"px";
};

walkTimerRight = window.setInterval(catWalkRight, 50);

var rotateLeft = function (){
    catGif.style.transform = "rotateY(180deg)";
};

var rotateRight = function (){
    catGif.style.transform = "rotateY(0deg)";
};

var changeBackground = function (){
    document.body.style.backgroundImage = "url('assets/dubstepBackground.gif')";
};

var delayAppearance = function ( index ) {
  window.setTimeout(function () {
    dubstepCat[index].style.opacity = 1;
  }, 500 * (index + 1));
};

var catsAppear = function(){
  for (var i = 0 ; i < dubstepCat.length ; i += 1){
    delayAppearance( i );
    nextCat = dubstepCat[i];
  }
};

var randomCatPosition = {
    vibratingCat: function () {
        vibratingCat.style.left = ((Math.random()+1)+(Math.random()+1)*100)+"px";
        vibratingCat.style.top = ((Math.random()+1)+(Math.random()+1)*100)+"px";
    },
    lightsaberCat: function () {
        lightsaberCat.style.left = ((Math.random()+1)+(Math.random()+1)*700)+"px";
        lightsaberCat.style.top = ((Math.random()+1)+(Math.random()+1)*300)+"px";
    },
    pinkCat: function () {
        pinkCat.style.left = ((Math.random()+1)+(Math.random()+1)*500)+"px";
        pinkCat.style.top = ((Math.random()+1)+(Math.random()+1)*200)+"px";
    },
    beanieCat: function () {
        beanieCat.style.left = ((Math.random()+1)+(Math.random()+1)*200)+"px";
        beanieCat.style.top = ((Math.random()+1)+(Math.random()+1)*500)+"px";
    }
};

var pinkCatGrow = function () {
    var currentWidth = pinkCat.width;

    if (currentWidth > 500) {
      window.clearInterval(pinkCatGrowTimer);
      pinkCatShrinkTimer = window.setInterval(pinkCatShrink, 10);
    }

    var newWidth = currentWidth + 5;
    pinkCat.width = newWidth;
};

var pinkCatShrink = function () {
    var currentWidth = pinkCat.width;

    if (currentWidth <= 10) {
      window.clearInterval(pinkCatShrinkTimer);
      pinkCatGrowTimer = window.setInterval(pinkCatGrow, 10);
    }
    var newWidth = currentWidth - 5;
    pinkCat.width = newWidth;
};



window.setInterval(randomCatPosition.vibratingCat, 500);
window.setInterval(randomCatPosition.lightsaberCat, 500);
window.setInterval(randomCatPosition.pinkCat, 500);
window.setInterval(randomCatPosition.beanieCat, 500);
window.setInterval(catsAppear, 3000);
window.setInterval(changeBackground, 3000);

// window.setTimeout()
pinkCatGrowTimer = window.setInterval(pinkCatGrow, 10);
