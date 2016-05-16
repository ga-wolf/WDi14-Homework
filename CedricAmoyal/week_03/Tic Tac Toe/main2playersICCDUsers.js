console.log("Thank you Kane");

/////////////////////////////////////////////////

//Database variables: seperate data with var item = new ... .../items

var playerNamesData = new Firebase('https://brilliant-torch-7428.firebaseio.com/playersName');
var player1ColorData = new Firebase('https://brilliant-torch-7428.firebaseio.com/player1Color');
var player2ColorData = new Firebase('https://brilliant-torch-7428.firebaseio.com/player2Color');
var cellsPlayer1Data = new Firebase('https://brilliant-torch-7428.firebaseio.com/cellsPlayer1');
var cellsPlayer2Data = new Firebase('https://brilliant-torch-7428.firebaseio.com/cellsPlayer2');
var player1SelectedIconData = new Firebase('https://brilliant-torch-7428.firebaseio.com/selectedIconPlayer1');
var player2SelectedIconData = new Firebase('https://brilliant-torch-7428.firebaseio.com/selectedIconPlayer2');
var playerTurnsArrayData = new Firebase('https://brilliant-torch-7428.firebaseio.com/playerTurnsArrayData');
var selectedIconPlayer1ArrayData = new Firebase('https://brilliant-torch-7428.firebaseio.com/selectedIconPlayer1ArrayData');
var selectedIconPlayer2ArrayData = new Firebase('https://brilliant-torch-7428.firebaseio.com/selectedIconPlayer2ArrayData');
var playerWinsData = new Firebase('https://brilliant-torch-7428.firebaseio.com/playerWinsData');

///////////////////////////////////////////////////

// Modal:
var thisShouldBeDelayed = function () {
   window.open("#openModal", "_self");
 };
window.setTimeout(thisShouldBeDelayed, 1000);

///////////////////////////////////////////////////

// Game main variables:
      // All Icons variables:
      var $allIcons = $(".fa");
      var $allIconsPlayer1 = $(".playerChoice1 i.fa");
      var $allIconsPlayer2 = $(".playerChoice2 i.fa");
      // Selected icons:
      var $player1SelectedIcon;
      var $player2SelectedIcon;

      // Icon initial color:
      var colorPlayer1Icons = "silver";
      var colorPlayer2Icons = "silver";
      $allIconsPlayer1.css("color", colorPlayer1Icons);
      $allIconsPlayer2.css("color", colorPlayer2Icons);
      // Icon chosen colors
      var chosenColorPlayer1Icons = "rgba(239, 204, 17, 0.99)";
      var chosenColorPlayer2Icons = "black";
      // Highlight winning cells
      var showWinningCellsColor = "#eee";

      // Cells variables:
      var $allCells = $(".cell");
      $allCells.css("background-color", "white");
      var arrayOf1or2 = ["","","","","","","","",""];
      var selectedCells = [];

      // Button variables:
      var $newGameButtonAction = $(".newGameButton");
      var $letsPlayButtonAction = $(".letsPlayButton");

      // Players variables:
      var player1NameFromInput = "the player 1";
      var player2NameFromInput = "the player 2";

      var $player1TitleAction = $(".player1Title");
      var $player2TitleAction = $(".player2Title");

      var playerTurnsArray = ["It is player 1 turn !"];
      var selectedIconPlayer1Array;
      var selectedIconPlayer2Array;

      // Winners variables:
      var $player1WinsAction = $(".player1Wins");
      var $player2WinsAction = $(".player2Wins");

      var winner = "";
      var winningCells;

      var thePlayer1Wins = 0;
      var thePlayer2Wins = 0;

////////////////////////////////////////////////
// Player names functions + database:

// Get the info from the inputs:
$(".player1Name").keyup(function(){
   player1NameFromInput = $(".player1Name").val();
});

$(".player2Name").keyup(function(){
   player2NameFromInput = $(".player2Name").val();
});

// Function to update the player names:

var updateNames = function () {
  $player1WinsAction.html(player1NameFromInput + "'s" + " points: " + thePlayer1Wins );
  $player2WinsAction.html(player2NameFromInput + "'s" + " points: " + thePlayer2Wins );

  $player1TitleAction.html(player1NameFromInput + "'s" + " icons: ");
  $player2TitleAction.html(player2NameFromInput + "'s" + " icons: ");
};

// Push the the updated names to the database:

$letsPlayButtonAction.on("click",function () {
  updateNames();
  playerNamesData.push({ player1:player1NameFromInput, player2:player2NameFromInput});
});

// Collect the update names from the database:

var messagePlayerNames;

playerNamesData.on("child_added", function(snapshot){
  console.log(snapshot);
  console.log(snapshot.val());
  messagePlayerNames = snapshot.val()
  player1NameFromInput = messagePlayerNames.player1;
  player2NameFromInput = messagePlayerNames.player2;
  updateNames();
});

// To add the player names to the html:

$player1WinsAction.html(player1NameFromInput + "'s" + " points: " + thePlayer1Wins );
$player2WinsAction.html(player2NameFromInput + "'s" + " points: " + thePlayer2Wins );

$player1TitleAction.html(player1NameFromInput + "'s" + " icons: ");
$player2TitleAction.html(player2NameFromInput + "'s" + " icons: ");

////////////////////////////////////////////////

// Initial colors:
$("#custom1").spectrum({
    color: chosenColorPlayer1Icons
});

$("#custom2").spectrum({
    color: chosenColorPlayer2Icons
});

// Player1: Function to update the spectrum colors and the selected icons colors:
var chosenColorPlayer1IconsString = "background-color: " + chosenColorPlayer1Icons;
var updatePlayer1Color = function () {
    $(".sp-preview-inner").first().attr('style', chosenColorPlayer1IconsString);
    $player1SelectedIcon.css("color", chosenColorPlayer1Icons);

};
// Player2: Function to update the spectrum colors and the selected icons colors:
var chosenColorPlayer2IconsString = "background-color: " + chosenColorPlayer2Icons;
var updatePlayer2Color = function () {
    $(".sp-preview-inner").last().attr('style', chosenColorPlayer2IconsString);
    $player2SelectedIcon.css("color", chosenColorPlayer2Icons);
};

// Player1: to store color from spectrum + send to database:
  $(".sp-val").first().on("click", function() {
    var r1 = Math.round($("#custom1").spectrum("get")._r).toString();
    var g1 = Math.round($("#custom1").spectrum("get")._g).toString();
    var b1 = Math.round($("#custom1").spectrum("get")._b).toString();
    var a1 = Math.round($("#custom1").spectrum("get")._a).toString();
    chosenColorPlayer1Icons = "rgba(" + r1 + ", " + g1 + ", " + b1 + ", " + a1 + ")";

    player1ColorData.push({ player1:chosenColorPlayer1Icons});
  });

// Player2: to store color from spectrum + send to database:
  $(".sp-val").last().on("click", function() {
    var r2 = Math.round($("#custom2").spectrum("get")._r).toString();
    var g2 = Math.round($("#custom2").spectrum("get")._g).toString();
    var b2 = Math.round($("#custom2").spectrum("get")._b).toString();
    var a2 = Math.round($("#custom2").spectrum("get")._a).toString();
    chosenColorPlayer2Icons = "rgba(" + r2 + ", " + g2 + ", " + b2 + ", " + a2 + ")";

    player2ColorData.push({ player2:chosenColorPlayer2Icons});
  });

// Player1: to receive colors from the database:
  var messagePlayer1Color;

  player1ColorData.on("child_added", function(snapshot){
    console.log(snapshot);
    console.log(snapshot.val());
    messagePlayer1Color = snapshot.val()
    chosenColorPlayer1Icons = messagePlayer1Color.player1;
    chosenColorPlayer1IconsString = "background-color: " + chosenColorPlayer1Icons;
    window.setTimeout(updatePlayer1Color, 500);
  });

// Player2: to receive colors from the database:
  var messagePlayer2Color;

  player2ColorData.on("child_added", function(snapshot){
    console.log(snapshot);
    console.log(snapshot.val());
    messagePlayer2Color = snapshot.val()
    chosenColorPlayer2Icons = messagePlayer2Color.player2;
    chosenColorPlayer2IconsString = "background-color: " + chosenColorPlayer2Icons;
    window.setTimeout(updatePlayer2Color, 500);
  });

///////////////////////////////////

//Player1: to select icon + send to database:
  $allIconsPlayer1.on("click",function () {
      var $currentIcon = $( this );
      $allIconsPlayer1.css("color", colorPlayer1Icons);
      $currentIcon.css("color", chosenColorPlayer1Icons);
      $player1SelectedIcon = $currentIcon;

      selectedIconPlayer1ArrayData.push({ player1SelectedIndex:$currentIcon.index()-3, player1SelectedString:$currentIcon.attr("class").split(' ')[1] });
    });

//Player1: function to update selected icons:
  var messageSelectedIconPlayer1ArrayData;

  var updateSelectedIconPlayer1Array = function () {
    selectedIconPlayer1Array = ["0","0","0","0"];
    selectedIconPlayer1Array[messageSelectedIconPlayer1ArrayData.player1SelectedIndex] = messageSelectedIconPlayer1ArrayData.player1SelectedString;

      for (var i = 0; i < 4; i++){
        if ( selectedIconPlayer1Array[i] === "0" ){
          $allIconsPlayer1.eq(i).css("color", colorPlayer1Icons);
        }
        else {
          $allIconsPlayer1.eq(i).css("color", chosenColorPlayer1Icons);
          $player1SelectedIcon = $allIconsPlayer1.eq(i);
        }
      }
  };

//Player1: to get info from database:
      selectedIconPlayer1ArrayData.on("child_added", function(snapshot){
        console.log(snapshot);
        console.log(snapshot.val());

        messageSelectedIconPlayer1ArrayData = snapshot.val();
        updateSelectedIconPlayer1Array();
      });

//////////////////////////////////////////////

//Player2: to select icon + send to database:
  $allIconsPlayer2.on("click",function () {
      var $currentIcon = $( this );
      $allIconsPlayer2.css("color", colorPlayer2Icons);

      $currentIcon.css("color", chosenColorPlayer2Icons);
      $player2SelectedIcon = $currentIcon;

      selectedIconPlayer2ArrayData.push({ player2SelectedIndex:$currentIcon.index()-1, player2SelectedString:$currentIcon.attr("class").split(' ')[1] });

  });

//Player2: function to update selected icons:
    var messageSelectedIconPlayer2ArrayData;

    var updateSelectedIconPlayer2Array = function () {
      // playerTurnsArray[0] = messagePlayerTurnsArrayData.playerTurnsArray;
      selectedIconPlayer2Array = ["0","0","0","0"];
      selectedIconPlayer2Array[messageSelectedIconPlayer2ArrayData.player2SelectedIndex] = messageSelectedIconPlayer2ArrayData.player2SelectedString;

        for (var i = 0; i < 4; i++){
          if ( selectedIconPlayer2Array[i] === "0" ){
            $allIconsPlayer2.eq(i).css("color", colorPlayer2Icons);
          }
          else {
            $allIconsPlayer2.eq(i).css("color", chosenColorPlayer2Icons);
            $player2SelectedIcon = $allIconsPlayer2.eq(i);
          }
        }
    };

//Player2: to get info from database:
      selectedIconPlayer2ArrayData.on("child_added", function(snapshot){
        console.log(snapshot);
        console.log(snapshot.val());

        messageSelectedIconPlayer2ArrayData = snapshot.val();
        updateSelectedIconPlayer2Array();
      });

///////////////////////////

  $allCells.on("click",function () {

//Current Cell variable:
      var $currentCell = $( this );

//Alert message if the game is finished and a player tries to play:
      if (winner !== "") {
        alertMessageGameIsFinished();
        return;
      }

//Alert message if the clicked cell has already been selected:
     if ( arrayOf1or2[$currentCell.index()] !== "" ) {
       myErroAlert();
       return;
     }

// On click function + push info to database:

        if ( playerTurnsArray[0] === "It is player 1 turn !" ){
          var $img1 = $("<img>");
          $img1 = $player1SelectedIcon.clone();
          $currentCell.append( $img1 );
          playerTurnsArray[0] = "It is player 2 turn !";

          cellsPlayer1Data.push({currentCellIndex:$currentCell.index()});
          playerTurnsArrayData.push({playerTurnsArray:"It is player 2 turn !"});
        }

        else if ( playerTurnsArray[0] === "It is player 2 turn !" ){
          var $img2 = $("<img>");
          $img2 = $player2SelectedIcon.clone();
          $currentCell.append( $img2 );

          arrayOf1or2[$currentCell.index()] = "2";
          playerTurnsArray[0] = "It is player 1 turn !";

          cellsPlayer2Data.push({currentCellIndex:$currentCell.index()});
          playerTurnsArrayData.push({playerTurnsArray:"It is player 1 turn !"});
      }
// To console.log selected cells:
      selectedCells.push($currentCell.index());
      console.log("The following cells have already been selected: " + selectedCells);

    });

//////////////////////////////////////

// Function to know which player won:

var whoIsTheWinners = function () {

// For the player 1 to win:

      for (var i = 0; i < 3; i++) {
          if (arrayOf1or2[0+(3*i)] === "1" &&
          arrayOf1or2[1+(3*i)] === "1" &&
          arrayOf1or2[2+(3*i)] === "1") {


            $allCells[0+(3*i)].style.backgroundColor = showWinningCellsColor;
            $allCells[1+(3*i)].style.backgroundColor = showWinningCellsColor;
            $allCells[2+(3*i)].style.backgroundColor = showWinningCellsColor;

              winner = player1NameFromInput;
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

               winner = player1NameFromInput;
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

            winner = player1NameFromInput;
            thePlayer1Wins++;
            thereIsAWinnerAlert();
          }

        if (arrayOf1or2[2] === "1" &&
        arrayOf1or2[4] === "1" &&
        arrayOf1or2[6] === "1") {

          $allCells[2].style.backgroundColor = showWinningCellsColor;
          $allCells[4].style.backgroundColor = showWinningCellsColor;
          $allCells[6].style.backgroundColor = showWinningCellsColor;

            winner = player1NameFromInput;
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

              winner = player2NameFromInput;
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

               winner = player2NameFromInput;
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

            winner = player2NameFromInput;
            thePlayer2Wins++;
            thereIsAWinnerAlert();
          }

        if (arrayOf1or2[2] === "2" &&
        arrayOf1or2[4] === "2" &&
        arrayOf1or2[6] === "2") {

          $allCells[2].style.backgroundColor = showWinningCellsColor;
          $allCells[4].style.backgroundColor = showWinningCellsColor;
          $allCells[6].style.backgroundColor = showWinningCellsColor;

            winner = player2NameFromInput;
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
          winner !== player1NameFromInput &&
          winner !== player2NameFromInput
          )
          { winner = "tie";
            tieAlert(); }

// to update names and player wins + push player wins to database:
          updateNames();

      playerWinsData.push({player1Wins:thePlayer1Wins, player2Wins:thePlayer2Wins });

};

/////////////////////////////////////////
// See just above: push player wins to database.

// Function to update player wins:
var messagePlayerWins;

var updatePlayerWins = function () {
  thePlayer1Wins = messagePlayerWins.player1Wins;
  thePlayer2Wins = messagePlayerWins.player2Wins;

};

// To get player wins from database:
playerWinsData.on("child_added", function(snapshot){
  console.log(snapshot);
  console.log(snapshot.val());

  messagePlayerWins = snapshot.val();
  updatePlayerWins();
});

//////////////////////////////////////////
// Function to update the player turns and send to database:
var messagePlayerTurnsArrayData;

var updatePlayerTurnsArray = function () {
  playerTurnsArray[0] = messagePlayerTurnsArrayData.playerTurnsArray;
};

//To get player turns from database:
playerTurnsArrayData.on("child_added", function(snapshot){
  console.log(snapshot);
  console.log(snapshot.val());

  messagePlayerTurnsArrayData = snapshot.val();
  updatePlayerTurnsArray();
  whoIsTheWinners();
});

//////////////////////////////////////////

// To push cells content to database see above: $allCells.on("click",function ()

// Function to update cells for player1:
var messageCellsPlayer1Data;

var updateCells1 = function () {

  arrayOf1or2[messageCellsPlayer1Data.currentCellIndex] = "1";

  for (var i = 0; i < 9; i++) {

        if (arrayOf1or2[i] === "1") {
          var $imgTest1 = $("<img>");
          $imgTest1 = $player1SelectedIcon.clone();
          $allCells.eq(i).empty();
          $allCells.eq(i).append( $imgTest1 );
          }
  }
};
// To get update cell from database:
    cellsPlayer1Data.on("child_added", function(snapshot){
      console.log(snapshot);
      console.log(snapshot.val());
      messageCellsPlayer1Data = snapshot.val();
      updateCells1();
    });

//////////////////////////////////////////

// To push cells content to database see above: $allCells.on("click",function ()

// Function to update cells for player2:
  var messageCellsPlayer2Data;

  var updateCells2 = function () {

    arrayOf1or2[messageCellsPlayer2Data.currentCellIndex] = "2";

    for (var i = 0; i < 9; i++) {

          if (arrayOf1or2[i] === "2") {
            var $imgTest2 = $("<img>");
            $imgTest2 = $player2SelectedIcon.clone();
            $allCells.eq(i).empty();
            $allCells.eq(i).append( $imgTest2 );
            }
    }
  };
// To get update cell from database:
      cellsPlayer2Data.on("child_added", function(snapshot){
        console.log(snapshot);
        console.log(snapshot.val());
        messageCellsPlayer2Data = snapshot.val();
        updateCells2();
      });

///////////////////////////////////////////////
// New game button:

$newGameButtonAction.on("click",function () {
//Reset cells, array and background-color:
    $allCells.empty();
    arrayOf1or2 = ["","","","","","","","",""];
    $allCells.css("background-color", "white");
//New game alert if game is not finished and user click on new game button:
    if ( winner !== player1NameFromInput && winner !== player2NameFromInput && winner !== "tie") {
    newGameAlert(); }
//
    winner = "";
    // counter = 0;
    console.log("You asked for a new game?");
});

// Alert messages:

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
