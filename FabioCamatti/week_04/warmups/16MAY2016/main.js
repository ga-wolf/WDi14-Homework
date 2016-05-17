var Beer = {

    song: function(start,end) {
        if(!start && !end){
            start = 99;
            end = 1;
        } else if (!end){
            end = 1;
        };

        for (var i = start; i >= end; i-- ) {

            if(i === 1){
                console.log( i + " bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.");
                console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, " + start + " bottles of beer on the wall.")


            }else{

                console.log( i + " bottles of beer on the wall, " + i + " bottles of beer.\nTake one down and pass it around, " + (i-1) + " bottles of beer on the wall. ")

            };
        }

    }

};
