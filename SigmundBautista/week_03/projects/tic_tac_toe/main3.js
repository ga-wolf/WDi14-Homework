// going vertical here
var grid = {
  NE: "",
  N: "",
  NW: "",
  E: "",
  C: "",
  W: "",
  SE : "",
  S: "",
  SW: ""
}

var playerWin = false;

//    The Game
//==============================================================================
var newGame = function()  {
  $("#NE").on("click", function() {
    grid.NE = "X";
    winConditions(); // Must fix this
  }).append("<img src=X.gif>");
  $("#N").on("click", function() {
    grid.N = "X";
    winConditions();
  });
  $("#NW").on("click", function() {
    grid.NW = "X";
    winConditions();
  });
  $("#E").on("click", function() {
    grid.E = "X";
    winConditions();
  });
  $("#Center").on("click", function() {
    grid.C = "X";
    winConditions();
  });
  $("#W").on("click", function() {
    grid.W = "X";
    winConditions();
  });
  $("#SE").on("click", function() {
    grid.SE = "X";
    winConditions();
  });
  $("#S").on("click", function() {
    grid.S = "X";
    winConditions();
  });
  $("#SW").on("click", function() {
    grid.SW = "X";
    winConditions();
  });

}



//    Logic
//==============================================================================


var winConditions = function()  {
  if(
      (grid.NE === "X" &&  grid.N === "X" && grid.NW === "X") ||
      (grid.E === "X" && grid.C === "X" && grid.W === "X") ||
      (grid.SE === "X" &&  grid.S === "X" && grid.SW === "X") ||
      (grid.NE === "X" &&  grid.E === "X" && grid.SE === "X") ||
      (grid.N === "X" &&  grid.C === "X" && grid.S === "X") ||
      (grid.NW === "X" &&  grid.W === "X" && grid.SW === "X") ||
      (grid.NE === "X" &&  grid.C === "X" && grid.SW === "X") ||
      (grid.NW === "X" &&  grid.C === "X" && grid.SE === "X")
    ) {
    playerWin = true;
  }
  if (playerWin === true) {
    console.log("Winner winner chicken dinner")
  }
}

newGame()
