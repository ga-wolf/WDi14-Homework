var Anagram = {
  sorter: function( inputWord ){
    return inputWord.split("").sort().join("");
  },

  equalizer: function( inputWord, compareWord ){
    if( inputWord.toLowerCase() !== compareWord.toLowerCase() ){
      if( this.sorter(inputWord) === this.sorter(compareWord) ){
        return true;
      };
    };
  },

  listSort: function( inputWord, inputArray ){
    var anagrams = []
    for( var i = 0; i < inputArray.length; i++){
      if( this.equalizer( inputWord, inputArray[i] ) ){
        anagrams.push( inputArray[i] );
      };
    };
    return anagrams;
  }

};

console.log(Anagram.listSort('listen', ['tensil', 'agdtf', 'enlist', 'listen']));
