var userGoFromLine = prompt ("Please select which line you are travelling from: N, L or 6");
var userGoFromStation = prompt ("Please select which station you are travelling from");
var userGoToLine = prompt ("Please select which line you are travelling to: N, L or 6");
var userGoToStation = prompt ("Please select which station you are travelling to");

var lines = {
  nLine: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  lLine: ["8th St", "6th", "Union Square", "3rd", "1st"],
  sixLine: ["Grand Central", "33rd", "28th St", "23rd St", "Union Square", "Astor Place"],
};

var planTrip = function (goFromLine, goFromStation, goToLine, goToStation) {
    var startLineFinder = function () {
      if (goFromLine === "N"){
        return lines.nLine;
      } else if (goFromLine === "L") {
        return lines.lLine;
      } else if (goFromLine === "6") {
        return lines.sixLine;
      }
    };
  var startLine = startLineFinder();
    var finishLineFinder = function () {
      if (goToLine === "N"){
        return lines.nLine;
      } else if (goToLine === "L") {
        return lines.lLine;
      } else if (goToLine === "6") {
        return lines.sixLine;
      }
    };
var finishLine = finishLineFinder();

var departStation = startLine.indexOf(goFromStation);
var destStation = finishLine.indexOf(goToStation);

var areLinesSameFinder = function (){
    if (goFromLine === goToLine) {
      return true
    } else {
      return false
    }
};
var areLinesSame = areLinesSameFinder();

var firstTripMessage = function (){
  var sameLineTrip = startLine[departStation];

    if (areLinesSame === true) {
      if (destStation > departStation) {
        for (var i = startLine.indexOf(goFromStation) + 1 ; i < finishLine.indexOf(goToStation) + 1; i += 1) {
            sameLineTrip += ", ";
            sameLineTrip += startLine[i];
        }
        return sameLineTrip;
      } else {
        for (var i = startLine.indexOf(goFromStation) - 1 ; i > finishLine.indexOf(goToStation) - 1; i -= 1) {
            sameLineTrip += ", ";
            sameLineTrip += startLine[i];
        }
        return sameLineTrip;
      }
    } else {
      if (startLine.indexOf("Union Square") > departStation) {
        for (var i = startLine.indexOf(goFromStation) + 1 ; i < startLine.indexOf("Union Square") + 1; i += 1) {
            sameLineTrip += ", ";
            sameLineTrip += startLine[i];
        }
        return sameLineTrip;
      } else {
        for (var i = startLine.indexOf(goFromStation) - 1 ; i > startLine.indexOf("Union Square") - 1; i -= 1) {
            sameLineTrip += ", ";
            sameLineTrip += startLine[i];
        }
        return sameLineTrip;
      }
    }
};
var firstTrip = firstTripMessage();

var secondTripMessage = function () {
  var firstStationAfterUSUp = finishLine[(finishLine.indexOf("Union Square") + 1)];
  var differentLineTripUp = finishLine[(finishLine.indexOf("Union Square") + 1)];
  var firstStationAfterUSDown = finishLine[(finishLine.indexOf("Union Square") - 1)];
  var differentLineTripDown = finishLine[(finishLine.indexOf("Union Square") - 1)];

    if (finishLine.indexOf(goToStation) > finishLine.indexOf("Union Square")) {
        for (var i = finishLine.indexOf(differentLineTripUp); i < destStation; i += 1) {
          differentLineTripUp += ", ";
          differentLineTripUp += finishLine[finishLine.indexOf(firstStationAfterUSUp)+1];
        }
        return differentLineTripUp;
    } else {
      for (var i = finishLine.indexOf(differentLineTripDown)-1; i > destStation-1; i -= 1) {
        differentLineTripDown += ", ";
        differentLineTripDown += finishLine[i];
      }
      return differentLineTripDown;
    }
 };

var secondTrip = secondTripMessage();

var stopsInSameLineTrip = firstTrip.split(",").length;
var totalStopsInDifferentLineTrip = firstTrip.split(",").length + secondTrip.split(",").length;

if (areLinesSame === true) {
  var journeyMessage = "You must travel through the following stops on the " + goFromLine + " line: " + firstTrip + ".";
  journeyMessage += "\n";
  journeyMessage += stopsInSameLineTrip + " stops in total."
  console.log(journeyMessage);

} else {
  var journeyMessage = "You must travel through the following stops on the " + goFromLine + " line: " + firstTrip + ".";
  journeyMessage += "\n";
  journeyMessage += "Change at Union Square" + "\n";
  journeyMessage += "Your journey continues through the following stops on the " + goToLine + " line: " + secondTrip + ".";
  journeyMessage += "\n";
  journeyMessage += totalStopsInDifferentLineTrip + " stops in total.";
  console.log(journeyMessage);
  }
};
planTrip(userGoFromLine, userGoFromStation, userGoToLine, userGoToStation);
