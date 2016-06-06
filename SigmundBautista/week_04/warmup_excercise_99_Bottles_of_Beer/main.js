// The program should be called with Beer.song
// The program should output text to the console
// Each verse should be separated by a single blank line.
var beer = {
  // line : function()  {
  //   message = num.toString() + " bottles of beer on the wall, " + num.toString() + " bottles of beer. Take one down and pass it around, ";
  //   var nextNum = num - 1;
  //   message += nextNum + " bottles of beer on the wall.";
  //   console.log(message);
  //   return num;
  // },

  song : function(start, end) {
    start = start || 99;// start with that numebr or default to 99
    end = end || 0;
    for(var i = start; i > end; i --) {
      this.beerLyrics(i)

      };
    },

    beerLyrics: function(num) {
      if(num === 0) {
        console.log("NO more");
      } else if(num === 1) {
        console.log("1 bottle of beer");
        console.log("Take it down");

      } else {
        console.log(num + " bottles of beer on the wall");
        console.log("Take one down and pass it around" + num - 1 + "bottles of beer on the wall");
      }

    } 


}
