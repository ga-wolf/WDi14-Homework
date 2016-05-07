var catGif = document.querySelector('.blackCatGif');
var dubstepCat = document.querySelectorAll('.dubstepCat');
var pinkCat = document.querySelector('#pinkCat');
catGif.setAttribute("style", "left: 0px");
pinkCat.setAttribute("width", "1px");

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

var pinkCatGrow = function () {
debugger;
    var currentWidth = pinkCat.width;

    if (currentWidth > 500) {
      window.clearInterval(pinkCatGrowTimer);
      pinkCatShrinkTimer = window.setInterval(pinkCatShrink, 10);
    }

    var newWidth = currentWidth + 1;
    pinkCat.width = newWidth;
};

var pinkCatShrink = function () {
    var currentWidth = pinkCat.width;

    if (currentWidth <= 10) {
      window.clearInterval(pinkCatShrinkTimer);
      pinkCatGrowTimer = window.setInterval(pinkCatGrow, 10);
    }
    var newWidth = currentWidth - 1;
    pinkCat.width = newWidth;
};



window.setInterval(catsAppear, 1500);
window.setInterval(changeBackground, 2000);

pinkCatGrowTimer = window.setInterval(pinkCatGrow, 10);
