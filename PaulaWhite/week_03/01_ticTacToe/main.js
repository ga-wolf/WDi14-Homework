//PSUEDOCODE

//I need to be able to place a value in any of the 9 pixels
//I need to determine a player one and a player two
//Everytime a player has a turn the game has to swith to the alternate player
//I need to determine a winner
//A winner is determined by var winnerIsX = function() {
//   return winsRowX() || winsColumnX() || winsDiagonalX();
// }  AND
//var winnerIsO = function() {
//return winsRowO() || winsColumnO() || winsDiagonalO();
var boardGame =[ ["", "", ""], ["", "", ""], ["", "", ""] ]; //EMPTY ARRAYS FOR THE 3X3 GRID
var player = 'x';
var started = false;

//SET THE COUNT TO 0, CHECK EACH ROWS TO SEE IF THE PLAYER HAS PLACED THEIR MARK
// IN ANOTHER POSITION ON THAT ROW. IF THE MARK IS IN THE SAME ROW AND IS IN EACH GRID
// POSITION FILLING UP THE WHOLE ROW (IN THIS CASE = BARDGAME.LENGTH, 3 SPACES) THEN THAT
// PLAYER HAS ONE AND RETURN THE GRID VALUES OF THE WINNING POSITION
var checkWinner = function (row, column, input){
  var count = 0;
  var n = boardGame.length;
  // FOR THE ROW
  for (var i = 0; i < n; i++){
    if (boardGame[row][i] === input)
      count++;
  }
  if (count === n)
    return [[row, 0], [row, 1], [row, 2]];
//IF THE ABOVE PLAYER DID NOT WIN SET THE COUNT BACK TO 0 AND CHECK THE COLUMNS
    count = 0;
  // FOR THE COLUMN
  for (var i = 0; i < n; i++) {
     if (boardGame[i][column] === input)
      count++;
  }
  //SET THE COUNT TO 0, CHECK EACH COLUMNS TO SEE IF THE PLAYER HAS PLACED THEIR MARK
  // IN ANOTHER POSITION ON THAT COLUMN. IF THE MARK IS IN THE SAME ROW AND IS IN EACH GRID
  // POSITION FILLING UP THE WHOLE COLUMN (IN THIS CASE COLUMN === ROW, 3 SPACES) THEN THAT
  // PLAYER HAS ONE AND RETURN THE GRID VALUES OF THE WINNING POSITION

  if (count === n)
    return [[0, column], [1, column], [2, column]];

  // for the diagonal if the element is on diagonal
  if (row === column) {
    count = 0;
    for (var i = 0; i < n; i++){
      if (boardGame[i][i] === input)
        count++;
      }
  }
  if (count === n)
   return [[0,0], [1,1], [2,2]];

  // for the reverse diagonal if element is on reverse diagonal
  if (column === n - 1 - row) {
     count = 0
// IF THE PLAYER HAS NOT ONE CHECK THE REVERSE DIAGONAL. THERE CAN ONLY BE ONE
// OPTION POSSIBLE FOR THE REVERSE DIAGONAL AND THE GRID VALUES WILL BE
// 0, N-1-0
// 1, N-1-1
//2, N-1-2

     for (var i = 0; i < n; i++) {
       if (boardGame[i][n - 1 - i] === input)
        count++;
     }
  }
// AGAIN WITH CHECKING THE DIAGONAL THERE IS ONLY OPTION POSIBLE AND WE KNOW THE SET
// GRID VALUES
  if (count === n)
    return [[0, 2], [1, 1], [2, 0]];
  else return null;
};

// IF THE PLAYERS MARK LOOPS THROUGH THIS FOR LOOP AND NONE OF THESE OPTIONS HAVE
//EQUALLED TRUE THEN THERE IS NO WINNER AND WE HAVE TO MAKE A FUNCTION FOR THIS

var checkTie = function (){
 var tie = true;
 for ( var i = 0; i < boardGame.length; i++){ //IF [I] && [J] ARE LESS THAN THE BOARDGAME LENGTH
   for ( var j = 0; j < boardGame.length; j++) //THEN NO PLAYER HAS WON
    if (!boardGame[i][j]) {
      tie = false;
      break;
    }
 }
 return tie;
};

//THE GAME WILL NOT START UNTIL THE PLAYER HAS CLICKED THE "LETS PLAY" BUTTON
$(".imabutton").on("click", function(){
  //CHANGE THE CURSER TO PLAYER ONE (X), CENTER THE SELECTOR IN THE MIDDLE OF THE PNG
    $("div").css('cursor','url("images/xcursor.png") 45 45,auto');
    started = true;
});

//WHEN PLAYER ONE CLICKS ON A BOARDGAME GRID CHANGE THE STATE OF THE CIRCLE
$(".pixel").on("click", function () {
  if (!started)
   return;
  var $currentPixel = $( this );
  var row = parseInt($currentPixel.data('row')); //COLLECT THE ROW VALUE OF THE SELCTED GRID CIRCLE
  var column = parseInt($currentPixel.data('column')); //COLLECT THE COLUMN VALUE OF THE SELCTED GRID CIRCLE
  if (boardGame[row][column]) return; //BLOCK THE SELECTED GRID SO A PLAYER CAN NOT RE USE THE CIRCLE
  boardGame[row][column] = player; //CHANGE PLAYER
  var winArray = checkWinner(row, column, player);
  //CHECK TO SEE IF A PLAYER HAS WON AND IF SO:
  if (winArray) {
  //FADE THE GRID CIRCLES THAT WERE NOT SELECTED IN THE WINNERS THREE
    $(".pixel").css('opacity', 0);
    $.each(winArray, function(index, value) {
      var i = value[0];
      var j = value[1];
      var selector = "[data-row=" + i + "][data-column=" + j + "]";
      $(selector).css('opacity', 1);
  // FIND THE DATA FOR THE THREE WINNING CIRCLES AND KEEP THE OPACITY AS IS
    });
  }
 //PLACE THE APPROPRITE BACKGROUND TO MATCH THE PLAYER WHOS TURN IS IT
  if (player === 'x')
    $currentPixel.addClass("playerX");

  else
    $currentPixel.addClass("playerO");
//STARTED WITH PLAYER X SO IF THE PLAYER === X THE WINNER IS PLAYER O
  if (!winArray) {
    if (player === 'x')
      player = 'o';
    else
      player = 'x';
  }
  var changeEffects = function() {
    if (winArray) {
      //  playerX score = x++;
      //  playerO score = o++;
// ONCE THE WINNER HAS BEEN SELECTED:
      $("div").css('cursor', 'auto'); //CHANGE THE CURSOR BACK TO THE ORIGNAL
        $('#congratulations').text("Congratulations " + player); //STATE THE WINNING PLAYER
        $(".winner").show(); //SHOW THE WINNING DIV THAT WAS HIDDEN IN THE HTML
        $(".replay").on("click", function(){ //CLICK THE REPLAY BUTTON TO RESET THE GAME
            $("div").css('cursor','url("images/xcursor.png") 45 45,auto'); //CHANGE THE CURSE BACK TO PLAYER ONE
            started = true;
        $(".winner").hide(); // HIDE THE WINNERS DIV
        //REMOVE THE PLAYERS BACKGROUND SELECTIONS AND RESET THE PIXELS TO ORIGINAL STATE (COLOUR AND OPACITY)
        $(".pixel").css('opacity', 1).removeClass("playerX").removeClass("playerO");
        });
        //RESET THE GAME
        boardGame =[ ["", "", ""], ["", "", ""], ["", "", ""] ];
        player = 'x';

    } else if (checkTie()) {
      //IF NO ONE WINS:
      $("div").css('cursor', 'auto'); // CHANGE THE CURSOR BACK TO THE ORIGINAL
      $(".tie").show(); //SHOW THE HIDDEN TIE DIV
      $(".replay").on("click", function(){ // SAME PROCESS AS WINNER ABOVE
          $("div").css('cursor','url("images/xcursor.png") 45 45,auto');
          started = true;
      $(".tie").hide();
      $(".pixel").css('opacity', 1).removeClass("playerX").removeClass("playerO");
      });
      // RESET GAME
      boardGame =[ ["", "", ""], ["", "", ""], ["", "", ""] ];
      player = 'x';


    }
    else if (player === 'o')
      $("div").css('cursor','url("images/ocursor.png") 45 45,auto');
    else
      $("div").css('cursor','url("images/xcursor.png") 45 45,auto');

    $('.playerX, .playerO').css('cursor','none'); //BLOCK THE GRID ONE THE STATE HAS BEEN
    //CHANGE D SO THAT THERE IS NO CONFUSION - YOU CAN NOT REPLAY IN THAT CIRCLE
  }
  setTimeout(changeEffects, 100);
});


//FINISH!!


// var firstPlayerWins = localStorage.firstPlayerWins || 0;
// var secondPlayerWins = localStorage.secondPlayerWins || 0;
//
//
// $("#pone").appendTo(firstPlayerWins);
// $("#ptwo").appendTo(secondPlayerWins);






// $(".pixel").on("click", function (){
//   console.log(this);
//   $(this).css(".playerX ")
//   $('.pixel').css('.playerX');
// })
//
// $(".pixel").on("click", function(){
//    $("div").css('cursor','url("images/ocursor.png"),auto');
// });

//
//
//
//
// //   $('.pixel').on("click", function(){
// //   console.log(this);
// //    $(this).css(".playerX .X")
// //     $('body').css("cursor", "url(images/.png);");
//
//
//     //cursor needs to the change to 0 so click + 1
// //  ){
//
// //game is played as cursor is alternated until there is a winner
//
//
// // $(document).ready(function(){
// //
// //   $(.pixel).on("click", function(){
// //     console.log(this);
// //    $(this).css("playerX")
// //   })
// //
// // $(.pixel).on("click", function(){
// //     console.log(this);
// //    $(this).css("playerO")
// //   })
//
//
// document.body.style.overflow = ("hidden");
//
//
//
//
//
//
//
//
// // Vertical X
// for (var i = 0 < array[i], i ++){
//   if array[i][i] === "X")
//
//   for (var j = 0 < array[j], i ++){
//     if array[i][j] === "X")
//
//     for (var k = 0 < array[k], i ++){
//       if array[i][k] === "X")
//
// // Vertical O
//
//       for (var i = 0 < array[i], i ++){
//         if array[i][i] === "O")
//
//         for (var i = 0 < array[j], i ++){
//           if array[i][j] === "O")
//
//           for (var i = 0 < array[k], i ++){
//             if array[i][k] === ")")
//
//   // Horizontal X
//   for (var i = 0 < array[i], i ++){
//     if array[i][0] === "X")
//
//     for (var i = 0 < array[i], i ++){
//       if array[i][1] === "X")
//
//       for (var i = 0 < array[i], i ++){
//         if array[i][2] === "X")
//
//   // Horizontal O
//
//         for (var i = 0 < array[i], i ++){
//           if array[i][0] === "O")
//
//           for (var i = 0 < array[i], i ++){
//             if array[i][1] === "O")
//
//             for (var i = 0 < array[i], i ++){
//               if array[i][2] === "O")
//
// //Digonal Backwards X
// for (var i = 0 < array.length, i ++){
//   if array[i][n-0-i] === "X")
//
//   for (var i = 0 < array.length, i ++){
//     if array[i][n-1-i] === "X")
//
//     for (var i = 0 < array.length, i ++){
//       if array[i][n-2-i] === "X")
//
// //Digonal Backwards O
//       for (var i = 0 < array.length, i ++){
//         if array[i][n-0-i] === "O")
//
//         for (var i = 0 < array.length, i ++){
//           if array[i][n-1-i] === "O")
//
//           for (var i = 0 < array.length, i ++){
//             if array[i][n-2-i] === "O")
// //Diagonal forward X
// for (var i = 0 < array.length, i ++){
//   if array[i][i] === "X")
//
//   for (var i = 0 < array.length, i ++){
//     if array[i][j] === "X")
//
//     for (var i = 0 < array.length, i ++){
//       if array[i][k] === "X")
//

// var winnerColumn
// var winnertrue = false
// var array1 = [ [0], [1], [2] ]
// var array2 = [ [0], [1], [2] ]
// var array3 = [ [0], [1], [2] ]
// var player = 'x';
//
// // array1[0].toString() === array1[1].toString()
//
// // WINNER VERTICAL
// if ( array1[0].toString() === array2[0].toString() && array3[0].toString() === array2[0].toString()){
//   winnerColumn = array1[0].toString()
// }
//
// if ( array1[1].toString() === array2[1].toString() && array3[1].toString() === array2[1].toString()){
//   winnerColumn = array1[1].toString()
// }
//
// if ( array1[2].toString() === array2[2].toString() && array3[2].toString() === array2[2].toString()){
// winnerColumn = array1[2].toString()
// }
//
// //WINNER HORIZONTAL
// if ( array1[0].toString() === array1[1].toString() && array1[2].toString() === array1[1].toString()){
// winnerRows = array1[0].toString()
// }
//
// if ( array2[0].toString() === array2[1].toString() && array2[2].toString() === array2[1].toString()){
// winnerRows = array2[0].toString()
// }
//
// if ( array3[0].toString() === array3[1].toString() && array3[2].toString() === array3[1].toString()){
// winnerRows = array3[0].toString()
// }
//
// //WINNER DIAGONAL
// if ( array1[0].toString() === array2[1].toString() && array3[2].toString() === array2[1].toString()){
// winnerDiagonal = array1[0].toString()
// }
//
// //WINNER DIAGONAL BACKWARDS
// if ( array1[2].toString() === array2[1].toString() && array3[0].toString() === array2[1].toString()){
//   winnerDiagonalBackwards = array1[2].toString()
// }
//
//
//
// // playTurn( 1, 1, "X");
//
// var playTurn = function (row, column, input){
// //ROW 0
//   if (row === 0 && column === 0){
//    array1[0] = input
// }
//   if (row === 1 && column === 0){
//     array1[1] = input
//   }
//
//   if (row === 2 && column === 0){
//      array1[2] = input
//    }
// //ROW 1
//   if (row === 0 && column === 1){
//   array2[0] = input
// }
//
//   if (row === 1 && column === 1){
//   array2[1] = input
// }
//
//   if (row === 2 && column === 1){
//   array2[2] = input
// }
//
//   //ROW 2
//   if (row === 0 && column === 2){
//   array3[0] = input
// }
//
//   if (row === 1 && column === 2){
//   array3[1] = input
// }
//
//   if (row === 2 && column === 2){
//   array3[2] = input
// }
// };
//     //
//     // wincheck()
//
//     // document.body.style.overflow = "hidden";
//     // $("body").css('overflow', 'hidden');
//
//
//
// // Lets play button - curser turns into X
// //once X clicks in a pixel cursor turns to O
// //etc. untill winner is determined
//
//
//
