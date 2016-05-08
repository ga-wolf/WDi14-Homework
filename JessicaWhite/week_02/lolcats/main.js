console.log("LOL cats  =^.^= ");
////////////////////////////////////////////////////////////////
var fly = document.querySelector(".fly");

fly.style.top = "540px";
fly.style.left = "-300px";
var flyTimer = null;

var catfly = function () {
    var currentLeftValue = parseFloat( fly.style.left );

    // If the image is near the right of the screen, stop the timer
    if ( currentLeftValue > window.innerWidth - 10 ) {
      fly.style.left = "-300px";
      return;
    }
    var newLeftValue = currentLeftValue + 1;

    fly.style.left = newLeftValue + "px"; //IMPORTANT to add back the px!
};

  flyTimer = window.setInterval( catfly, 10 );

catfly();

////////////////////////////////////////////
var vom1 = $(".vom1");
var howFatCat = null;

// var catShoot = function () {
//   if (vom1.css("opacity") === "1") {
//   var mouthTop = parseFloat( vom1.css("top") );
//   var newTop = mouthTop - (Math.random() * 20);
//
//   var oldLeft = parseFloat(vom1.css("left"));
//
//   if ( oldLeft > window.innerWidth ) {
//     clearInterval(howFatCat);
//     return;
//   }
//   var newLeftCat = oldLeft - Math.floor(Math.random() * 20);
//   if (newLeftCat >= 0)
//     vom1.css("left", newLeftCat + "px");
//   if (newTop >= 0)
//     vom1.css("top", newTop + "px");
// }
// };



// catShoot();

/////////////////////////////////////////////
// var barfCats = function () {
//   var howFatCat = null;
//   // var $imgWithId = $("img[catpuke]");
//   if (document.getElementById("catpuke") === $(".vom1, .vom2, .vom3, .vom4, .vom5")) {
//     var ToTheLeft = function () {
//       var toTheLeft = parseFloat( this.style.left );
//
//         if ( toTheLeft > window.innerWidth - 1 ) {
//         window.clearInterval(howFatCat);
//         return;
//         }
//
//       var everythingYouOwn = toTheLeft + Math.ceil(Math.random() * 10);
//
//       this.style.left = everythingYouOwn + "px";
//     };
//
//   howFatCat = window.setInterval( ToTheLeft, 10 );
//
//   ToTheLeft();
//   };
// };
//////////////////////////////////////////////
// var delayAppearance = function ( index ) {
//   window.setTimeout(function () {
//     dubstepCat[index].style.opacity = 1;
//   }, 500 * (index + 1));
// };
//
// var catsAppear = function(){
//   for (var i = 0 ; i < dubstepCat.length ; i += 1){
//     delayAppearance( i );
//     nextCat = dubstepCat[i];
//   }
// };

//this will make them appear when clicked
// $('.class1').add('.class2').click(some_function);
$(".vom1").add(".vom2").add(".vom3").add(".vom4").add(".vom5").click(function(){
  $(this).css("opacity", "1");
  target = $(this);
  var catShoot = function () {
    var mouthTop = parseFloat( target.css("top") );
    var newTop = mouthTop - (Math.random() * 20);

    var oldLeft = parseFloat(target.css("left"));

    if ( oldLeft > window.innerWidth ) {
      clearInterval(howFatCat);
      return;
    }
    var newLeftCat = oldLeft - Math.floor(Math.random() * 20);
    if (newLeftCat >= 0)
      target.css("left", newLeftCat + "px");
    if (newTop >= 0)
      target.css("top", newTop + "px");

    target.fadeOut(3000);
  };
  howFatCat = window.setInterval(catShoot, 10);

});

window.setTimeout( function () {
$("body").css({
  backgroundImage: "url('https://m.popkey.co/3af64e/GezqD.gif')",
  zIndex: "99999999"
})}, 20000);

window.setTimeout(function() {
  $(".cat").hide()
}, 20000);
///////////////////////////////////////////////////////

// var barfCats = function() {

//       var currentLeftValue = parseFloat( fly.style.left );
//
//       // If the image is near the right of the screen, stop the timer
//       if ( currentLeftValue > window.innerWidth - 10 ) {
//         fly.style.left = "-300px";
//         return;
//       }
//       var newLeftValue = currentLeftValue + 1;
//
//       fly.style.left = newLeftValue + "px"; //IMPORTANT to add back the px!
//   };
//
//     flyTimer = window.setInterval( barfCats, 10 );

///////////////////////////////////////////////////////


// var pukeUpCats = function () {
//   var currentTopValue = parseFloat( topValue.top );
//
//   if ( currentTopValue >= window.innerHeight - 200 ) {
//     window.clearInterval( howFatCat );
//     return;
//   }
//
//   var newTopValue = currentTopValue + 1;
//   topValue.top = newTopValue + "px";
// };
// // leftTimer = window.setInterval( makeNickMove, 10 );
//   howFatCat = window.setInterval( pukeUpCats, 10 );

///////////////////////////////////////////////////////////////
