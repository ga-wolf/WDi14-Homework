var catgroup = document.querySelector('.catgroup');
var smallcatgroup1 = document.querySelector('.smallcatgroup1')
catgroup.style.left = '0px';
smallcatgroup1.style.left = '0px';


var leftTimer = null;
var leftTimer2 = null;

var makeCatMove2 = function () {
  var theCurrentSmallGtoup = parseFloat(smallcatgroup1.style.left);
  var newCurrentSmallGroup = theCurrentSmallGtoup+1;
  smallcatgroup1.style.left = newCurrentSmallGroup + 'px';
  if (newCurrentSmallGroup>window.innerWidth+900) {
   smallcatgroup1.style.transform = 'scaleX(-1)';
   setInterval(catWalkback2,10)

 }
 }
  //   setTimeout(function () {setInterval(catWalkback2, 100)},5000);
  // }



// setTimeout(function(){window.setInterval(makeCatMove2, 4)}, 5000);




var makeCatMove1 = function () {

  var thecurrent = parseFloat(catgroup.style.left);
  var newLeftValue = thecurrent + 1;
    catgroup.style.left = newLeftValue + 'px';
    if (thecurrent > window.innerWidth+60 ) {
      catgroup.style.transform = "scaleX(-1)";
    setInterval(catWalkback,100);
  }
}
//
catWalkback = function () {
  var theWalkbackleft = parseFloat(catgroup.style.left);
  var newWalkbackleft = theWalkbackleft -1;
  catgroup.style.left = newWalkbackleft+'px'
if (newWalkbackleft === -100){
  clearInterval(leftTimer)
}}

catWalkback2 = function (){
  var theWalkbackleft2 = parseFloat(smallcatgroup1.style.left);
  var newWalkbackleft2 = theWalkbackleft2-1;
  smallcatgroup1.style.left = newWalkbackleft2+'px';
  if (newWalkbackleft2 === -100) {
    clearInterval(leftTimer2)
  }
  }

  // if(newLeftValue === -800) {
  //   clearInterval()

leftTimer = window.setInterval(makeCatMove1, 10);

leftTimer2 = function(){window.setInterval(makeCatMove2, 4)}

 window.setTimeout(leftTimer2, 5000);
