console.log ("hello betty Let's make a cake move")

// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!


var myCat = document.querySelector (".catty1");

myCat.style.top = "0px";
myCat.style.left = "10px";
var leftTimer = null;


var makeCatMove = function (){
  var currentLeftValue = parseFloat (myCat.style.left);

  if (currentLeftValue > window.innerWidth - 300) {
    return
  }
  var newLeftValue = currentLeftValue  + 5 ;
  myCat.style.left = newLeftValue + "px";
  console.log (currentLeftValue)
  }

leftTimer = window.setInterval (makeCatMove, 50);


//
// var myCat2 = document.querySelector (".catty2");
//
// myCat2.style.top = "100px";
// myCat2.style.left = "100px";
// var leftTimer = null;
//
//
// var makeCatMove2 = function (){
//   var currentLeftValue = parseFloat (myCat2.style.left);
//   if (currentLeftValue > window.innerWidth - 200) {
//     return
//   }
//   var newLeftValue = currentLeftValue  + 5 ;
//   myCat2.style.left = newLeftValue + "px";
//   console.log (currentLeftValue)
//   }
//
// leftTimer = window.setInterval (makeCatMove2, 50);
// makeCat2Move ();
