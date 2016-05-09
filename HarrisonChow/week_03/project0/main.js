var wonThree = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
var wonFour = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
  [1,5,9,13],
  [2,6,10,14],
  [3,7,11,15],
  [4,8,12,16],
  [1,6,11,16],
  [4,7,10,13]
];

var playerOneCurrent = [];
var playerTwoCurrent = [];

var playerOne = 1;
var playerTwo = -1;
var currentPlayer = playerOne;
var numGet = 3;

var cells = [];
var createPlayBoard = function () {
  var won=[];
  $("div.main").remove();
  numGet = $("input[name='games']:checked").val();
  for (var j = 0; j < numGet; j++) {
    var $newDivOut = $("<div class='main'></div>");
    $newDivOut.appendTo(document.body);
    for (var i = 0; i < numGet; i++) {
      var $newDivIn = $("<div class='cell' id='cell"+(j*numGet+i)+"'></div>");
      $newDivIn.appendTo($newDivOut);
      cells.push("cell"+(j*numGet+i));
      // won.push([i,j]);
      // for (var k = 0; k < won.length; k++) {
      //   for (var m = 0; m < numGet; m++) {
      //   console.log(won[k][m]);
      //   }
      // }
    }
  }
  addEventHandlers();
}

var addEventHandlers = function () {
  $("div.cell").off();
  $("div.cell").one("click", function (event) {
    var $currentCell = $(this);
    $currentCell.css("background", "black");

    if (currentPlayer === playerOne) {
      $currentCell.css("backgroundImage", "url(images/cross.png)");
      playerOneCurrent.push(cells.indexOf($currentCell.attr('id')));
      currentPlayer = playerTwo;
      var playOneCurrentSorted = playerOneCurrent.sort(function(a, b){return a-b});
      console.log('move:', playOneCurrentSorted);
      console.log('totalGrid:', numGet);
      wonThree.forEach(function(win) {
        var numOfWins = win.filter(function(value) { return playOneCurrentSorted.indexOf(value) != -1}).length;
        console.log('numberOfWins:', numOfWins);

        if(numOfWins === 3) {
          $("#popupcontent").html("Congratulations!  Player One is the winner!");
          showPopup(400,200);
          $("div.cell").css({
            "pointer-events":"none"
          })
        }
      });

    } else {
      $currentCell.css("backgroundImage", "url(images/circle.png)");
      playerTwoCurrent.push(cells.indexOf($currentCell.attr('id')));
      currentPlayer = playerOne;
      var playTwoCurrentSorted = playerTwoCurrent.sort(function(a, b){return a-b});
      console.log('move:', playTwoCurrentSorted);
      wonThree.forEach(function(win) {
        var numOfWins = win.filter(function(value) { return playTwoCurrentSorted.indexOf(value) != -1}).length;
        console.log('numberOfWins:', numOfWins);

        if(numOfWins === 3) {
          $("#popupcontent").html("Congratulations!  Player Two is the winner!");
          showPopup(400,200);
          $("div.cell").css({
            "pointer-events":"none"
          })
        }
      });

    }

    console.log('innerHTML: ', $currentCell.attr('id'));
  })
}

var baseText = null;

function showPopup(w,h){
   var popUp = document.getElementById("popupcontent");

   popUp.style.top = "100px";
   popUp.style.width = w + "px";
   popUp.style.height = h + "px";

   if (baseText == null) baseText = popUp.innerHTML;
   popUp.innerHTML = baseText +
      "<div id=\"statusbar\"><button onclick=\"hidePopup();\">Try again<button></div>";

   var sbar = document.getElementById("statusbar");
   sbar.style.marginTop = (parseInt(h)-100) + "px";
   popUp.style.visibility = "visible";
}

function hidePopup(){
   var popUp = document.getElementById("popupcontent");
   popUp.style.visibility = "hidden";
   createPlayBoard();
   playerOneCurrent = [];
   playerTwoCurrent = [];
   won = [];
   playerOne = 1;
   playerTwo = -1;

}
