
var array = [["","",""],["","",""],["","",""]];
var user=null;
var numCol=0;
var numRow=0;
var turn=1;
var winner=null;

// Issue is... where is user?????

// $elem.data(i) and in html data-i='1' $elem.data('i', )
$(".pixel").on("click", function () {
  // debugger;
  var $currentPixel = $( this )
    if(turn === 1) {
      user="X"
      $currentPixel.css("background", "hotpink");
      console.log("X is moving??");
      var idNum = $($currentPixel).attr('dir')
      var idName = $($currentPixel).attr('name')
      numCol = parseFloat(idNum)
      numRow = parseFloat(idName)
      array[numCol][numRow]="X";
      turn-=1
      // return turn;
    } else {
      user="O"
      $currentPixel.css("background", "blue");
      console.log("O is playing??");
      var idNum = $($currentPixel).attr('dir')
      var idName = $($currentPixel).attr('name')
      numCol = parseFloat(idNum)
      numRow = parseFloat(idName)
      array[numCol][numRow]="O";
      turn+=1
      // return turn;
    }
getWinner();

winner=getWinner();
});



// getLocationX();
// getLocationO();


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
  // debugger;
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
  // debugger;

  if(user="X") {
    if(column() || row() || leftDiagram() || rightDiagram()) {
      console.log("Winner is XXXXX");

      return user;
    } else {
      // console.log("Nothing yet");
    }
  }

  if (user="O") {
    if(column() || row() || leftDiagram() || rightDiagram()) {
      console.log("Winner is OOOOO");

      return user;
    } else {
      // console.log("Nothing yet");
    }

  };

}
