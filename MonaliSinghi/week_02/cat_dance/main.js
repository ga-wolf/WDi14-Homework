var cat = document.querySelector(".cat");
var catSong = document.getElementById("cat-song");
cat.style.left = "0px";
var animateLeft = null;
var newLeft = 0;
var animateRight = null;
var halfway;
var currentLeftValue;
var timer;
var displacement = 10;
var makeCatWalk = function(){
  var currentLeftValue = parseFloat(cat.style.left);
  var newLeftValue = currentLeftValue + 10;
  cat.style.left = newLeftValue + "px";

  var halfWay = Math.ceil(((window.innerWidth/2)-(cat.width/2))/displacement)*displacement;
  if(currentLeftValue === halfWay) {
    window.clearInterval(animateLeft);
    catDance();
  }
  if(currentLeftValue > window.innerWidth - 290 ){
    clearInterval(animateLeft);
    animateRight = setInterval(walkBack, 50);
  }
};

var walkBack = function() {
  var currentRight = parseFloat(cat.style.left);
    newLeft = currentRight - 10;
    cat.style.transform = "scaleX(-1)";
    cat.style.left = newLeft + 'px';
      if(newLeft === 0){
        clearInterval(animateRight);
        cat.style.transform = "scaleX(1)";
        cat.style.left = "0px";
        animateLeft = setInterval(makeCatWalk, 50);
      }
  }

  var catDance = function() {
      window.clearInterval(animateLeft);
      makeDancingCat();

      window.setTimeout(keepWalking, 10000);
  };
  var makeDancingCat = function() {
    cat.src = "images/cat-2.gif";
    catSong.play();
  };
  // Reset the cat image and start it walking again
  var keepWalking = function() {
    catSong.pause();
    cat.src = "./images/cat-walk.gif";
    animateLeft = window.setInterval(makeCatWalk, 50);
  };


animateLeft = window.setInterval(makeCatWalk, 50) ;
