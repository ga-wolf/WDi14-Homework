


var catOne = document.querySelector(".catOne");

  catOne.style.left = "20px";
  catOne.style.top = "350px"; 
// var glitterRain = document.queryselector(".rain");

  
window.setInterval(catWalk, 600);
  catOne.style.left = "0px";

var walkForwards = true;
function catWalk() {
  var currentLeft = parseInt(catOne.style.left);
  
  if (walkForwards && (currentLeft > (window.innerWidth-catOne.width))) {
    walkForwards = false;
  }
  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }
  
  if (walkForwards) {
    catOne.style.left = (currentLeft + 10) + "px";
  } else {
   catOne.style.left = (currentLeft - 10) + "px";
   catOne.style.transform = "rotate (180 degrees)";
  }
}
window.setInterval(catWalk, 80);







