

var lastMove;
var nextMove;
var playersMove;

var playerMoveToggle = function (lastMove) {
  var lastMove;

if
      (lastMove === "x") {
      playersMove = "0";
      nextMove = "x";
      lastMove = "0"
      console.log ("The move to be played is " + playersMove);
      console.log ("The next move will be " + nextMove);
      console.log ("The new last move is now "  + lastMove);
      return console.log ("Betty remember now the last is " + lastMove);
    }

    else {
      playersMove = "x";
      nextMove = "0"
      lastMove = "x";
      console.log ("The move to be played is " + playersMove);
      console.log ("The next move will be "  + nextMove);
      console.log ("The new last move is now "  + lastMove);
      return "I want Betty to remember this is the last move " +     lastMove;
}

}
