console.log("Tic Tac Toe");

var $allCells = $(".cell");

$allCells.css("background-color", "hotpink");

var counter = 0;
var selectedCells = [];
var winner;
var winningCells;

    $allCells.on("click",function () {
            var $currentCell = $( this );

            for (var i = 0; i < 11; i++) {
                 if ( $currentCell.index() === selectedCells[i] ) {
                   myErroAlert();
                   return;
                 }}

            counter++;

              if ( counter % 2 === 0 ){
            $currentCell.css("background-color", "blue");
            }
              if ( counter % 2 !== 0 ){
            $currentCell.css("background-color", "green");
            }

            console.log("You did " + counter + " valid clicks.");
            selectedCells.push($currentCell.index());
            console.log("The following cells have already been selected: " + selectedCells);

// For player green to win:

            for (var i = 0; i < 3; i++) {
                if ($allCells[0+(3*i)].style.backgroundColor === "green" &&
                $allCells[1+(3*i)].style.backgroundColor === "green" &&
                $allCells[2+(3*i)].style.backgroundColor === "green") {

                  $allCells[0+(3*i)].style.backgroundColor = "yellow";
                  $allCells[1+(3*i)].style.backgroundColor = "yellow";
                  $allCells[2+(3*i)].style.backgroundColor = "yellow";

                    winner = "The green player";
                    thereIsAWinnerAlert();
                  }
                 }

             for (var i = 0; i < 3; i++) {
                 if ($allCells[0+i].style.backgroundColor === "green" &&
                 $allCells[3+i].style.backgroundColor === "green" &&
                 $allCells[6+i].style.backgroundColor === "green") {

                   $allCells[0+i].style.backgroundColor = "yellow";
                   $allCells[3+i].style.backgroundColor = "yellow";
                   $allCells[6+i].style.backgroundColor = "yellow";

                     winner = "The green player";
                     thereIsAWinnerAlert();
                   }
                  }

              if ($allCells[0].style.backgroundColor === "green" &&
              $allCells[4].style.backgroundColor === "green" &&
              $allCells[8].style.backgroundColor === "green") {

                $allCells[0].style.backgroundColor = "yellow";
                $allCells[4].style.backgroundColor = "yellow";
                $allCells[8].style.backgroundColor = "yellow";

                  winner = "The green player";
                  thereIsAWinnerAlert();
                }

              if ($allCells[2].style.backgroundColor === "green" &&
              $allCells[4].style.backgroundColor === "green" &&
              $allCells[6].style.backgroundColor === "green") {

                $allCells[2].style.backgroundColor = "yellow";
                $allCells[4].style.backgroundColor = "yellow";
                $allCells[6].style.backgroundColor = "yellow";

                  winner = "The green player";
                  thereIsAWinnerAlert();
                }

// For player blue to win:

                for (var i = 0; i < 3; i++) {
                    if ($allCells[0+i].style.backgroundColor === "blue" &&
                    $allCells[3+i].style.backgroundColor === "blue" &&
                    $allCells[6+i].style.backgroundColor === "blue") {

                      $allCells[0+i].style.backgroundColor = "yellow";
                      $allCells[3+i].style.backgroundColor = "yellow";
                      $allCells[6+i].style.backgroundColor = "yellow";

                        winner = "The blue player";
                        thereIsAWinnerAlert();
                      }
                     }

                 if ($allCells[0].style.backgroundColor === "blue" &&
                 $allCells[4].style.backgroundColor === "blue" &&
                 $allCells[8].style.backgroundColor === "blue") {

                   $allCells[0].style.backgroundColor = "yellow";
                   $allCells[4].style.backgroundColor = "yellow";
                   $allCells[8].style.backgroundColor = "yellow";

                     winner = "The blue player";
                     thereIsAWinnerAlert();
                   }

                 if ($allCells[2].style.backgroundColor === "blue" &&
                 $allCells[4].style.backgroundColor === "blue" &&
                 $allCells[6].style.backgroundColor === "blue") {

                   $allCells[2].style.backgroundColor = "yellow";
                   $allCells[4].style.backgroundColor = "yellow";
                   $allCells[6].style.backgroundColor = "yellow";

                     winner = "The blue player";
                     thereIsAWinnerAlert();
                   }
//Tie
              if (
              $allCells[0].style.backgroundColor !== "hotpink" &&
              $allCells[1].style.backgroundColor !== "hotpink" &&
              $allCells[2].style.backgroundColor !== "hotpink" &&
              $allCells[3].style.backgroundColor !== "hotpink" &&
              $allCells[4].style.backgroundColor !== "hotpink" &&
              $allCells[5].style.backgroundColor !== "hotpink" &&
              $allCells[6].style.backgroundColor !== "hotpink" &&
              $allCells[7].style.backgroundColor !== "hotpink" &&
              $allCells[8].style.backgroundColor !== "hotpink" &&
              winner !== "The blue player" &&
              winner !== "The green player"
              )
              { tieAlert(); }


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
