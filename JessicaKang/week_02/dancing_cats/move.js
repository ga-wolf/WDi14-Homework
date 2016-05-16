var kittens = document.querySelector( ".kittens" );
kittens.style.top = "200px";
kittens.style.left = "0px";
kittens.style.height = "275px";
kittens.style.width = "450px";
var leftTimer = null;

var makeKittensDance = function () {
  var currentLeftValue = parseFloat( kittens.style.left );

  if ( currentLeftValue > window.innerWidth - 500 ) {
    kittens.style.left = "0px";
    return;
  }
  var newLeftValue = currentLeftValue + 10;
  kittens.style.left = newLeftValue + "px";
};

leftTimer = window.setInterval( makeKittensDance, 30 );

makeKittensDance();
