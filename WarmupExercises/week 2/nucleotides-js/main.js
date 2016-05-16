// function takes a string and checks for nucleotide characters: ACGTU

var Nucleotide = {
  singleLetterCheck: function( word, nucleotide ){
    // We modify our initial variables to uppercase
    word = word.toUpperCase();
    nucleotide = nucleotide.toUpperCase();

    // returnValue is our counter for every nucleotide in word
    var returnValue = 0;

    // Then loop through our word to check for the nucleotide letter
    for( var i = 0; i < word.length; i++ ){
      if( word[i] === nucleotide ){

    // when we loop through the word and find a letter === nucleotide, we add to
    // our return value by 1.
        returnValue ++;
      };
    };
    // Finally, we return our value which has been modified by the for loop.
    return returnValue;
  },

  nucleotideCheck: function( word ){

    // We have put our function calls inside an object, this does  a few things:

    // When we run a function that returns a value to our key, we give the key
    // that value.

    // When our checks have completed, we end up with an object formatted something like this:

    // "GUTTER" => { A: 0, C: 0, G: 1, T: 2, U: 1 }

    var nucleotideCheckList = {
      "A": this.singleLetterCheck( word, "A" ),
      "C": this.singleLetterCheck( word, "C" ),
      "G": this.singleLetterCheck( word, "G" ),
      "T": this.singleLetterCheck( word, "T" ),
      "U": this.singleLetterCheck( word, "U" )
    };

    // We return this new, modified object, which we have used to hold our data
    // in a neater format.
    return nucleotideCheckList;
  }
};


Nucleotide.nucleotideCheck( "GUTTER" );
