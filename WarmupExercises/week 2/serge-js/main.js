// Serge
//
// Serge.respondtTo("Input")
//
// Serge input = question => "Sure"
//
// Serge input = LOUD = > "Whoa, chill out"
//
// Serge input = Silent => "Be that way then"
//
// Serge input = anything else => "Whatever"
//
// Reduce the functions as much as possible.

// We know from the notes here - Serge will be an object with at
 // one function called respondTo.

Serge = {

  // We are using respondTo to do our grunt work, rather than
  // make a massive single function, with a lot of if/elses, we
  // break the logic down in to smaller functions.

  // All respond does is check for a "true" and log a response,
  // It handles very little of the actual logic.

  respondTo: function(userInput){
    if ( Serge.isQuestion( userInput ) ){
      console.log( "Sure" );
    } else if ( Serge.isSilent( userInput ) ){
      console.log("Be that way, then!");
    } else if ( Serge.isLoud( userInput ) ) {
      console.log("Whoa, chill out.");
    } else {
      console.log("Whatever.");
    }
  },

  // We are only using our functions to return a true statement.
  // We have .trim() to remove any trailing or leading empty spaces
  // or new line characters.
  // From there we chain it to .endswith( "?" )
  // We could also use ( .length - 1 ) or .slice( -1 ),
  // but I find this easier to read.

  isQuestion: function(userInput){
    return ( userInput.trim().endsWith("?") === true );
  },

  // I have included the commented out pre-condensed logic
  // so we can see how we've killed un-necessary code.

  isLoud: function( userInput ){

    // if( userInput === userInput.toUpperCase() ){
    //   return true;
    // } else {
    //   return false;
    // };

    return ( userInput === userInput.toUpperCase() );
  },

  // Again, we call .trim() so an empty space is still true.

  isSilent: function( userInput ){
    return ( userInput.trim() === "" );
  }

};

Serge.respondTo("Question? ");
Serge.respondTo("LOUD");
Serge.respondTo(" ");
Serge.respondTo("Anything");
