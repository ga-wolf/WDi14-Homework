


var myCat = document.querySelector (".catty1");

myCat.style.top = "0px";
myCat.style.left = "10px";
var leftTimer = null;


var makeCatMove = function (){
  var currentLeftValue = parseFloat (myCat.style.left);

  if (currentLeftValue > window.innerWidth - 200) {
    return
  }
  var newLeftValue = currentLeftValue  + 5 ;
  myCat.style.left = newLeftValue + "px";
  console.log (currentLeftValue)
  }

leftTimer = window.setInterval (makeCatMove, 50);
