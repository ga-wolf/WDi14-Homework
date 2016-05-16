var nick = document.querySelector(".nick");
// Starting style - make sure you use units when necessary!
nick.style.top  = "0px";
nick.style.left = "0px";
var leftTimer = null;

var makeNickMove = function () {
      var currentLeftValue = parseFloat( nick.style.left );

      if ( currentLeftValue > window.innerWidth - 201){
        nick.style.left = "0px";
        return;
      }

      var newLeftValue = currentLeftValue + 2;

      nick.style.left = newLeftValue + "px";
};

leftTimer = window.setInterval ( makeNickMove, 10 );
