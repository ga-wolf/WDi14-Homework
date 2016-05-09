// The Cat Walk
//
// Who needs Milan when you have JavaScript?
//
// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
//
// Create a new Javascript file and link to it with a script tag at the bottom.
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.

// Starting style - make sure you use units when necessary!
var cat = document.querySelector(".cat");
var newCat = document.querySelector("img");
cat.style.top  = "0px";
cat.style.left = "0px";
var leftTimer = null;
var newCatTimer = null;
var amoutOfPixels = 100;
var catShow;
var nIntervId;
var currentLeftValue;
var newLeftValue;
var direction = 1;

leftTimer = function() {

      nIntervId = setInterval(catWalk, 50);
}

stopCat = function() {

      clearInterval(nIntervId);

}

var catWalk = function () {
      currentLeftValue = parseFloat( cat.style.left );


      if (direction === 1) {
        newLeftValue = currentLeftValue + amoutOfPixels;

      } else {
        newLeftValue = currentLeftValue - amoutOfPixels;
      }
      cat.style.left = newLeftValue + "px";

      if ( currentLeftValue > window.innerWidth - 300){
//         cat.style.left="0px";
        cat.style.transform = "scaleX(-1)"
        direction = -1;
        return;
      } else if (currentLeftValue <= 0) {
        cat.style.transform = "scaleX(1)"
        direction = 1;
        return;
      } else if (((currentLeftValue+(296/2)) - window.innerWidth / 2) < amoutOfPixels && direction === -1) {

           stopCat();
           newCat.src = "http://www.cutecatgifs.com/wp-content/uploads/2013/12/Facepalm.gif";
           catShow = window.setTimeout(hideCat, 7000);
           return;

      }

};

var hideCat = function(){
      newCat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
      return;
}

leftTimer();
