var cat = document.querySelector('.cat');
var album = document.querySelector('.album');
var trance = document.querySelector('.tranceCat');
var shaq1 = document.querySelector('.shaqCat');
var shaq2 = document.querySelector('.shaqCat2');
var crazy = document.querySelector('.crazyCat');
var crazy2 = document.querySelector('.crazyCat2');
var crazy3 = document.querySelector('.crazyCat3');
var crazy4 = document.querySelector('.crazyCat4');
var bodyChange = document.querySelector('body');
cat.style.left = 0;
cat.style.right = 0;
album.style.width = "300px";
album.style.height = "300px";
album.style.marginTop = "18%";
album.style.backgroundImage = "url('images/michael-jackson-thriller.jpg')";
trance.style.top = "0px";
trance.style.left = "100px";
trance.style.visibility = "hidden";
shaq1.style.visibility = "hidden";
shaq2.style.visibility = "hidden";
crazy.style.visibility = "hidden";
crazy2.style.visibility = "hidden";
crazy3.style.visibility = "hidden";
crazy4.style.visibility = "hidden";

console.log("hi");
var newleft = 0;
var tranceNewLeft = 0;
var tranceNewTop = 0;
var maxWidth = window.innerWidth - 200;
var animateright;
var movingRight = true;
var tranceMovingRight = true;
var tranceMovingDown = true;
var d = new Date();
var keepTime = d.getTime();
var startFade = keepTime + 1000;

var catPage = {

    catWalk: function() {
        if (movingRight) {
            newleft += 2;
            cat.style.left = newleft + 'px';
            if (parseInt(cat.style.left) > 590) {
                cat.style.transform = "scaleX(-1)";
                album.style.width = "100vw";
                album.style.height = "100vh";
                album.style.marginTop = 0;
                album.style.backgroundImage = "url('MJ-gif-1423215264.gif')";
                cat.style.left = newleft + 'px';
            }
            if (parseInt(cat.style.left) > 640) {
              album.style.backgroundImage = "url('onapq.gif')"
            }

            if (parseInt(cat.style.left) > 1200) {
                movingRight = false;
                cat.style.transform = "scaleX(1)";
            }

        } else {
            newleft -= 3;
            cat.style.left = newleft + 'px';
            if (parseInt(cat.style.left) === 590) {
                console.log(parseInt(cat.style.left));


            }
            if (parseInt(cat.style.left) < 0) {
                movingRight = true;
                cat.style.transform = "scaleX(-1)";
            }
        }
    },
    hideMoreCats: function() {
        for (var i = 1; i <= 15; i++) {
            var newCat = document.querySelector('.thrillerCat' + i);
            newCat.style.visibility = "hidden";
        }
    },
    moreCats: function() {
        for (var i = 1; i <= 8; i++) {
            var newCat = document.querySelector('.thrillerCat' + i);
            console.log(newCat);
            newCat.style.visibility = "visible";
            newCat.style.top = "0px";
            newCat.style.left = 200 * (i - 1) - 200 + "px";
        }
    },
    evenMoreCats: function() {
        for (var i = 9; i <= 15; i++) {
            var newCat = document.querySelector('.thrillerCat' + i);
            console.log(newCat);
            newCat.style.visibility = "visible";
            newCat.style.top = "520px";
            newCat.style.left = 200 * (i - 8) - 200 + "px";
        }
    },
    tranceCat: function() {
        if (tranceMovingRight) {
            tranceNewLeft += 2;
            trance.style.left = tranceNewLeft + 'px';
            if (parseInt(trance.style.left) > 1250) {
                tranceMovingRight = false;
            }

        } else {
            tranceNewLeft -= 3;
            trance.style.left = tranceNewLeft + 'px';
            if (parseInt(trance.style.left) < 0) {
                tranceMovingRight = true;
            }
        };
        if (tranceMovingDown) {
            tranceNewTop += 4;
            trance.style.top = tranceNewTop + 'px';
            if (parseInt(trance.style.top) > 650) {
                tranceMovingDown = false;
            }

        } else {
            tranceNewTop -= 3;
            trance.style.top = tranceNewTop + 'px';
            if (parseInt(trance.style.top) < 0) {
                tranceMovingDown = true;
            }
        }
    },
    makeVis: function() {
      trance.style.visibility = "visible";
    },
    makeShaq1Vis: function() {
      shaq1.style.visibility = "visible";
    },
    makeShaq2Vis: function() {
      shaq2.style.visibility = "visible";
    },
    makeCat1Vis: function() {
      crazy.style.visibility = "visible";
    },
    makeCat2Vis: function() {
      crazy2.style.visibility = "visible";
    },
    makeCat3Vis: function() {
      crazy3.style.visibility = "visible";
    },
    makeCat4Vis: function() {
      crazy4.style.visibility = "visible";
    },
    clearPage: function() {
      var bodyTag = document.querySelector("body");
      bodyTag.innerHTML = "";
      bodyChange.style.backgroundImage = "url('d64.gif')";
    }
};
catPage.hideMoreCats();

var animate = window.setInterval(catPage.catWalk, 69);
var goCats = window.setTimeout(catPage.moreCats, 22300);
var goGoCats = window.setTimeout(catPage.evenMoreCats, 25000);
var trancing = window.setInterval(catPage.tranceCat, 5);
var makeVis = window.setTimeout(catPage.makeVis, 10000);
var crazyShaq = window.setTimeout(catPage.makeShaq1Vis, 27000);
var crazyShaq2 = window.setTimeout(catPage.makeShaq2Vis, 28000);
var cats1 = window.setTimeout(catPage.makeCat1Vis, 29000);
var cats2 = window.setTimeout(catPage.makeCat2Vis, 30000);
var cats3 = window.setTimeout(catPage.makeCat3Vis, 31000);
var cats4 = window.setTimeout(catPage.makeCat4Vis, 32000);
window.setTimeout(catPage.clearPage, 40000);
