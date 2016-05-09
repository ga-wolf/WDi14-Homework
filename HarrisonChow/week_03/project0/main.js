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
var currentPlayer;

// var cells = ['cellOne','cellTwo','cellThree', 'cellFour', 'cellFive', 'cellSix', 'cellSeven', 'cellEight','cellNine'];
// var cellss =[];
// var createCells = function (num) {
//   var x;
//   var y;
//   for (var i = 0; i < num*num; i++) {
//     x = i%num;
//     y = Math.floor(i/num);
//     cellss.push([x,y]);
// }
// }
// createCells(3);



// var won = function (num) {
//   for (var i = 0; i < cells.length; i++) {
//     for (var j = 0; j < num; j++) {
//       if (cells[i][j]) {
//
//       }
//
//       cells[i][j]
//     }
//
//
//   }
//
//
// }

var cells = [];
var createPlayBoard = function (numGet) {
  if ($("div.main").length){
    $("div.main").remove();
    var numGet = $("input[name='games']:checked"). val();
    for (var j = 0; j < numGet; j++) {
      var $newDivOut = $("<div class='main'></div>");
      $newDivOut.appendTo(document.body);
      for (var i = 0; i < numGet; i++) {
        var $newDivIn = $("<div class='cell' id='cell"+(j*numGet+i)+"'></div>");
        $newDivIn.appendTo($newDivOut);
        cells.push("cell"+(j*numGet+i));
      }
    }
    addEventHandlers();
  } else {
    var numGet = $("input[name='games']:checked"). val();
    for (var j = 0; j < numGet; j++) {
      var $newDivOut = $("<div class='main'></div>");
      $newDivOut.appendTo(document.body);
      for (var i = 0; i < numGet; i++) {
        var $newDivIn = $("<div class='cell' id='cell"+(j*numGet+i)+"'></div>");
        $newDivIn.appendTo($newDivOut);
        cells.push("cell"+(j*numGet+i));
      }
    }
  }
  addEventHandlers();
}

// var cells = {};
// var createPlayBoard = function (numGet) {
//
//   for (var j = 0; j < numGet; j++) {
//     var $newDivOut = $("<div></div>");
//     $newDivOut.appendTo(document.body);
//     for (var i = 0; i < numGet; i++) {
//       var $newDivIn = $("<div class='cell' id='cell"+(j*numGet+i)+"'></div>");
//       $newDivIn.appendTo($newDivOut);
//       cells["cell"+(j*numGet+i)] = [i,j];
//     }
//   }
// }
// createPlayBoard(3);
//
//
// var checkWin = function(playerCurrent) {
//   playerCurrent.map(function(location) {
//     return location[0];
//   });
// }

var addEventHandlers = function () {
  $("div.cell").off();
  $("div.cell").one("click", function (event) {
    var $currentCell = $(this);
    $currentCell.css("background", "black")
    if (currentPlayer === playerOne) {
      $currentCell.css("backgroundImage", "url(images/cross.png)");
      console.log($currentCell.attr('id'));
      playerOneCurrent. push(cells.indexOf($currentCell.attr('id')));
      currentPlayer = playerTwo;
      playOneCurrentSorted = playerOneCurrent.sort(function(a, b){return a-b});
      wonThree.forEach(function(win) {
        var result = playOneCurrentSorted.join('').indexOf(win.join(''));
        if(result != -1) {
          $("#popupcontent").html("Congratulations! \n Player One is the winner!");
          showPopup(400,200);
          $("div.cell").css({
            "pointer-events":"none",
            // "background": "none",
            // "backgroundImage":"none"
          })
        }
      });

    } else {
      $currentCell.css("backgroundImage", "url(images/circle.png)");
      playerTwoCurrent. push(cells.indexOf($currentCell.attr('id')));
      console.log(playerTwoCurrent);
      currentPlayer = playerOne;
      playTwoCurrentSorted = playerTwoCurrent.sort(function(a, b){return a-b});
      wonThree.forEach(function(win) {
        var result = playerTwoCurrent.join('').indexOf(win.join(''));
        if(result != -1) {
          console.log("playerTwo won!");
          $("div.cell").css("pointer-events","none")
        }
      });
    }
    console.log('innerHTML: ', $currentCell.attr('id'));
  })
}




var baseText = null;

function showPopup(w,h){
   var popUp = document.getElementById("popupcontent");

   popUp.style.top = "200px";
   popUp.style.width = w + "px";
   popUp.style.height = h + "px";

   if (baseText == null) baseText = popUp.innerHTML;
   popUp.innerHTML = baseText +
      "<div id=\"statusbar\"><button onclick=\"hidePopup();\">Close window<button></div>";

   var sbar = document.getElementById("statusbar");
   sbar.style.marginTop = (parseInt(h)-40) + "px";
   popUp.style.visibility = "visible";
}


function hidePopup(){
   var popUp = document.getElementById("popupcontent");
   popUp.style.visibility = "hidden";
}
