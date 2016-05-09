var gameBoard = [[cellOne, cellTwo, cellThree],[cellFour, cellFive, cellSix],[cellSeven, cellEight, cellNine]];

var showX = function () {
  //capture which cell was clicked - mapped to 'this'
  //append 'x' to the correct div
    console.log("cell was clicked");
};


$(".cell").on("click", showX);
