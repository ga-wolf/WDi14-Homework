
var trainLines = {
    "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L": ["8th", "6th", "Union Square", "3rd", "1st"],
    "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

var trainSystem = function(startingLine, startingStation, endLine, endStation) {

    var line1 = trainLines[startingLine];
    var line2 = trainLines[endLine];

    var stop1 = line1.indexOf(startingStation);
    var stop2 = line2.indexOf(endStation);

    if (trainLines[startingLine] === trainLines[endLine]){

        var stop = line1.slice((stop1),(stop2+1));
        var cump  = stop.length;
        var stops = stop.join(", ");


        if (cump > 0){

            console.log("You must travel through the following stops: " + stops + " on the line " + startingLine + "," );
            console.log( cump + " stops in total.")

        } else if  (cump === 0){
            var rev = line1.reverse()
            stop1 = line1.indexOf(startingStation);
            stop2 = line2.indexOf(endStation);
            stop = rev.slice((stop1),(stop2+1));
            stops = stop.join(", ");
            cump = stop.length;
            console.log("You must travel through the following stops: " + stops + " on the line " + startingLine + "," );
            console.log( cump + " stops in total.")
            console.log("");
    }

    } else if (line1 !== line2){


        var newEndStation = "Union Square";
        stop1 = line1.indexOf(startingStation);
        stop2 = line1.indexOf(newEndStation);

        var line1Stop = line1.slice((stop1),(stop2+1));
        var line1Len = line1Stop.length;
        var line1StopJoin;

        if (line1Len > 0){

            line1StopJoin = line1Stop.join(", ");

        } else {

            var line1StopRev = line1.reverse();
            stop1 = line1.indexOf(startingStation);
            stop2 = line1.indexOf(newEndStation);
            var line1StopNew = line1StopRev.slice((stop1),(stop2+1));
            var line1StopJoinNew = line1StopNew.join(", ");
            line1Len = line1StopNew.length;
            line1StopJoin = line1StopJoinNew;
        }

        var stop3 = line2.indexOf(newEndStation);
        var stop4 = line2.indexOf(endStation);
        var line2Stop = line2.slice((stop3),(stop4+1));
        var line2Len = line2Stop.length;
        var line2StopJoin;

        if (line2Len > 0){

            line2StopJoin = line2Stop.join(", ");

        } else if (line2Len === 0){

            var line2StopRev = line2.reverse();
            stop3 = line2.indexOf(newEndStation);
            stop4 = line2.indexOf(endStation);
            var line2StopNew = line2StopRev.slice((stop3),(stop4+1));
            var line2StopJoinNew = line2StopNew.join(", ");
            line2Len = line2StopNew.length;
            line2StopJoin = line2StopJoinNew;
        }

        var total = line1StopJoin + ", " + line2StopJoin;
        var totalLen = (line1Len + line2Len)-1;




            console.log("You must travel through the following stops on the line " + startingLine + " " + line1StopJoin  + "." );
            console.log("Change at " + newEndStation  + ".");
            console.log("Your journey continues through line " + endLine + " the following stops: " + line2StopJoin);
            console.log( totalLen + " stops in total.")
            console.log("");


    }
 };

trainSystem("6", "33rd", "6", "Astor Place");
trainSystem("L", "1st", "L", "6th");
trainSystem("N", "Times Square", "6", "33rd");
trainSystem("L", "8th", "N", "8th");
trainSystem("L", "8th", "N", "Times Square");
trainSystem("6", "Astor Place", "N", "Times Square");
trainSystem("L", "1st", "6", "Astor Place");
trainSystem("L", "1st", "L", "1st");
