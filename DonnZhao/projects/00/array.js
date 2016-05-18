

//========SETUP GLOBE VARIBALES======
var array1 = [' ',' ',' '];
var array2 = [' ',' ',' '];
var array3 = [' ',' ',' '];
var arrayTotal=[array1,array2,array3];
var player = 'x'
var xScore = 0;
var oScore = 0;
var player1Name;
var player2Name;
var p1Image = "url(file:///Users/Dongyang/wdi-14/WDI14-Donn/projects00/img/piggie1.png)"
var p2Image = "url(file:///Users/Dongyang/wdi-14/WDI14-Donn/projects00/img/angrybird2.png)"
var tieImage = "url(file:///Users/Dongyang/wdi-14/WDI14-Donn/projects00/img/tie_red.png)"
var hero = ''; //
var p1Imglink = p1Image.slice(4 ,-1)
var p2Imglink = p2Image.slice(4 ,-1)
var tieImglink = tieImage.slice(4,-1)
//=====Initial functions ===




var picChange = function (){

      $('.mario').on('click',function(){
        if (checkEmptyBox()){
        p1Image = "url(file:///Users/Dongyang/wdi-14/WDI14-Donn/projects00/img/Mario.png)"
        p2Image ="url(file:///Users/Dongyang/wdi-14/WDI14-Donn/projects00/img/Luigi.png)"
        p1Imglink = p1Image.slice(4 ,-1);
        p2Imglink = p2Image.slice(4 ,-1);
      }// hero = " "

  });
      $('.bat').on('click',function(){
        if (checkEmptyBox()){
        p1Image = "url(file:///Users/Dongyang/wdi-14/WDI14-Donn/projects00/img/batman4.png)"
        p2Image ="url(file:///Users/Dongyang/wdi-14/WDI14-Donn/projects00/img/superman3.png)"
        p1Imglink = p1Image.slice(4 ,-1);
        p2Imglink = p2Image.slice(4 ,-1);
      }
        // hero = " "

  });
    $('.bird').on('click',function(){
      if (checkEmptyBox()) {
      p1Image = "url(file:///Users/Dongyang/wdi-14/WDI14-Donn/projects00/img/angrybird5.png)"
      p2Image ="url(file:///Users/Dongyang/wdi-14/WDI14-Donn/projects00/img/piggie2.png)"
      p1Imglink = p1Image.slice(4 ,-1);
      p2Imglink = p2Image.slice(4 ,-1);
    }
      // hero =

});
};



$('.submit').on('click', function() {

starting();
})
$('.skip').on ('click', function () {
  starting();
})

var starting = function () {
  $('.gameContainer').css('display' , 'inline-block' );
  $('h1').css('display' , 'inline-block' );
  $('.notification').css('display','inline-block')
  $('.input_warp').css('display', 'none')
  $('.icon_selector').css('display', 'inline-block')
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
var $gameCaller = $('.pixel').on('click',function() {

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
    $('h3').text(xScore);


    player = 'o';
    return true;

    }
    if (player === 'o') {

    oScore = oScore+1;
    $('h1').text(player + "win");
    $('h4').text(oScore);
    // setTimeout ( swal({   title: " win",
    //  text: "Here's a custom image.",
    //  imageUrl: "images/thumbs-up.jpg" }),2000);
    player = 'x';
    return true;
    }
  }
}
);




//========GAME LOGIC SYSTEM AND FINAL RETURNS  ====
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
// resetBox()
