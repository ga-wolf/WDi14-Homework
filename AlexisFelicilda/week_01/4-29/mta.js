var mta = {
	
    lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
    line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
	
	planTrip: function (fromLine, fromStation, toLine, toStation) {
    //index variables   

    	var toLineDirection, fromLineDirection;
    	var fromStationIndex = fromLine.indexOf(fromStation); //  "N" -> lineN.indexOf('8TH') 

    	var toStationindex = toLine.indexOf(toStation);
    	var fromLineUnionSquareIndex = fromLine.indexOf("Union Square");
    	var toLineUnionSquareIndex = toLine.indexOf("Union Square");

    //message

    	var tripDirection = "You must travel through the following stops on the " + fromLine + " line: ";
        var tripConLine = "Your journey continues through the following stops along the " + toLine + " line: ";
        var changeUnionSquare = "Change at Union Square.";

        var firstLeg = mta.plotChanges(fromStationIndex, fromLineUnionSquareIndex, fromLine);
        var secondLeg = mta.plotChanges(toLineUnionSquareIndex, toStationindex, toLine);

        console.log("From " + fromStation + " to " + toStation + ":");

        

        if (fromStation === toStation) {
            console.log("No stops.");
            return;
        } else if (fromLine === toLine || toStation === "Union Square") {
            console.log(tripDirection + firstLeg.join(", ") + ", " + secondLeg + ".");
        } else {
            console.log(tripDirection + firstLeg.join(", ") + ".");
            console.log(changeUnionSquare);
            console.log(tripConLine + secondLeg.join(", ") + ".");
        }
        console.log(firstLeg.length + secondLeg.length + " stops in total.");
        },

	plotChanges: function (from, to, line) {
        var output = [];
        var direction = (from < to ? 1 : -1);
        for (var i = from + direction; (from < to ? i <= to : to <= i) ; i = i + direction) {
            output.push(mta[line][i]);
        }
        return output;
    }

};
mta.planTrip(mta.lineN, "Times Square", mta.lineN, "Times Square");