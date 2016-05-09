
var array = [["","","X","O"],["X","O","O","O"],["X","O","O","X"],["X","O","O","O"]];
var user=null;

// When the winner is X


// var getValue = document.querySelector(".pixel4").value
//
// var getXMove = function(column, row) {
// user =  "X"
// $(column + row).on("click", function(){
//   ".cellOne" = 0;
//   ".cellTwo" = 1;
//   ".cellThree" = 2;
//
//   ".pixel1" = 0;
//   ".pixel2" = 1;
//   ".pixel3" = 2;
//
//   array[0][0]=user;
//   console.log("It just ran")
// });
// };
//
// var getOMove = function () {
//   user = "O"
//
// }
//
//
// getXMove();
//

//Find and store the h2 with the class of typing

//Store its current HTML
//
// var currentHTML = $h2.html();
// var newHTML = currentHTML + currentLetter;
//
// //I then want to add whatever
//
// $h2.text( newHTML );
//
//     console.log( currentLetter );
// })

// var getOMove =

//
//
// $(".pixel").on("click", function(){
// var $currentNum = $( this );
// document.getElementByClassName("cellOne pixel1").value
//

var numCol=0;
var numRow=0;
// var getXMove = function(column, row) {
// user =  "X"
// $(column + row).on("click", function(){

var test = function() {
  user="X"
  $(".pixel").on("click", function () {
    // debugger;
    var $currentPixel = $( this )
  console.log("How??");
  var idNum = $($currentPixel).attr('id')
  var idName = $($currentPixel).attr('name')
  numCol = parseFloat(idNum)
  numRow = parseFloat(idName)

  array[numCol][numRow]=user;
  return array;
})
};

test();

var column = function () {
  var container = [];
  for(var j=0; j< array.length; j+= 1) {
    var prac=0;
    for(var i=0; i< array[j].length; i+=1 ) {
      if (array[j][i] === user){
        prac += 1;
      };
    };
    container.push(prac);
  };
  return container.includes(array.length);
}

// if one row is full of user, winner is found. If there is any other character, it

var row = function () {
  var container = [];
  for(var i=0; i< array.length; i+=1 ) {
    var prac=0;
    for(var j=0; j< array[i].length; j+= 1) {
      if (array[j][i]===user) {
        prac += 1;
      }
    }
    container.push(prac);
  };
  return container.includes(array.length);
};

var leftDiagram = function () {
  debugger;
  var prac=0;

  for(var i=0; i<array.length; i +=1) {
    if(array[i][i] === user) {
      prac+=1;
    };
  };
  return prac === array.length;
}

var rightDiagram = function () {
  var prac=0;
  for(var j=0; j<array.length; j+=1){
    if(array[j][array.length-1-j]===user){
      prac +=1;
    };
  };
  return prac === array.length;
}







var getWinner = function () {
  debugger;
  if(user="X") {
    if(column() || row() || leftDiagram() || rightDiagram()) {
      console.log("Winner is XXXXX");
    } else {
      console.log("Nothing yet");
    }
  }

  if (user="O") {
    if(column() || row() || leftDiagram() || rightDiagram()) {
      console.log("Winner is OOOOO");
    } else {
      console.log("Nothing yet");
    }
  }
}
