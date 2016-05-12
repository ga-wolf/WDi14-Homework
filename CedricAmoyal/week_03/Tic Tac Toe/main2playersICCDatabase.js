console.log("Thank you Kane");

//Database variables: seperate data with var item = new ... .../items

var playerNamesData = new Firebase('https://brilliant-torch-7428.firebaseio.com/playersName');
var player1ColorData = new Firebase('https://brilliant-torch-7428.firebaseio.com/player1Color');
var player2ColorData = new Firebase('https://brilliant-torch-7428.firebaseio.com/player2Color');
var cellsPlayer1Data = new Firebase('https://brilliant-torch-7428.firebaseio.com/cellsPlayer1');
var cellsPlayer2Data = new Firebase('https://brilliant-torch-7428.firebaseio.com/cellsPlayer2');
var player1SelectedIconData = new Firebase('https://brilliant-torch-7428.firebaseio.com/selectedIconPlayer1');
var player2SelectedIconData = new Firebase('https://brilliant-torch-7428.firebaseio.com/selectedIconPlayer2');

// Modal:
var thisShouldBeDelayed = function () {
   window.open("#openModal", "_self");
 };
window.setTimeout(thisShouldBeDelayed, 1000);


// Icon variables:
var $allIcons = $(".fa");
var $allIconsPlayer1 = $(".playerChoice1 i.fa");
var $allIconsPlayer2 = $(".playerChoice2 i.fa");
// Icon initial color:
var colorPlayer1Icons = "silver";
var colorPlayer2Icons = "silver";
// Icon chosen colors
var chosenColorPlayer1Icons = "rgba(239, 204, 17, 0.99)";
var chosenColorPlayer2Icons = "black";
// Highlight winning cells
var showWinningCellsColor = "#eee";
// Icons initial color:
$allIconsPlayer1.css("color", colorPlayer1Icons);
$allIconsPlayer2.css("color", colorPlayer2Icons);

// Selected icons:
var $player1SelectedIcon;
var $player2SelectedIcon;

// jQuery variables:
var $allCells = $(".cell");
var $newGameButtonAction = $(".newGameButton");
var $letsPlayButtonAction = $(".letsPlayButton");

var $player1WinsAction = $(".player1Wins");
var $player2WinsAction = $(".player2Wins");

var $player1TitleAction = $(".player1Title");
var $player2TitleAction = $(".player2Title");

$allCells.css("background-color", "white");

var counter = 0;
var arrayOf1or2 = ["","","","","","","","",""];
var selectedCells = [];
var winner = "";
var winningCells;

var thePlayer1Wins = 0;
var thePlayer2Wins = 0;

var player1NameFromInput = "the player 1";
var player2NameFromInput = "the player 2";

////////////////////////////////////////////////

$(".player1Name").keyup(function(){
   player1NameFromInput = $(".player1Name").val();
});

$(".player2Name").keyup(function(){
   player2NameFromInput = $(".player2Name").val();
});

$letsPlayButtonAction.on("click",function () {
  $player1WinsAction.html(player1NameFromInput + "'s" + " points: " + thePlayer1Wins );
  $player2WinsAction.html(player2NameFromInput + "'s" + " points: " + thePlayer2Wins );

  $player1TitleAction.html(player1NameFromInput + "'s" + " icons: ");
  $player2TitleAction.html(player2NameFromInput + "'s" + " icons: ");

  // send info to data base:
  playerNamesData.push({ player1:player1NameFromInput, player2:player2NameFromInput});

});

var updateNames = function () {
  $player1WinsAction.html(player1NameFromInput + "'s" + " points: " + thePlayer1Wins );
  $player2WinsAction.html(player2NameFromInput + "'s" + " points: " + thePlayer2Wins );

  $player1TitleAction.html(player1NameFromInput + "'s" + " icons: ");
  $player2TitleAction.html(player2NameFromInput + "'s" + " icons: ");
};

var messagePlayerNames;
//to get info from database:
playerNamesData.on("child_added", function(snapshot){
  console.log(snapshot);
  console.log(snapshot.val());
  messagePlayerNames = snapshot.val()
  player1NameFromInput = messagePlayerNames.player1;
  player2NameFromInput = messagePlayerNames.player2;
  updateNames();
});

$player1WinsAction.html(player1NameFromInput + "'s" + " points: " + thePlayer1Wins );
$player2WinsAction.html(player2NameFromInput + "'s" + " points: " + thePlayer2Wins );

$player1TitleAction.html(player1NameFromInput + "'s" + " icons: ");
$player2TitleAction.html(player2NameFromInput + "'s" + " icons: ");

////////////////////////////////////////////////

$("#custom1").spectrum({
    color: chosenColorPlayer1Icons
});

$("#custom2").spectrum({
    color: chosenColorPlayer2Icons
});


  $(".sp-val").first().on("click", function() {
    var r1 = Math.round($("#custom1").spectrum("get")._r).toString();
    var g1 = Math.round($("#custom1").spectrum("get")._g).toString();
    var b1 = Math.round($("#custom1").spectrum("get")._b).toString();
    var a1 = Math.round($("#custom1").spectrum("get")._a).toString();
    chosenColorPlayer1Icons = "rgba(" + r1 + ", " + g1 + ", " + b1 + ", " + a1 + ")";

    player1ColorData.push({ player1:chosenColorPlayer1Icons});
    // updatePlayer1Color();
  });

  $(".sp-val").last().on("click", function() {
    var r2 = Math.round($("#custom2").spectrum("get")._r).toString();
    var g2 = Math.round($("#custom2").spectrum("get")._g).toString();
    var b2 = Math.round($("#custom2").spectrum("get")._b).toString();
    var a2 = Math.round($("#custom2").spectrum("get")._a).toString();
    chosenColorPlayer2Icons = "rgba(" + r2 + ", " + g2 + ", " + b2 + ", " + a2 + ")";

    player2ColorData.push({ player2:chosenColorPlayer2Icons});
    // updatePlayer2Color();
  });


  var chosenColorPlayer1IconsString = "background-color: " + chosenColorPlayer1Icons;
  var updatePlayer1Color = function () {
      $(".sp-preview-inner").first().attr('style', chosenColorPlayer1IconsString);
      // $(".sp-preview-inner").first().attr('style', color)
      // var color = "background-color: rgb(140, 35, 49)"
  };

  var messagePlayer1Color;
  //to get info from database:
  player1ColorData.on("child_added", function(snapshot){
    console.log(snapshot);
    console.log(snapshot.val());
    messagePlayer1Color = snapshot.val()
    chosenColorPlayer1Icons = messagePlayer1Color.player1;
    chosenColorPlayer1IconsString = "background-color: " + chosenColorPlayer1Icons;
    // updatePlayer1Color();

  });
  var chosenColorPlayer2IconsString = "background-color: " + chosenColorPlayer2Icons;
  var updatePlayer2Color = function () {

      // $spPreviewInner2.css("background-color", chosenColorPlayer2Icons);
      $(".sp-preview-inner").last().attr('style', chosenColorPlayer2IconsString);
  };

  var messagePlayer2Color;
  //to get info from database:
  player2ColorData.on("child_added", function(snapshot){
    console.log(snapshot);
    console.log(snapshot.val());
    messagePlayer2Color = snapshot.val()
    chosenColorPlayer2Icons = messagePlayer2Color.player2;
    chosenColorPlayer2IconsString = "background-color: " + chosenColorPlayer2Icons;
    // updatePlayer2Color();

  });

  /////////////////////////////////////

  // var updatePlayer1SelectedIcon = function () {
  //   $allIconsPlayer1.css("color", colorPlayer1Icons);
  //   $player1SelectedIcon.css("color", chosenColorPlayer1Icons);
  // };
  //
  // var updatePlayer2SelectedIcon = function () {
  //   $allIconsPlayer2.css("color", colorPlayer2Icons);
  //   $player2SelectedIcon.css("color", chosenColorPlayer2Icons);
  // };

    $allIconsPlayer1.on("click",function () {
        var $currentIcon = $( this );
        $allIconsPlayer1.css("color", colorPlayer1Icons);

        $currentIcon.css("color", chosenColorPlayer1Icons);
        $player1SelectedIcon = $currentIcon;
        updatePlayer1Color();
        updatePlayer2Color();
// debugger
        // player1SelectedIconData.push({ player1:$player1SelectedIcon.attr("class").split(' ')[1]});
        // updatePlayer1SelectedIcon();
        // updatePlayer2SelectedIcon();
        // debugger
    });

    $allIconsPlayer2.on("click",function () {
        var $currentIcon = $( this );
        $allIconsPlayer2.css("color", colorPlayer2Icons);

        $currentIcon.css("color", chosenColorPlayer2Icons);
        $player2SelectedIcon = $currentIcon;
        updatePlayer1Color();
        updatePlayer2Color();

        // player2SelectedIconData.push({ player2:$player2SelectedIcon});
        // updatePlayer1SelectedIcon();
        // updatePlayer2SelectedIcon();
    });
    //
    // var messagePlayer1SelectedIcon;
    // //to get info from database:
    // player1SelectedIconData.on("child_added", function(snapshot){
    //   console.log(snapshot);
    //   console.log(snapshot.val());
    //   messagePlayer1SelectedIcon = snapshot.val()
    //   $player1SelectedIcon = messagePlayer1SelectedIcon.player1;
    //   // debugger
    // });

    // var messagePlayer2SelectedIcon;
    // //to get info from database:
    // player2SelectedIconData.on("child_added", function(snapshot){
    //   console.log(snapshot);
    //   console.log(snapshot.val());
    //   messagePlayer2SelectedIcon = snapshot.val()
    //   $player2SelectedIcon = messagePlayer2SelectedIcon.player2;
    // });


///////////////////////////

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

                  cellsPlayer1Data.push({currentCellIndex:$currentCell.index()});
                }


              if ( counter % 2 === 0 ){
                var $img2 = $("<img>");
                $img2 = $player2SelectedIcon.clone();
                $currentCell.append( $img2 );

                arrayOf1or2[$currentCell.index()] = "2";

                cellsPlayer2Data.push({currentCellIndex:$currentCell.index()});
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

              $player1WinsAction.html(player1NameFromInput + "'s" + " points: " + thePlayer1Wins );
              $player2WinsAction.html(player2NameFromInput + "'s" + " points: " + thePlayer2Wins );

              $player1TitleAction.html(player1NameFromInput + "'s" + " icons: ");
              $player2TitleAction.html(player2NameFromInput + "'s" + " icons: ");

          });

//////////////////

var messageCellsPlayer1Data;

var updateCells1 = function () {

  arrayOf1or2[messageCellsPlayer1Data.currentCellIndex] = "1";

  for (var i = 0; i < 9; i++) {

        if (arrayOf1or2[i] === "1") {
          // $allCells.eq(j).empty();
          var $imgTest1 = $("<img>");
          $imgTest1 = $player1SelectedIcon.clone();
          $allCells.eq(i).append( $imgTest1 );
          }
  }
};
    //to get info from database:
    cellsPlayer1Data.on("child_added", function(snapshot){
      console.log(snapshot);
      console.log(snapshot.val());
      // debugger
      messageCellsPlayer1Data = snapshot.val();
      updateCells1();

    });

  ////////////////////////////

  var messageCellsPlayer2Data;

  var updateCells2 = function () {

    arrayOf1or2[messageCellsPlayer2Data.currentCellIndex] = "2";

    for (var i = 0; i < 9; i++) {

          if (arrayOf1or2[i] === "2") {
            // $allCells.eq(j).empty();
            var $imgTest2 = $("<img>");
            $imgTest2 = $player2SelectedIcon.clone();
            $allCells.eq(i).append( $imgTest2 );
            }
    }
  };
      //to get info from database:
      cellsPlayer2Data.on("child_added", function(snapshot){
        console.log(snapshot);
        console.log(snapshot.val());
        // debugger
        messageCellsPlayer2Data = snapshot.val();
        updateCells2();

      });

/////////////////////



$newGameButtonAction.on("click",function () {
    // $allCells.css("background-image", image00);
    $allCells.empty();
    arrayOf1or2 = ["","","","","","","","",""];
    $allCells.css("background-color", "white");

    if ( winner !== player1NameFromInput && winner !== player2NameFromInput && winner !== "tie") {
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
