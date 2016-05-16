// I need to state the cats positiion
//Left = 0 Right = ++
//Need to add intervals to the number to make the cat walk to the right of the screen
//Screen width? and then walk the cat to the total??
//left = 0px right = 960px?



//var image= document.getElementsByClassName("cat");
// image.style.left = "0px";
//  var leftTimer = null;
//
//  var makeCatWalk = function () {


 // };
//
// var makeCatWalk = function (){
//
// };

// $(document).ready(function(){
//   $("cat").animate({left: "250px"});


// };)
//
// $("button").click(function(){
//     $("div").animate({left: '250px'});
// });
//

//var image = document.getElementsByClassName("cat")[0];

 var image= document.querySelector(".cat");
 var audio = new Audio('sound/MeowSongClubRemix.mp3');
 //audio.mute();



image.style.left = "0px";
image.style.transform = "scaleX(1)";
var makeCatWalk = function() {

  if (image.style.transform === "scaleX(1)") {
    if (parseInt(image.style.left) + image.width + 10 <= window.innerWidth)
      image.style.left = parseInt(image.style.left) + 10 + 'px'; // walks to end of the screen
    else
      image.style.transform = "scaleX(-1)"; // flips cat around to face the other way
  }
   else {
     if ((parseInt(image.style.left) + image.width / 2 - window.innerWidth / 2) < 10) {
       //((window.innerWidth / 2) -  (parseInt(image.style.left) + image.width / 2))
       $(".evilcat").css("opacity", 1);
       $(".cat").hide();

       clearInterval(catTimer);

       var hideEvilCat = function() {
         $(".evilcat").css("opacity", 0);
         document.body.style.backgroundImage = 'url("http://i.imgur.com/HO7TGHZ.gif")';
         //audio.play();
         //document.getElementById('audioPlayer').muted = true;
         // adding music  document.body.style.() = 'url '
       }
       setTimeout(hideEvilCat, 1000);

     }
     if (parseInt(image.style.left) - 10 > 0)
       image.style.left = parseInt(image.style.left) - 10 + 'px';
     else
      image.style.transform = "scaleX(1)";

  }

};
var catTimer = setInterval(makeCatWalk, 50);
