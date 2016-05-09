//Here I'll try to substitute X, O with key, user


// When the winner is X
var tellWinner = {
user=["X","O"],
first : function (){

var array = [["X","O","X","O"],["X","O","X","O"],["X","O","X","X"],["O","O","X","O"]];


for ( var i=0; i<this.user.length; ) {

var column = function () {
  var container = [];
  for(var j=0; j< array.length; j+= 1) {
    var prac=0;
    for(var i=0; i< array[j].length; i+=1 ) {
      if (array[j][i] === key){
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
      if (array[j][i]=== key) {
        prac += 1;
      }
    }
    container.push(prac);
  };
  return container.includes(array.length);
};

var leftDiagram = function () {
  var prac=0;
  for(var i=0; i<array.length; i +=1) {
    if(array[i][i] === this.user) {
      prac+=1;
    };
  };
  return prac === array.length;
}

var rightDiagram = function () {
  var prac=0;
  for(var j=0; j<array.length; j+=1){
    if(array[j][array.length-1-j]=== this.user){
      prac +=1;
    };
  };
  return prac === array.length;
}

var getWinner = function () {
  if(column() || row() || leftDiagram() || rightDiagram()) {
    this.user = array.length;
    console.log("Winner is here"+ this.user);
  } else {
    console.log("No winner yet");
  }
  return this.user;
}


if(Object.keys(this.user).includes(array.length)){

console.log(this.user)
}
}
}

}
