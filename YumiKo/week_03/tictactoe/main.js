var grid = [["","",""],["","",""],["","",""]];
var user=null;
var numCol=0;
var numRow=0;
var turn=1;
var winner=null;
var scorePlayerOne=0;
var scorePlayerTwo=0;
var url = [];
var icePicOne=null;
var icePicTwo=null;
var image1;
var enableBoard; // To avoide overriding
var moveCount = 0;
var oneWinCount = 0;
var twoWinCount = 0;

//Aha... Once clearBoard function working, that click event keeps working too.
//When the button clicked, the selection board comes up.

$(".choose").on("click", function () {
  moveCount = 0;
  turn = 1;
  url = [];
  $(".pixel").css("background","");
  $(".selectIce").css("display", "block");
  grid = [["","",""],["","",""],["","",""]];
})

$(".reset").on("click", function () {
window.location.reload();
})


$(".onePlayer").on("click", function () {
  $(".intro").css("display", "none");
  onePlayerSelect();
  onePlayerPlay();
  $(".player2").css( "background-image", "url(images/fennecfox.jpg)");
  $(".player2").css( "background-size", "cover");
})


$(".twoPlayers").on("click", function () {
  $(".intro").css("display", "none");
  twoPlayersSelect();
  twoPlayersPlay();
})

//when the player select a icecream, that icecream should appear on the board, and when the winner is decided, that icecream will appear on the scoreboard

var twoPlayersSelect = function () {
  $(".Ice").on("click", function() {
    $currentIcePic=$(this).attr("src");
    url.push('url("'+ $currentIcePic + '")')
    if (!image1) {
      $(".player1").css( "background-image", url[0]);
      $(".player1").css( "background-size", "cover");
      swal({
        title: "Player1 wants",
        text: "THIS Icecream",
        timer: 1000,
        showConfirmButton: false
      });
      image1 = true;
      icePicOne = $currentIcePic;
    } else {
      $(".player2").css( "background-image", url[1]);
      $(".player2").css( "background-size", "cover");
      $(".selectIce").css("display","none");
      turn = 1;
      swal({
        title: "Player2 wants",
        text: "wowwow Icecream",
        timer: 2000,
        showConfirmButton: false
      });
      icePicTwo = $currentIcePic;
      image1 = undefined;
    }
  })
}

var twoPlayersPlay = function () {
  $(".pixel").on("click", function () {
    var $currentPixel = $( this );
    if(turn === 1) {
      user="X"
      $currentPixel.css("background-image", url[0]);
      $currentPixel.css("background-size", "cover");
      console.log("X is moving??");
      var idNum = $($currentPixel).attr('data-i')
      var idName = $($currentPixel).attr('data-j')
      numCol = parseFloat(idNum)
      numRow = parseFloat(idName)
      grid[numCol][numRow]="X";
      turn-=1
      moveCount+=1
    } else {
      user="O"
      $currentPixel.css("background-image", url[1]);
      $currentPixel.css("background-size", "cover");
      console.log("O is playing??");
      var idNum = $($currentPixel).attr('data-i')
      var idName = $($currentPixel).attr('data-j')
      numCol = parseFloat(idNum)
      numRow = parseFloat(idName)
      grid[numCol][numRow]="O";
      turn+=1
      moveCount+=1
    }
    getWinner();
  });
}

var onePlayerSelect = function () {
  $(".Ice").on("click", function() {
  // debugger;
    $currentIcePic=$(this).attr("src");
    url.push('url("'+ $currentIcePic + '")')
    $(".player1").css( "background-image", url[0]);
    $(".player1").css( "background-size", "cover");
    swal({
      title: "The fox wants",
      text: "THIS Icecream",
      timer: 1000,
      showConfirmButton: false
    });
    icePicOne = $currentIcePic;
    $(".selectIce").css("display","none");
  })
}

var aiMove = function () {
  console.log("O is moving?");
  user="O"
  var iNum=Math.floor(Math.random()*3);
  var jNum=Math.floor(Math.random()*3);
  while (grid[iNum][jNum]!=="") {
    iNum=Math.floor(Math.random()*3);
    jNum=Math.floor(Math.random()*3);
  }
  grid[iNum][jNum] = "O";
  $("div[data-i="+iNum+"][data-j="+jNum+"]").css("background-image", "url(images/fennecfox.jpg)")
  $("div[data-i="+iNum+"][data-j="+jNum+"]").css("background-size", "cover");
  moveCount+=1;

  if ( columnIsFull(grid) || rowIsFull(grid) || leftDiagonalIsFull(grid) || rightDiagonalIsFull(grid) ) {
    console.log("FOX WIN")
    swal({
      title: "Oops!",
      text: "Fox got the ice-cream.",
      imageUrl: "images/cutecat.jpg"
    });
  }
}

var onePlayerPlay = function () {
  $(".pixel").on("click", function () {
      var $currentPixel = $( this );
      user="X"
      $currentPixel.css("background-image", url[0]);
      $currentPixel.css("background-size", "cover");
      console.log("X is moving??");
      var idNum = $($currentPixel).attr('data-i')
      var idName = $($currentPixel).attr('data-j')
      numCol = parseFloat(idNum)
      numRow = parseFloat(idName)
      grid[numCol][numRow]="X";
      moveCount+=1;
      getWinnerOne();
  })
}



var getWinnerOne = function () {
  // debugger;
  if ( !(columnIsFull(grid) || rowIsFull(grid) || leftDiagonalIsFull(grid) || rightDiagonalIsFull(grid) )) {
    if ( moveCount === grid.length*grid.length ){
      drawResult();
    } else {
      aiMove();
    }
  } else {
      swal({
        title: "Sweet!",
        text: "Player1 save ice-cream from the fox.",
        imageUrl: "images/cutecat.jpg"
      });
  }
}


var columnIsFull = function (grid) {
  // debugger;
  var container = [];
  for(var i=0; i< grid.length; i+= 1) {
    var winNum=0;
    for(var j=0; j< grid[i].length; j+=1 ) {
      if (grid[i][j] === user){
        winNum += 1;
      };
    };
    container.push(winNum);
  };
  return container.includes(grid.length);
}

// if one row is full of user, winner is found. If there is any other character, it

var rowIsFull = function (grid) {
  var container = [];
  for(var j=0; j< grid.length; j+=1 ) {
    var winNum=0;
    for(var i=0; i< grid[j].length; i+= 1) {
      if (grid[i][j]===user) {
        winNum += 1;
      }
    }
    container.push(winNum);
  };
  return container.includes(grid.length);
};

var leftDiagonalIsFull = function (grid) {
  // debugger;
  var winNum=0;
  for(var i=0; i<grid.length; i +=1) {
    if(grid[i][i] === user) {
      winNum+=1;
    };
  };
  return winNum === grid.length;
}

var rightDiagonalIsFull = function (grid) {
  var winNum=0;
  for(var i=0; i<grid.length; i+=1){
    if(grid[i][grid.length-1-i]===user){
      winNum +=1;
    };
  };
  return winNum === grid.length;
}


// you can do clearBoard when the user select another ice cream, so don't worry


var drawResult = function () {
  swal({
    title: "Draw!",
    text: "Try Again. No one got the ice-cream this time.",
    imageUrl: "images/cat_looking_bucket.gif"
  });
}

//Make the alert part a var


var getWinner = function () {

  if ( columnIsFull(grid) || rowIsFull(grid) || leftDiagonalIsFull(grid) || rightDiagonalIsFull(grid) ) {
    if ( turn === 0 ) {
      console.log("Winner is XXXXX");
      winner = "X"
      swal({
        title: "Sweet!",
        text: "Player1 got this ice-cream. Make it Three to open your own shop.",
        imageUrl: "images/cutecat.jpg"
      });
      var $image = $("<img>")
      $image.attr("src", icePicOne).css("width", "7vw").css("height", "7vw").css("float", "left").css("border-radius", "20px").appendTo(".result1");
      oneWinCount +=1
    } else if ( turn === 1 ) {
      console.log("Winner is OOOOO");
      winner = "O"
      swal({
        title: "Sweet!",
        text: "Player2 got this ice-cream. Make it Three to open your own shop.",
        imageUrl: "images/cutecat.jpg"
      });
      var $image = $("<img>")
      $image.attr("src", icePicTwo).css("width", "7vw").css("height", "7vw").css("float", "left").css("border-radius", "20px").appendTo(".result2");
      twoWinCount +=1;
    }
  } else if ( moveCount===grid.length*grid.length ) {
    drawResult();
  }
  winFive();
}





var winFive = function () {
  if ( oneWinCount === 3 || twoWinCount === 3 ) {
    swal({
      title: "Success!",
      text: winner + " got this ice-cream shop.",
      imageUrl: "images/cutecat.jpg"
    });
  }
}
