var nick = document.querySelector(".nick");
// Starting style - make sure you use units when necessary!
nick.style.top  = "0px";
nick.style.left = "0px";
var leftTimer = null;

var direction = 1;
var makeNickMove = function () {
      var currentLeftValue = parseFloat( nick.style.left );
      var newLeftValue;
      if (direction === 1) {
        newLeftValue = currentLeftValue + 2;

      } else {
        newLeftValue = currentLeftValue - 2;
      }
      nick.style.left = newLeftValue + "px";

      if ( currentLeftValue > window.innerWidth - 201){
        nick.style.transform = "scaleX(-1)"
        direction = -1;
        return;
      } else if (currentLeftValue <= 0) {
        nick.style.transform = "scaleX(1)"
        direction = 1;
        return;
      } else if ((currentLeftValue - window.innerWidth / 2) < 2) {

      }


};

leftTimer = window.setInterval ( makeNickMove, 10 );
