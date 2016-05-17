// Gameboard array - (x,y) co-ords from top left match array index.
var gameboard = [["","",""],["","",""],["","",""]]

var playerOne = {
  name: "Player 1",
  human: true,
  faction: "Christian",
  icon: "x",
  iconSrc: "images/crosstp.png",
  score: 0
};

var playerTwo = {
  name: "Player 2",
  human: false,
  faction: "Norse",
  icon: "o",
  iconSrc: "images/shieldtp.png",
  score: 0
};

var curPlayer = playerOne;
var difficulty = 0;

//Animate Shield image to square based on id paramater given
var insertIcon = function (iD) {
  var $curID = $( "#" + iD )
  $curID.children().attr("src", curPlayer.iconSrc);
  $curID.children().addClass("animated bounceIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass();
  });
  return;
};

//Shake animation based in id paramater given (call if user clicks on occupyed square)
var shakeIcon = function (iD) {
  var $curID = $( "#" + iD )
  $curID.children().addClass("animated shake").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass();
  });
  return;
};

//Easy setting computer move - random generation of (x,y), Loops until empty square is selected, add curPlayer icon at gameboard[x][y], calls insertIcon, calls winCheck & tieCheck, passes current player back to playerOne
var computerMove = function () {
  if(difficulty === 0) {
    var curID = computerMoveEz();
  } else if(difficulty === 1) {
    var curID = computerMoveMed();
  } else {
    var curID = computerMoveHard();
  }

  var x = parseInt(curID[0]);
  var y = parseInt(curID[1]);

  if( gameboard[x][y] === "" ) {
    gameboard[x][y] = curPlayer.icon;
    insertIcon(curID);
  } else {
    computerMove();
  }

  removeLoadOver();

  if(winCheck(x,y)) {
    swal({title: "Computer Wins!"},resetBoard);
    curPlayer.score += 1;
    $(".leftBar h1").text(playerOne.score);
    $(".rightBar h1").text(playerTwo.score);
  } else if(tieCheck()) {
    swal({title: "It's a tie!"},resetBoard);
  }
  curPlayer = playerOne
};

//Player move, called when square is clicked. id of 'this' square is converted to (x,y), adds curent player icon at gameboard[x][y], calls insertIcon, calls winCheck & tieCheck.
var playerMove = function () {
  var $curSquare = $( this );
  var $curID = $curSquare.attr("id");
  var x = $curID[0];
  var y = $curID[1];

  if( gameboard[x][y] === "" ) {
    gameboard[x][y] = curPlayer.icon
    insertIcon($curID);
  } else {
    shakeIcon($curID);
    return;
  }

  if(winCheck(x,y)) {
    swal({title: curPlayer.name + " Wins!"},resetBoard);
    curPlayer.score += 1;
    $(".leftBar h1").text(playerOne.score);
    $(".rightBar h1").text(playerTwo.score);
  } else if(tieCheck()) {
    swal({title: "It's a tie!"},resetBoard);
  } else {
    if(curPlayer === playerOne) {
      curPlayer = playerTwo;
    } else {
      curPlayer = playerOne;
    }
    if(!curPlayer.human){
      addLoadOver();
      var num = (Math.random() * 1000)
      window.setTimeout( computerMove, num );
    }
  }
};

// check each line for win condition, based on most recent placement of icon (computer || player).
var winCheck = function(x,y) {

  var horString = ""
  var vertString = ""
  var diaString = ""
  var revDiaString = ""

  //Check [x][i] (horizontal line)
  for( var i = 0; i < gameboard.length; i++ ) {
    var j = gameboard[x][i];
    horString += j;
  }

  //Check [i][y] (vertical line)
  for( var i = 0; i < gameboard.length; i++ ) {
    var j = gameboard[i][y]
    vertString += j;
  }

  //Check [i][i] (diagonal line)
  for( var i = 0; i < gameboard.length; i++ ) {
    var j = gameboard[i][i];
    diaString += j;
  }

  //Check [i][.length - 1 - i] (rev. diagonal line)
  for( var i = 0; i < gameboard.length; i++ ) {
    var n = gameboard.length;
    var j = gameboard[i][n - 1 - i];
    revDiaString += j;
  }

  if( (horString === "xxx" || vertString === "xxx" ) || (horString === "ooo" || vertString === "ooo" ) ) {
    return true;
  } else if( (diaString === "xxx" || revDiaString === "xxx" ) || (diaString === "ooo" || revDiaString === "ooo" ) ){
    return true;
  } else {
    return false;
  }
};

// Check gameboard array, if all locations are occupied, return true. Only called after win check.
var tieCheck = function() {
  for( var i = 0; i < gameboard.length; i++ ){
    for( var j = 0; j < gameboard[i].length; j ++ ) {
      if( gameboard[i][j] === "" ) {
        return false
      }
    }
  }
  return true;
};

//Clear gameboard array and img src from .square divs.
var resetBoard = function() {

  // set all values in gameboard array to ""
  for( var i = 0; i < gameboard.length; i++ ){
    for( var j = 0; j < gameboard[i].length; j ++ ) {
      gameboard[i][j] = "";
    }
  }

  //set all src attrbutes to ""
  $( ".square" ).each( function(i) {
    $( this ).children().attr("src", "");
    // $( this ).children().addClass("animated fadeOutUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //   $( this ).removeClass();
    //   $( this ).children().attr("src", "");
    // });
  });
};

//Easiest computer move, selections chosen randomly.
var computerMoveEz = function() {
  var x = Math.floor(Math.random() * 3);
  var y = Math.floor(Math.random() * 3);
  var curID = x.toString() + y.toString();
  return curID;
};

//Basic checks for center square, blocking moves, and winning moves. Else random selection.
var computerMoveMed = function() {
  //Loop horizontal lines, if line conatins two of the same icon, return empty square on that line
  for(var i = 0; i < 3; i++){
    var checkStr = "";
    var iD = "";
    for(var j = 0; j < 3; j++){
      checkStr += gameboard[i][j];
      if(gameboard[i][j] === "") {
        iD = "" + i + j;
      }
    }
    if(checkStr.length === 2 && checkStr[0] === checkStr[1]) {
      return iD;
    }
  }

  //Loop Vertical lines, if line conatins two of the same icon, return empty square on that line
  for(var i = 0; i < 3; i++){
    var checkStr = "";
    var iD = "";
    for(var j = 0; j < 3; j++){
      checkStr += gameboard[j][i];
      if(gameboard[j][i] === "") {
        iD = "" + j + i;
      }
    }
    if(checkStr.length === 2 && checkStr[0] === checkStr[1]) {
      return iD;
    }
  }

  //Check diagonals for two of same icon, if true return empty square of that line
  var diaStr = "";
  var iD = "";
  for(var i = 0; i < 3; i++){
    diaStr += gameboard[i][i];
    if(gameboard[i][i] === "") {
      iD = "" + i + i;
    }
  }
  if(diaStr.length === 2 && diaStr[0] === diaStr[1]) {
    return iD;
  }

  var diaStr = "";
  var iD = "";
  for( var i = 0; i < 3; i++ ) {
    var n = (3 - 1 - i)
    diaStr += gameboard[i][n];
    if(gameboard[i][n] === ""){
      iD = "" + i + n;
    }
  }
  if(diaStr.length === 2 && diaStr[0] === diaStr[1]) {
    return iD;
  }

  //return center if empty (always play center if going first)
  if(gameboard[1][1] === ""){
    return "11";
  }

  // Return random if none of the above passe
  var x = Math.floor(Math.random() * 3)
  var y = Math.floor(Math.random() * 3)
  var curID = x.toString() + y.toString();
  return curID;

};

//Additional logic beyond block & win checks
var computerMoveHard = function() {
  var cnrSqrs = ["00","02","20","22"]
  var edgeSqrs = ["01","10","12","21"]
  //get turn count
  var curTurn;
  var turnStr = "";

  for( var i = 0; i < gameboard.length; i++ ){
    for( var j = 0; j < gameboard[i].length; j ++ ) {
      turnStr += gameboard[i][j];
    }
  }
  curTurn = turnStr.length;

  //Loop horizontal lines, if line conatins two 'o', return empty square on that line
  for(var i = 0; i < 3; i++){
    var checkStr = "";
    var iD = "";
    for(var j = 0; j < 3; j++){
      checkStr += gameboard[i][j];
      if(gameboard[i][j] === "") {
        iD = "" + i + j;
      }
    }
    if((checkStr.length === 2 && checkStr[0] === checkStr[1]) && checkStr[0] === "o") {
      return iD;
    }
  }

  //Loop Vertical lines, if line conatins two 'o', return empty square on that line
  for(var i = 0; i < 3; i++){
    var checkStr = "";
    var iD = "";
    for(var j = 0; j < 3; j++){
      checkStr += gameboard[j][i];
      if(gameboard[j][i] === "") {
        iD = "" + j + i;
      }
    }
    if((checkStr.length === 2 && checkStr[0] === checkStr[1]) && checkStr[0] === 'o') {
      return iD;
    }
  }

  //Check diagonals for two 'o', if true return empty square of that line
  var diaStr = "";
  var iD = "";
  for(var i = 0; i < 3; i++){
    diaStr += gameboard[i][i];
    if(gameboard[i][i] === "") {
      iD = "" + i + i;
    }
  }
  if((diaStr.length === 2 && diaStr[0] === diaStr[1]) && diaStr[0] === 'o') {
    return iD;
  }

  var diaStr = "";
  var iD = "";
  for( var i = 0; i < 3; i++ ) {
    var n = (3 - 1 - i)
    diaStr += gameboard[i][n];
    if(gameboard[i][n] === ""){
      iD = "" + i + n;
    }
  }
  if((diaStr.length === 2 && diaStr[0] === diaStr[1]) && diaStr[0] === 'o') {
    return iD;
  }

  //Loop horizontal lines, if line conatins two of the same icon, return empty square on that line
  for(var i = 0; i < 3; i++){
    var checkStr = "";
    var iD = "";
    for(var j = 0; j < 3; j++){
      checkStr += gameboard[i][j];
      if(gameboard[i][j] === "") {
        iD = "" + i + j;
      }
    }
    if(checkStr.length === 2 && checkStr[0] === checkStr[1]) {
      return iD;
    }
  }

  //Loop Vertical lines, if line conatins two of the same icon, return empty square on that line
  for(var i = 0; i < 3; i++){
    var checkStr = "";
    var iD = "";
    for(var j = 0; j < 3; j++){
      checkStr += gameboard[j][i];
      if(gameboard[j][i] === "") {
        iD = "" + j + i;
      }
    }
    if(checkStr.length === 2 && checkStr[0] === checkStr[1]) {
      return iD;
    }
  }

  //Check diagonals for two of same icon, if true return empty square of that line
  var diaStr = "";
  var iD = "";
  for(var i = 0; i < 3; i++){
    diaStr += gameboard[i][i];
    if(gameboard[i][i] === "") {
      iD = "" + i + i;
    }
  }
  if(diaStr.length === 2 && diaStr[0] === diaStr[1]) {
    return iD;
  }

  var diaStr = "";
  var iD = "";
  for( var i = 0; i < 3; i++ ) {
    var n = (3 - 1 - i)
    diaStr += gameboard[i][n];
    if(gameboard[i][n] === ""){
      iD = "" + i + n;
    }
  }
  if(diaStr.length === 2 && diaStr[0] === diaStr[1]) {
    return iD;
  }

  //Hack of a bug fix because it's late and I'm tired.
  if(curTurn > 6){
    var x = Math.floor(Math.random() * 3)
    var y = Math.floor(Math.random() * 3)
    var curID = x.toString() + y.toString();
    return curID;
  }

  //return center if empty (always play center if going first)
  if(gameboard[1][1] === ""){
    return "11";
  }

  //if turn two and center is marked, return corner.
  if(curTurn === 1 && gameboard[1][1] !== "") {
    var i = Math.floor(Math.random() * 4);
    return cnrSqrs[i];
  }

  //if turn four and no edge is marked, return corner, unless center is 'o', then return edge. If edge is marked, return corner of that line...
  var edgeStr = "";
  var edgeID = "";

  for(var i = 0; i < 4; i++) {
    var xy = edgeSqrs[i];
    var x = parseInt(xy[0]);
    var y = parseInt(xy[1]);
    edgeStr += gameboard[x][y]
    if(gameboard[x][y] !== "") {
      edgeID = "" + x + y;
    }
  }

  if((curTurn === 3 && edgeStr === "") && gameboard[1][1] === 'o') {

    var i = Math.floor(Math.random() * 4);
    return edgeSqrs[i];
  } else if ((curTurn === 3 && edgeStr === "") && gameboard[1][1] === 'x') {
    var i = Math.floor(Math.random() * 4);
    return cnrSqrs[i];
  } else {
    if(curTurn === 3 && edgeID[0] === "1"){
      var i = Math.floor(Math.random() * 2);
      var iD = i + edgeID[1];
      return iD;
    } else if (curTurn === 3 && edgeID[1] === "1"){
      var i = Math.floor(Math.random() * 2);
      var iD = edgeID[0] + i;
      return iD;
    }
  }

  // Return random if none of the above pass
  var x = Math.floor(Math.random() * 3)
  var y = Math.floor(Math.random() * 3)
  var curID = x.toString() + y.toString();
  return curID;

};

var pauseSplash = function() {
  var $bgDiv = $( "<div></div>" )
  var $menuDiv = $( "<div></div>" )

  $bgDiv.attr("class", "coverBG");
  $menuDiv.attr("class", "menu");

  $( ".flexContainer" ).css("-webkit-filter", "blur(5px)")
  $( "body" ).prepend($bgDiv);
  $( ".coverBG" ).prepend($menuDiv);

};

var addLoadOver = function() {
  var $splashDiv = $("<div></div>");
  var $spinDiv = $("<div></div>");

  $splashDiv.attr("class", "coverBG");
  $spinDiv.attr("class", "loader");

  $("body").prepend($splashDiv);
  $(".coverBG").append($spinDiv);
}

var removeLoadOver = function() {
  $(".coverBG").remove();
}

//Hide header
var clearMenu = function() {
  $("header").css("display","none");
};

//Hide title image & play select buttons, show single player input screen
var addSinglePlayInput = function() {
  $(".headImg").css("display", "none");
  $(".buttons").css("display", "none");
  $(".singlePlayInput").css("display", "flex");
};

//Assign values to playerOne object and opposites to playerTwo(computer)
var singlePlaySubmit = function() {
  playerOne.name = $("#nameP1").val()
  playerOne.score = 0;

  if($("#factionP1").prop("checked")){
    playerOne.faction = "Christian";
  } else {
    playerOne.faction = "Norse";
  }

  playerOne.iconSrc = $(".iconSelectP1 .active").attr("src");

  //set playerTwo values opposite to playerOne selection
  playerTwo.human = false;
  playerTwo.score = 0;
  if(playerOne.faction === "Christian") {
    playerTwo.faction = "Norse";
    playerTwo.name = "Thor";

    if(playerOne.iconSrc === "images/crosstp.png"){
      playerTwo.iconSrc = "images/shieldtp.png";
    } else {
      playerTwo.iconSrc = "images/axetp.png";
    }

  } else {
    playerTwo.faction = "Christian";
    playerTwo.name = "Christ";

    if(playerOne.iconSrc === "images/axetp.png"){
      playerTwo.iconSrc = "images/halotp.png";
    } else {
      playerTwo.iconSrc = "images/crosstp.png";
    }
  }
  setSideBar();
  clearMenu();
};

//Assign values to playerOne & playerTwo objects
var multiPlaySubmit = function() {
  playerOne.name = $("#mNameP1").val()
  playerOne.score = 0;

  if($("#mFactionP1").prop("checked")){
    playerOne.faction = "Christian";
  } else {
    playerOne.faction = "Norse";
  }

  playerOne.iconSrc = $(".mIconSelectP1 .active").attr("src");

  //set playerTwo values opposite to playerOne selection
  playerTwo.human = true;
  playerTwo.name = $("#mNameP2").val()
  playerTwo.score = 0;

  if($("#mFactionP2").prop("checked")){
    playerTwo.faction = "Christian";
  } else {
    playerTwo.faction = "Norse";
  }

  playerTwo.iconSrc = $(".mIconSelectP2 .active").attr("src");
  setSideBar();
  clearMenu();
};

//Hide title image & play select buttons, show multi player input screen
var addMultiPlayInput = function() {
  $(".headImg").css("display", "none");
  $(".buttons").css("display", "none");
  $(".multiPlayInput").css("display", "flex");
};

//set side bar details based on player objects, show side bars
var setSideBar = function(){
  $(".leftBar h4").text(playerOne.name);
  $(".leftBar img").attr("src", playerOne.iconSrc);

  $(".rightBar h4").text(playerTwo.name);
  $(".rightBar img").attr("src", playerTwo.iconSrc);

  $(".leftBar, .rightBar").css("display","flex");
};

//reset player objects to default, show header menu
var resetGame = function() {
  playerOne.name = "Player 1";
  playerOne.score = 0;
  playerTwo.name = "Player 2";
  playerTwo.score = 0;
  resetBoard();
  $(".leftBar h1").text(playerOne.score);
  $(".rightBar h1").text(playerTwo.score);
  $("header, .headImg, .buttons").css("display", "block");
  $(".multiPlayInput, .singlePlayInput, .leftBar, .rightBar").css("display", "none");
}

$(".butSP").on("click", function() {
  addSinglePlayInput();
});

$(".butMP").on("click", function() {
  addMultiPlayInput();
});

//toggle faction img & icon selection option single play.
$("#factionP1").on("click", function(){

  if($(this).prop("checked")){
    $(this).parent().next().attr("src","images/preist.png");
    $(".iconSelectP1 img:nth-child(1)").attr("src","images/halotp.png");
    $(".iconSelectP1 img:nth-child(2)").attr("src","images/crosstp.png");

  } else {
    $(this).parent().next().attr("src","images/viking.png");
    $(".iconSelectP1 img:nth-child(1)").attr("src","images/shieldtp.png");
    $(".iconSelectP1 img:nth-child(2)").attr("src","images/axetp.png");

  }

});

//toggle faction img & icon selection option multi play player one.
$("#mFactionP1").on("click", function(){

  if($(this).prop("checked")){
    $(this).parent().next().attr("src","images/preist.png");
    $(".mIconSelectP1 img:nth-child(1)").attr("src","images/halotp.png");
    $(".mIconSelectP1 img:nth-child(2)").attr("src","images/crosstp.png");

  } else {
    $(this).parent().next().attr("src","images/viking.png");
    $(".mIconSelectP1 img:nth-child(1)").attr("src","images/shieldtp.png");
    $(".mIconSelectP1 img:nth-child(2)").attr("src","images/axetp.png");

  }

});

//toggle faction img & icon selection option multi play player two.
$("#mFactionP2").on("click", function(){

  if($(this).prop("checked")){
    $(this).parent().next().attr("src","images/preist.png");
    $(".mIconSelectP2 img:nth-child(1)").attr("src","images/halotp.png");
    $(".mIconSelectP2 img:nth-child(2)").attr("src","images/crosstp.png");

  } else {
    $(this).parent().next().attr("src","images/viking.png");
    $(".mIconSelectP2 img:nth-child(1)").attr("src","images/shieldtp.png");
    $(".mIconSelectP2 img:nth-child(2)").attr("src","images/axetp.png");

  }

});

//Toggle 'active' class on icon select for player one.
$(".iconSelectP1, .mIconSelectP1 img").on("click", function() {
  $(".iconSelectP1 img").toggleClass("active");
  $(".mIconSelectP1 img").toggleClass("active");
});

//Toggle 'active' class on icon select for player two.
$(".mIconSelectP2 img").on("click", function() {
  $(".mIconSelectP2 img").toggleClass("active");
});

$(".singlePlaySubmitE").on("click", function(){
  difficulty = 0;
  singlePlaySubmit()
});
$(".singlePlaySubmitM").on("click", function(){
  difficulty = 1;
  singlePlaySubmit()
})
$(".singlePlaySubmitH").on("click", function(){
  difficulty = 2;
  singlePlaySubmit()
})

$(".multiPlaySubmit").on("click", multiPlaySubmit)

$(".mainMenuBut").on("click", resetGame)

$( ".square" ).on( "click", playerMove );
