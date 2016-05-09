
var won=[];
var mm=[];
var ob = {};
var x;
var y;
var createPlayBoard = function (num) {
  for (var j = 0; j < num; j++) {
    for (var i = 0; i < num; i++) {
      won.push([i,j]);
      mm.push(j*num + i);
    }
  }
  ob= {mm:won};
  console.log(ob);
  console.log(won);
  console.log(mm);
  console.log(ob.mm);
}
createPlayBoard(3);


[[0,1], [0,2],[0,3]]
var x;
for (var i = 0; i < won.length; i++) {
  if (x === i) {

  }
}
