// going vertical here
var player = {
  NE: false,
  N: false,
  NW: false,
  E: false,
  C: false,
  W: false,
  SE : false,
  S: false,
  SW: false
}

//create a var click to hold what is clicked
//function to determine what is click and the value
//assign the value to var click
//adds to playerOne array

$("#NE").on("click", function() {
  player.NE = true;
  winConditions(); // Must fix this
});
$("#N").on("click", function() {
  player.N = true;
  winConditions();
});
$("#NW").on("click", function() {
  player.NW = true;
  winConditions();
});
$("#E").on("click", function() {
  player.E = true;
  winConditions();
});
$("#Center").on("click", function() {
  player.C = true;
  winConditions();
});
$("#W").on("click", function() {
  player.W = true;
  winConditions();
});
$("#SE").on("click", function() {
  player.SE = true;
  winConditions();
});
$("#S").on("click", function() {
  player.S = true;
  winConditions();
});
$("#SW").on("click", function() {
  player.SW = true;
  winConditions();
});


//    Logic
//==============================================================================
var winConditions = function()  {
  if(
      (player.NE === true &&  player.N === true && player.NW === true) ||
      (player.E === true && player.C === true && player.W === true) ||
      (player.SE === true &&  player.S === true && player.SW === true) ||
      (player.NE === true &&  player.E === true && player.SE === true) ||
      (player.N === true &&  player.C === true && player.S === true) ||
      (player.NW === true &&  player.W === true && player.SW === true) ||
      (player.NE === true &&  player.C === true && player.SW === true) ||
      (player.NW === true &&  player.C === true && player.SE === true)
    ) {
    console.log("winner winner chicken dinner");//dummies for testing need to change
  } else {
    console.log("you lose")//dummies for testing need to change
  }
}
