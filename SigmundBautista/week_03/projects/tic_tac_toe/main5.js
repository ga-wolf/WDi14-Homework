// On clicks
var p = "X"
var board = ["","","","","","","","",""]
$(".Box").on("click", function(){
  var index = $(this).attr("index")
  board[index] = p;
//  board[]
})


// board[0] = p;
// $("#box0").text(p);
// conditionals();
