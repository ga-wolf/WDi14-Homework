
// DATA STRUCTURE

// OBJECT
    //KEY : ARRAY
    //KEY : ARRAY
    //KEY : ARRAY

// EG REFERENCING LINEN

// Using a dot
// trainLines.lineN => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]

// Using a string in brackets
// trainLines["lineN"] => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]

var trainLines = {
    lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
    line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

// TRAVEL function
// This function will iterate through an array either forwards or backwards
var travel = function (line, start, end, dir) {

    console.log('.......');

    var direction;

    // Determine direction of loop

    if (dir > 0) direction = 1;
    if (dir < 0) direction = -1;
    if (dir === 0) direction = 0;

    // Forward loop ------------------
    // Start: 1, End: 5, Iterates: +1

        // for (var i = 1; i < 5 + 1; i += 1) {
        // // do stuff here
        // }

    // Backward loop ------------------
    // Start: 4, End: 0, Iterates: -1

        // for (var i = 5; i > 0; i += 1) {
        //  // do stuff here
        // }

            // Start: 0, End: 5, Iterates: + 1
            // i --> 0, 1, 2, 3, 4
            // will stop iterating when i = 5

            // Start: 4, End: 1, Iterates: - 1
            // i --> 4, 3, 2
            // will stop iterating when i = 1

    for (var i = start; i !== end + (direction); i += direction) {

        console.log(trainLines[line][i]);
            // lineNArray[0] => "Times Square"
            // lineNArray[1] => "34th"
            // lineNArray[2] => "28th"
    }

    console.log('.......');
};

// TRIPVIEW function
// This function will turn all the user inputs into varibales that I can work with
// Then execute the Travel function based on destinations

var tripView = function ( line1, station1, line2, station2 ) {

    // Get position of stations

    // var station1Index = trainLines["LineN"].indexOf("Astor Place");

    var station1index = trainLines[line1].indexOf(station1);
    var station2index = trainLines[line2].indexOf(station2);

    // Get the position of unionSquare
    var line1UnionSquareIndex = trainLines[line1].indexOf('Union Square');
    var line2UnionSquareIndex = trainLines[line2].indexOf('Union Square');

    var line1Direction, line2Direction;

    if (line1 === line2) {
        console.log('lines equal')
        // determine direction of travel from origin to destination
        line1Direction = station2index - station1index;
        line2Direction = line1Direction;
        console.log('Get on the ' + line1 + ' and you will travel through: ')
        travel(line1, station1index, station2index, line1Direction);
    } else {
        console.log('-----  ' + station1 + ' to ' + station2 + '   ------');

        // Determine the direction of travel to and from union square

        line1Direction = line1UnionSquareIndex - station1index;
        line2Direction =  station2index - line2UnionSquareIndex;

        console.log('Get on the ' + line1 + ' and you will travel through: ')

        // ORIGIN > UNION
        // Will iterate from origin station to Union Square

        travel(line1, station1index, line1UnionSquareIndex, line1Direction);

        console.log('Then get off at Union Square to ' + line2 + ' and you will travel through:');

        // UNION > DESTINATION
        // Will iterate from Union Sqare to Destination Station
        travel(line2, line2UnionSquareIndex, station2index, line2Direction);
    }
}

tripView('lineL', '1st', 'line6', 'Grand Central');
