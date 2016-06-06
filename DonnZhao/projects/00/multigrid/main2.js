// var array1 = [' ',' ',' '];
// var array2 = [' ',' ',' '];
// var array3 = [' ',' ',' '];
//
// var arrayTotal=[array1,array2,array3];

var createBoard = function(size) {
  var board = [];

  for (var i = 0; i < size; i++) {
    board[i] = [];
    for (var j = 0; j < size; j++) {
      board[i][j] = ' ';
    }
  }
  return board;
}


var arrayTotal = createBoard(3);

var size = 3
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


// .gameContainer {
//
//   /*width:330px;
//   height:330px;*/
//   width:60vh;
//   height:60vh;
//   background-color:none;
//   position:absolute;
//   top:40%;
//   left:50%;
//   display:inherit;;
//   transform:translate(-50%,-50%);
// }



// button.pixel {
//   width:33.33%;
//   height:33.33%;
//   margin: 0;
//   padding:0;
//   border:1px solid gray;
//   display: inline-block;
//   font-size: 20px;
//   float:left;
//   background-repeat: no-repeat;
//   background-size:100%
//   /*background-color: transparent;*/
// }
// <div class="gameContainer canvas">
//   <button class="pixel pixel1" data-i='0' data-j='0'></button>
//   <button class="pixel pixel2" data-i='0' data-j='1'></button>
//   <button class="pixel pixel3" data-i='0' data-j='2'></button>
//   <button class="pixel pixel4" data-i='1' data-j='0'></button>
//   <button class="pixel pixel4" data-i='1' data-j='1'></button>
//   <button class="pixel pixel4" data-i='1' data-j='2'></button>
//   <button class="pixel pixel4" data-i='2' data-j='0'></button>
//   <button class="pixel pixel4" data-i='2' data-j='1'></button>
//   <button class="pixel pixel4" data-i='2' data-j='2'></button>
// </div>
