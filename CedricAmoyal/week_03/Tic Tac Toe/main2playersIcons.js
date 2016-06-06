console.log("Tic Tac Toe");

var $allIcons = $(".fa");
var $allIconsPlayer1 = $(".playerChoice1 i.fa");
var $allIconsPlayer2 = $(".playerChoice2 i.fa");

var colorPlayer1Icons = "silver";
var colorPlayer2Icons = "silver";
var chosenColorPlayer1Icons = "rgba(239, 204, 17, 0.99)";
var chosenColorPlayer2Icons = "black";
var showWinningCellsColor = "#eee;";


var $player1SelectedIcon;
var $player2SelectedIcon;
$allIconsPlayer1.css("color", colorPlayer1Icons);
$allIconsPlayer2.css("color", colorPlayer2Icons);

var $allCells = $(".cell");
var $newGameButtonAction = $(".newGameButton");

var $player1WinsAction = $(".player1Wins");
var $player2WinsAction = $(".player2Wins");

$allCells.css("background-color", "white");

var counter = 0;
var arrayOf1or2 = ["","","","","","","","",""];
var selectedCells = [];
var winner = "";
var winningCells;

var thePlayer1Wins = 0;
var thePlayer2Wins = 0;

$player1WinsAction.html("The player 1 points: " + thePlayer1Wins );
$player2WinsAction.html("The player 2 points: " + thePlayer2Wins );

    $allIconsPlayer1.on("click",function () {
        var $currentIcon = $( this );
        $allIconsPlayer1.css("color", colorPlayer1Icons);
        $currentIcon.css("color", chosenColorPlayer1Icons);
        $player1SelectedIcon = $currentIcon;
    });

    $allIconsPlayer2.on("click",function () {
        var $currentIcon = $( this );
        $allIconsPlayer2.css("color", colorPlayer2Icons);
        $currentIcon.css("color", chosenColorPlayer2Icons);
        $player2SelectedIcon = $currentIcon;
    });



    $allCells.on("click",function () {
            var $currentCell = $( this );

            if (winner !== "") {
              alertMessageGameIsFinished();
              return;
            }


             if ( arrayOf1or2[$currentCell.index()] !== "" ) {
               myErroAlert();
               return;
             }

            counter++;

              if ( counter % 2 !== 0 ){
                  var $img1 = $("<img>");
                  $img1 = $player1SelectedIcon.clone();
                  $currentCell.append( $img1 );

                  arrayOf1or2[$currentCell.index()] = "1";
                }

              if ( counter % 2 === 0 ){
                var $img2 = $("<img>");
                $img2 = $player2SelectedIcon.clone();
                $currentCell.append( $img2 );

                arrayOf1or2[$currentCell.index()] = "2";
            }

            console.log("You did " + counter + " valid clicks.");
            selectedCells.push($currentCell.index());
            console.log("The following cells have already been selected: " + selectedCells);

// For the player 1 to win:

            for (var i = 0; i < 3; i++) {
                if (arrayOf1or2[0+(3*i)] === "1" &&
                arrayOf1or2[1+(3*i)] === "1" &&
                arrayOf1or2[2+(3*i)] === "1") {


                  $allCells[0+(3*i)].style.backgroundColor = showWinningCellsColor;
                  $allCells[1+(3*i)].style.backgroundColor = showWinningCellsColor;
                  $allCells[2+(3*i)].style.backgroundColor = showWinningCellsColor;

                    winner = "the player 1";
                    thePlayer1Wins++;
                    thereIsAWinnerAlert();
                  }
                 }

             for (var i = 0; i < 3; i++) {
                 if (arrayOf1or2[0+i] === "1" &&
                 arrayOf1or2[3+i] === "1" &&
                 arrayOf1or2[6+i] === "1") {

                   $allCells[0+i].style.backgroundColor = showWinningCellsColor;
                   $allCells[3+i].style.backgroundColor = showWinningCellsColor;
                   $allCells[6+i].style.backgroundColor = showWinningCellsColor;

                     winner = "the player 1";
                     thePlayer1Wins++;
                     thereIsAWinnerAlert();
                   }
                  }

              if (arrayOf1or2[0] === "1" &&
              arrayOf1or2[4] === "1" &&
              arrayOf1or2[8] === "1") {

                $allCells[0].style.backgroundColor = showWinningCellsColor;
                $allCells[4].style.backgroundColor = showWinningCellsColor;
                $allCells[8].style.backgroundColor = showWinningCellsColor;

                  winner = "the player 1";
                  thePlayer1Wins++;
                  thereIsAWinnerAlert();
                }

              if (arrayOf1or2[2] === "1" &&
              arrayOf1or2[4] === "1" &&
              arrayOf1or2[6] === "1") {

                $allCells[2].style.backgroundColor = showWinningCellsColor;
                $allCells[4].style.backgroundColor = showWinningCellsColor;
                $allCells[6].style.backgroundColor = showWinningCellsColor;

                  winner = "the player 1";
                  thePlayer1Wins++;
                  thereIsAWinnerAlert();
                }

// For the player 2 to win:


            for (var i = 0; i < 3; i++) {
                if (arrayOf1or2[0+(3*i)] === "2" &&
                arrayOf1or2[1+(3*i)] === "2" &&
                arrayOf1or2[2+(3*i)] === "2") {


                  $allCells[0+(3*i)].style.backgroundColor = showWinningCellsColor;
                  $allCells[1+(3*i)].style.backgroundColor = showWinningCellsColor;
                  $allCells[2+(3*i)].style.backgroundColor = showWinningCellsColor;

                    winner = "the player 2";
                    thePlayer2Wins++;
                    thereIsAWinnerAlert();
                  }
                 }

             for (var i = 0; i < 3; i++) {
                 if (arrayOf1or2[0+i] === "2" &&
                 arrayOf1or2[3+i] === "2" &&
                 arrayOf1or2[6+i] === "2") {

                   $allCells[0+i].style.backgroundColor = showWinningCellsColor;
                   $allCells[3+i].style.backgroundColor = showWinningCellsColor;
                   $allCells[6+i].style.backgroundColor = showWinningCellsColor;

                     winner = "the player 2";
                     thePlayer2Wins++;
                     thereIsAWinnerAlert();
                   }
                  }

              if (arrayOf1or2[0] === "2" &&
              arrayOf1or2[4] === "2" &&
              arrayOf1or2[8] === "2") {

                $allCells[0].style.backgroundColor = showWinningCellsColor;
                $allCells[4].style.backgroundColor = showWinningCellsColor;
                $allCells[8].style.backgroundColor = showWinningCellsColor;

                  winner = "the player 2";
                  thePlayer2Wins++;
                  thereIsAWinnerAlert();
                }

              if (arrayOf1or2[2] === "2" &&
              arrayOf1or2[4] === "2" &&
              arrayOf1or2[6] === "2") {

                $allCells[2].style.backgroundColor = showWinningCellsColor;
                $allCells[4].style.backgroundColor = showWinningCellsColor;
                $allCells[6].style.backgroundColor = showWinningCellsColor;

                  winner = "the player 2";
                  thePlayer2Wins++;
                  thereIsAWinnerAlert();
                }


// Tie
              if (
              arrayOf1or2[0] !== "" &&
              arrayOf1or2[1] !== "" &&
              arrayOf1or2[2] !== "" &&
              arrayOf1or2[3] !== "" &&
              arrayOf1or2[4] !== "" &&
              arrayOf1or2[5] !== "" &&
              arrayOf1or2[6] !== "" &&
              arrayOf1or2[7] !== "" &&
              arrayOf1or2[8] !== "" &&
              winner !== "the player 1" &&
              winner !== "the player 2"
              )
              { winner = "tie";
                tieAlert(); }

              $player1WinsAction.html("The player 1 points: " + thePlayer1Wins );
              $player2WinsAction.html("The player 2 points: " + thePlayer2Wins );

          });

$newGameButtonAction.on("click",function () {
    // $allCells.css("background-image", image00);
    $allCells.empty();
    arrayOf1or2 = ["","","","","","","","",""];
    $allCells.css("background-color", "white");

    if ( winner !== "the player 1" && winner !== "the player 2" && winner !== "tie") {
    newGameAlert(); }

    winner = "";
    counter = 0;

    console.log("You asked for a new game?");
});

var myErroAlert = function(){
  swal({   title: "Oops ...",   text: "You can't select this cell again.\n Please choose an other one my friend !!",   type: "error",   confirmButtonText: "Go back to the game" });
}

var thereIsAWinnerAlert = function(){
  swal({   title: "And the winner is:\n" + winner + " !",   text: "Good Job !",   type: "success",   confirmButtonText: "Play again" });
}

var tieAlert = function(){
  swal({   title: "Tie !",   text: "I am sure that you can do better !",   type: "success",   confirmButtonText: "Play again" });
}

var newGameAlert = function() {
  swal({   title: "Are you finished with this game?",   text: "This will start a new game.",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, let's start a new game",   closeOnConfirm: false }, function(){   swal("It is ok", "Here is the new game.", "success"); });
}

var alertMessageGameIsFinished = function () {
  swal({   title: "Oops ...",   text: "The game is finished.\n Click on the new game button to play again.",   type: "error",   confirmButtonText: "Cool" });
}
