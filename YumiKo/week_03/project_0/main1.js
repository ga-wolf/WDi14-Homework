//Here, getwinner of O and getwinner of X is separated

var array = [["X","O","X","O"],["X","O","O","O"],["X","O","O","X"],["X","O","O","O"]];

// When the winner is X

var column = function () {
  var container = [];
  for(var j=0; j< array.length; j+= 1) {
    var prac=0;
    for(var i=0; i< array[j].length; i+=1 ) {
      if (array[j][i] === "X"){
        prac += 1;
      };
    };
    container.push(prac);
  };
  return container.includes(array.length);
}

// if one row is full of "X", winner is found. If there is any other character, it

var row = function () {
  var container = [];
  for(var i=0; i< array.length; i+=1 ) {
    var prac=0;
    for(var j=0; j< array[i].length; j+= 1) {
      if (array[j][i]==="X") {
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
    if(array[i][i] === "X") {
      prac+=1;
    };
  };
  return prac === array.length;
}

var rightDiagram = function () {
  var prac=0;
  for(var j=0; j<array.length; j+=1){
    if(array[j][array.length-1-j]==="X"){
      prac +=1;
    };
  };
  return prac === array.length;
}




var getWinner = function () {
  debugger;

if(column() || row() || leftDiagram() || rightDiagram()) {
  console.log("Winner is here");
} else {
  console.log("No winner yet");
}
}



//When the winner is O


var column = function () {
  var container = [];
  for(var j=0; j< array.length; j+= 1) {
    var prac=0;
    for(var i=0; i< array[j].length; i+=1 ) {
      if (array[j][i] === "O"){
        prac += 1;
      };
    };
    container.push(prac);
  };
  return container.includes(array.length);
}

// if one row is full of "O", winner is found. If there is any other character, it

var row = function () {
  var container = [];
  for(var i=0; i< array.length; i+=1 ) {
    var prac=0;
    for(var j=0; j< array[i].length; j+= 1) {
      if (array[j][i]==="O") {
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
    if(array[i][i] === "O") {
      prac+=1;
    };
  };
  return prac === array.length;
}

var rightDiagram = function () {
  var prac=0;
  for(var j=0; j<array.length; j+=1){
    if(array[j][array.length-1-j]==="O"){
      prac +=1;
    };
  };
  return prac === array.length;
}




var getWinner = function () {
  debugger;

if(column() || row() || leftDiagram() || rightDiagram()) {
  console.log("Winner is here");
} else {
  console.log("No winner yet");
}
}
