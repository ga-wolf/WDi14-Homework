console.log('MTA')

var trainLines = {
    lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
    line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

var tripView = function ( line1, station1, line2, station2 ) {
    var line1 = line1;
    var station1 = station1;
    var station1index = trainLines[line1].indexOf(station1);
    var line2 = line2;
    var station2 = station2;
    var station2index = trainLines[line2].indexOf(station2);
    var line1Direction = null;
    var line2Direction = null;

    if (line1 === line2) {
        console.log('lines equal')
        line1Direction = station2index - station1index;
        line2Direction = line1Direction;
    } else {
        console.log('diff lines');
        line1Direction = trainLines[line1].indexOf('Union Square') - station1index;
        line2Direction =  station2index - trainLines[line2].indexOf('Union Square');
    }


    // LOG INPUT
    console.log('LINE 1 -----------------------');
    console.log('line1: ' + line1);
    console.log('station1: ' + station1);
    console.log('station1index: ' + station1index);
    console.log('line1Direction: ' + line1Direction);

    console.log('LINE 2 -----------------------');
    console.log('line2: ' + line2);
    console.log('station2: ' + station2);
    console.log('station2index: ' + station2index);
    console.log('line2Direction: ' + line2Direction); 

}

tripView('line6', 'Astor Place', 'lineL', '1st');

var travel = function () {
    // this should be able to go both ways depending on the direction it is given;
};

var switchLine = function () {
    // check destination
        // get correct line
        // get direction

    // travel

};
