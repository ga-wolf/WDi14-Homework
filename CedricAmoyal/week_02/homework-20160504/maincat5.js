console.log("hello the cat");

var cat1 = document.querySelector(".theCat1");

//Starting style attributes
cat1.style.top = "155px";
cat1.style.left = "0px";

var currentLeftValue;

// Dancing cat and man duration:
var dancingDuration = 3000;

// All the timer needed in order:
var changeImage1Timer = null;
var animationCat1MoveToRightPart1Timer = null;
var animationCat1MoveToRightPart2Timer = null;
var changeImage2Timer = null;
var animationCat1MoveToLeftPart1Timer = null;
var changeImage4Timer = null;
var animationCat1MoveToLeftPart2Timer = null;

// Function that makes the cat walk both ways:
var pleaseWalk = function (x) {
    currentLeftValue = parseFloat( cat1.style.left );

    var newLeftValue = currentLeftValue + 10*x;
    cat1.style.left = newLeftValue + "px";

    return cat1.style.left;
};

// Animation and Function to make the cat walk to the right part1:
var animationCat1MoveToRightPart1 = function () {
    return animationCat1MoveToRightPart1Timer = window.setInterval( makeCat1MoveToRightPart1, 50);
}

var makeCat1MoveToRightPart1 = function () {

  pleaseWalk(1);

    if (currentLeftValue > window.innerWidth/2 - 200) {
      window.clearInterval( animationCat1MoveToRightPart1Timer );

      changeImage1();
      return;
    }
};

// Function to then change the walking cat to a dancing cat:
var changeImage1 = function () {
    cat1.src = "http://hypervocal.com/wp-content/uploads/2014/08/dancing-cat.gif";

     changeImage2Timer = window.setTimeout(changeImage2, dancingDuration);
}

// Function to then change the dancing cat back to a walking cat:
var changeImage2 = function () {
    cat1.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";

    animationCat1MoveToRightPart2();

}

// Animation and Function to make the cat walk to the right part2:
var animationCat1MoveToRightPart2 = function () {
    return animationCat1MoveToRightPart2Timer = window.setInterval( makeCat1MoveToRightPart2, 50);
}

var makeCat1MoveToRightPart2 = function () {

  pleaseWalk(1);

    if (currentLeftValue > window.innerWidth - 280) {
      window.clearInterval( animationCat1MoveToRightPart2Timer );
      cat1.style.transform = "scaleX(-1)";
      cat1.style.filter = "FlipH";
      animationCat1MoveToLeftPart1();
      return;
    }
};

// Animation and Function to make the cat walk to the left part1:

var animationCat1MoveToLeftPart1 = function () {
    return animationCat1MoveToLeftPart1Timer = window.setInterval( makeCat1MoveToLeftPart1, 50);
}

var makeCat1MoveToLeftPart1 = function () {

  pleaseWalk(-1);

    if (currentLeftValue < window.innerWidth/2 - 270) {
      window.clearInterval( animationCat1MoveToLeftPart1Timer );

      changeImage3();
      return;
    }
};

// Function to then change the walking cat to a dancing man:
var changeImage3 = function () {
    cat1.src = "https://38.media.tumblr.com/4c2a7f80f9d2ef93f56d26fbcbd7d1cc/tumblr_npet25RxQ01txkob5o1_500.gif";

     changeImage4Timer = window.setTimeout(changeImage4, dancingDuration);
}

// Function to then change the dancing man back to a walking cat:
var changeImage4 = function () {
    cat1.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";

    animationCat1MoveToLeftPart2();
}

// Animation and Function to make the cat walk to the left part2 and then to call animationCat1MoveToRightPart1() to re-start everything from the beginning:

var animationCat1MoveToLeftPart2 = function () {
    return animationCat1MoveToLeftPart2Timer = window.setInterval( makeCat1MoveToLeftPart2, 50);
}

var makeCat1MoveToLeftPart2 = function () {

  pleaseWalk(-1);

    if (currentLeftValue < 0 ) {
      window.clearInterval( animationCat1MoveToLeftPart2Timer );
      cat1.style.transform = "scaleX(1)";
      cat1.style.filter = "FlipH";
      animationCat1MoveToRightPart1();
      return;
    }
};

// Function to call to start everything:
animationCat1MoveToRightPart1();
