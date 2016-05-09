//
// var exo = [];
// var bts = [];
//
// var victory =
//
//
// for(var i=0; i<exo.length; i+=1 ); {
// if (exo.includes())
//
//
//
// }




var test = [["a","b", "p"], ["d", "e", "f"]]

var check = ["a", "b", "c", "d", "e", "f"]


//
// var letmesee = function () {
//   // debugger;
//
// for (var j=0; j<test.length; j+=1 ) {
//
//
// for (var i=0; i<test[j].length; i+=1 ){
//   // var result = [];
//   if (check.includes(test[j][i])) {
//     return j;
//   }
//   console.log(check.includes(test[j][i]));
//
//
// };
// //
// // if (result === [true,true,true]){
// // return j;
// // };
//
//
//
// };
// }


var second = function (element){
check.includes(element);
}

// test[0].every(second(element))

var first = function () {
debugger;
for (var i=0; i<test.length; i +=1 ){
console.log(test[i].every(elem => check.includes(elem)));

};


}


var array = [["X","O","X","O"],["X","O","X","O"],["X","X","O","X"],["X","O","X","O"]];


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




//
//
// var lastPlayer =
// if(exo.length>bts.length){
//   return exo;
// } else{
//   return bts;
// }
//
// if (A || B) {
//   console.log("Now here is the winner, ");
//   return lastPlayer;
// }
