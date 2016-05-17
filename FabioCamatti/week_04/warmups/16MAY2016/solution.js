var Beer = {
  song: function ( start, end) {
    start = start || 99;
    end = end || 0;

    for (var i = start; i > end; i--) {
      this.beerLyrics( i )
    }
  },
  beerLyrics: function (num) {
    if ( num === 0){
      console.log("No more bottles of beer on the wall, no more bottles of beer.");
      console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    }else if (num === 1 ) {
        console.log("1 bootle of beer on the wall, 1 bottle of beer.");
        console.log("Take it down and pass it around, no more bottles of beer on the wall.")
    }else {
      console.log(num + " Bootles of beer on the wall, " + num + " bottles of beer.");
      console.log("Take it down and pass it around, no more bottles of beer on the wall.")
    };
  };
};
