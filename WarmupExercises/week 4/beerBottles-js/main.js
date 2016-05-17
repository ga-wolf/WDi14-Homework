// Write a program which prints out the lyrics to that beloved classic, that field-trip favorite: 99 Bottles of Beer on the Wall.
//
// Requirements
//
// The program should be called with Beer.song
// The program should output text to the console
// Each verse should be separated by a single blank line.


// Extensions:
// Make the type of beer customizable
// Allow the following function calls to work:
// Beer.song() - That should do the whole song
// Beer.song(45) - This should do from 45 down
// Beer.song(34, 12) - This should print from 34 to 12

var Beer = {
  // Parameters are optional, we do not need to provide them for our function to run.
  song: function( start, end, drink ){
    // We account for the user not entering data by providing defaults.
    drink = drink || "beer"
    start = start || 99;
    end = end || 0;

    // Unlike the for loops we have been using, this one interacts directly with our
    //  variables and counts /down/.

    for( var i = start; i >= end; i-- ){
      this.beerLyrics( i, drink )
    };

  },

  beerLyrics: function( num , drink ){
    // We order these by specificity. 0 is our most specific case, followed by 1
    // and then our generic count function from there.
    if( num === 0 ){
      console.log("No more bottles of " + drink + " on the wall, no more bottles of " + drink + ".");
      console.log("Go to the store and buy some more, 99 bottles of " + drink + " on the wall.");
    } else if ( num === 1 ){
      console.log("1 bottle of " + drink + " on the wall, 1 bottle of " + drink + ".");
      console.log("Take it down and pass it around, no more bottles of " + drink + " on the wall.");
    } else {
      console.log( num + " Bottles of " + drink + " on the wall, " + num + " bottles of " + drink + "." );
      console.log( "Take one down, pass it around... " + ( num -1 ) + " bottles of " + drink + " on the wall!" );
    };
  }
};

Beer.song() // - That should do the whole song
Beer.song(45) // - This should do from 45 down
Beer.song(34, 12) // - This should print from 34 to 12


// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
//
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.
//
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
