

//========SETUP GLOBE VARIBALES======
// var array1 = [' ',' ',' '];
// var array2 = [' ',' ',' '];
// var array3 = [' ',' ',' '];
//


var player = 'x'
var xScore = 0;
var oScore = 0;
var player1Name;
var player2Name;
var p1Image = "url(img/PS3x.png)"
var p2Image = "url(img/PS3circle.png)"
var tieImage = "url(img/tie_red.png)"
var hero = ''; //
var p1Imglink;
var p2Imglink;
var tieImglink;
var arrayTotal;

var createBoard = function(size) {
arrayTotal = []
  for (var i = 0; i < size; i++) {
    arrayTotal[i] = [];
    for (var j = 0; j < size; j++) {
      arrayTotal[i][j] = ' ';
    }
  }
  return arrayTotal;
}



var createPixel = function (size) {
for (var i = 0; i <size; i++) {
  for (var j = 0; j< size; j++) {
  $('<button/>', {
      'class' : 'pixel',
      'data-i' :  i,
      'data-j' : j,
      'width' : 60/size + 'vh',
      'height': 60/size + 'vh'

  }).appendTo('.gameContainer');
}
}
}

var size = 3

createPixel(size)
createBoard(size)

 // = createBoard(size);
 // createPixel(size);


 $('.yoda').on('click', function() {
   $('.gameContainer').empty();
 size = size-1;
   createBoard(size);
   createPixel(size);
   gameCaller();

 });

$('.punisher').on('click', function() {
  $('.gameContainer').empty();
size = size+1;
  createBoard(size);
  createPixel(size);
  gameCaller();

});



// var changeSize = function () {
//
//   $('.gameContainer').empty();
// size = size+1;
//   createBoard(size);
//   createPixel(size);
//   gameCaller();
//
// }


// var reset = function () {
//
// //   $( "button" ).click(function() {
// //   $( "p" ).empty();
// // });
//
// $('.gameContainer').empty();
//
// }

// var createBoard = function(size) {
//   var board = [];
//
//   for (var i = 0; i < size; i++) {
//     board[i] = [];
//     for (var j = 0; j < size; j++) {
//       board[i][j] = ' ';
//     }
//   }
//   return board;
// }
//
// var arrayTotal = createBoard(3);
// var arrayTotal=[array1,array2,array3];



var picLink = function() {
  p1Imglink = p1Image.slice(4 ,-1);
  p2Imglink = p2Image.slice(4 ,-1);
  tieImglink = tieImage.slice(4,-1);

}

picLink();



var picChange = function (){

      $('.mario').on('click',function(){
        if (checkEmptyBox()){
        p1Image = "url(img/Mario.png)";
        p2Image ="url(img/Luigi.png)";
        picLink()
      }// hero = " "

  });
      $('.bat').on('click',function(){
        if (checkEmptyBox()){
        p1Image = "url(img/batman4.png)";
        p2Image ="url(img/superman3.png)";
        picLink()
      }

  });
    $('.bird').on('click',function(){
      if (checkEmptyBox()) {
      p1Image = "url(img/angrybird5.png)";
      p2Image ="url(img/piggie2.png)";
      picLink()
    }
});
 //
};





$('.submit').on('click', function() {

starting();
})
// $('.skip').on ('click', function () {
//   starting();
// })

var starting = function () {
  $('.gameContainer').css('display' , 'inline-block' );
  $('h1').css('display' , 'inline-block' );
  $('.notification').css('display','inline-block');
  $('.score').css('display','inline-block');
  $('.inputs').css('display', 'none');
  $('.icon_selector').css('display', 'inline-block');
  $('.icon_selector2').css('display', 'inline-block');

  // if (($('#player1').val()!==' ' )&& ($('#player2').val() !==' ')) {
    player1Name = $('#player1').val();
    player2Name = $('#player2').val();
    $('#player1_name').text(player1Name);
    $('#player2_name').text(player2Name);
}



// ========= CHECK TIE function =====
var checkTie = function() //check if tie when all steps puted
{ var checkBox = true
  // debugger;
  for (i=0;i<arrayTotal.length;i++) {
      // var checkBox= true;
    for(j=0; j< arrayTotal.length; j++){
      if (arrayTotal[i][j] === ' '){ //return false if any empty boxes
        checkBox = false;
        break;
      }
    }
  }
   return checkBox;
  }

var checkEmptyBox = function () {
  var checkBox2 = true
  for (i=0;i<arrayTotal.length;i++) {
    for(j=0; j< arrayTotal.length; j++){
      if (arrayTotal[i][j] !== ' '){ //return false if any empty boxes
        checkBox2 = false;
        return checkBox2;
      }
    }
   }
  return checkBox2;
}

  //=========RESET function  =====

  var resetBox = function(){
    //resetBoxes's color prop.disabled ,empty the text
    $('.pixel').prop('disabled',false).css({
      'background-color': 'transparent',
      "background-image": 'none'}
    ).text('');

    for (i=0;i<arrayTotal.length;i++) {
      for(j=0; j< arrayTotal.length; j++){
         arrayTotal[i][j] = ' ';
  }
  }
  }


// ======= GAME STARTER  ======
picChange();

var gameCaller = function() {

$('.pixel').on('click',function() {

  var $i = $(this).data('i');
  var $j = $(this).data('j');

arrayTotal[$i][$j] = player;//asign plaery values to array !important


$( this ).prop( "disabled", true );//disable clicked button
if (player === 'x')
  $(this).css("background-image", p1Image);
else
  $(this).css("background-image", p2Image);
console.log(player);
var finished = gameSystem(arrayTotal, player, $i, $j);
  if (!finished) { //alternative input (x and o)
    if (player === 'x') {
      player = 'o';
    }
    else {
      player = 'x';
    }
    if (!finished && checkTie()) {
      $('h1').text( "tie");

      swal({   title: "It's a Tie ",
       text: " ",
       imageUrl: tieImglink },  function() {
         resetBox();

        //  picChange();
       });
    }
  }
  else if (finished) {
    var message;
    if (player === 'x') {
      message = player1Name;
      swal({   title: 'Winner is :',
       imageUrl: p1Imglink,
       text: message
       }, function() {
         resetBox();

       });}
       else  {
      message = player2Name;
      swal({   title: 'Winner is :',
            imageUrl: p2Imglink,
              text: message
              }, function() {
                resetBox();

              }); }

    if (player === 'x') {

    xScore = xScore+1;
    $('h1').text(player + "win")
    $('test1').text(xScore);


    player = 'o';
    return true;

    }
    if (player === 'o') {

    oScore = oScore+1;
    $('h1').text(player + "win");
    $('test2').text(oScore);
    player = 'x';
    return true;
    }
  }
}
);
}

gameCaller();

//========GAME LOGIC SYSTEM  ====
var gameSystem = function(arrayTotal, player, k, l) {
  var won = true;
  // debugger;
  for (i =0; i<arrayTotal.length; i++) {
    if (arrayTotal[k][i] !== player) {
      won = false;
      break;
    }
  }
  if (won) return true;

  var won = true;
  for (i =0; i<arrayTotal.length; i++) {
    if (arrayTotal[i][l] !== player) {
      won = false;
      break;
    }
  }
  if (won) return true;

  var won = true;
  for (i=0; i<arrayTotal.length; i++){
    if (arrayTotal[i][i] !== player) {
      won = false;
      break;
    }
  }

  if (won) return true;
  var won = true;
  for (i=0; i < arrayTotal.length; i++) {
    if ( arrayTotal[i][arrayTotal.length - 1 - i] !== player) {
      won = false;
      break;
    }
  }
  return won;
}
