// MTA Lab
// Objectives:
//
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
//
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is
// getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example,
//   this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll
//   have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
//
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

var nLine = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
var lLine = ["8th street", "6th", "Union Square", "3rd", "1st"];
var sixLine = ["Grand Central", "33rd", "28th street", "23rd street", "Union Square", "Astor Place"];

var planTrip = function (startLine, startStation, destLine, destStation) {

  if (startLine === "N") {
      var startStationIndex = nLine.indexOf(startStation);
  } else if (startLine === "L"){
      var startStationIndex = lLine.indexOf(startStation);
  } else if (startLine === "6") {
      var startStationIndex = sixLine.indexOf(startStation);
  }

  if (destLine === "N") {
      var destStationIndex = nLine.indexOf(destStation);
  } else if (startLine === "L"){
      var destStationIndex = lLine.indexOf(destStation);
  } else if (startLine === "6") {
      var destStationIndex = sixLine.indexOf(destStation);
  }

//Journeys

//FirstJourney
  var firstJourney = function (startStationIndex, destStationIndex) {
// N Line

if (startLine === "N") {

    if (destStationIndex > startStationIndex) {
        var firstTrip = nLine.slice(startStationIndex, destStationIndex+1)
          if ((firstTrip.includes("Union Square")) && (startLine !== destLine)) {
                firstTrip = nLine.slice(startStationIndex, nLine.indexOf("Union Square")+1)
          }
        var firstTripMessage = firstTrip.join(", ");
        return firstTripMessage;
    }
    else {
        var reversedTrip = nLine.reverse();
        var revStartStationIndex = nLine.indexOf(startStation);
        var revDestStationIndex = nLine.indexOf(destStation);
        var firstTrip =  reversedTrip.slice(revStartStationIndex, revDestStationIndex+1)
        if ((firstTrip.includes("Union Square")) && (startLine !== destLine)) {
              firstTrip = nLine.slice(revStartStationIndex, nLine.indexOf("Union Square")+1)
        }
        var firstTripMessage = firstTrip.join(", ")
        return firstTripMessage;
    }
} else if (startLine === "L") {
// L Line

    if (destStationIndex > startStationIndex) {
        var firstTrip = lLine.slice(startStationIndex, destStationIndex+1)
          if ((firstTrip.includes("Union Square")) && (startLine !== destLine)) {
                firstTrip = lLine.slice(startStationIndex, lLine.indexOf("Union Square")+1)
          }
        var firstTripMessage = firstTrip.join(", ");
        return firstTripMessage;
    }
    else {
        var reversedTrip = lLine.reverse();
        var revStartStationIndex = lLine.indexOf(startStation);
        var revDestStationIndex = lLine.indexOf(destStation);
        var firstTrip =  reversedTrip.slice(revStartStationIndex, revDestStationIndex+1)
        if ((firstTrip.includes("Union Square")) && (startLine !== destLine)) {
              firstTrip = lLine.slice(revStartStationIndex, lLine.indexOf("Union Square")+1)
        }
        var firstTripMessage = firstTrip.join(", ")
        return firstTripMessage;
    }
} else if (startLine === "6") {
// sixLine

if (destStationIndex > startStationIndex) {
    var firstTrip = sixLine.slice(startStationIndex, destStationIndex+1)
      if ((firstTrip.includes("Union Square")) && (startLine !== destLine)) {
            firstTrip = sixLine.slice(startStationIndex, sixLine.indexOf("Union Square")+1)
      }
    var firstTripMessage = firstTrip.join(", ");
    return firstTripMessage;
}
else {
    var reversedTrip = sixLine.reverse();
    var revStartStationIndex = sixLine.indexOf(startStation);
    var revDestStationIndex = sixLine.indexOf(destStation);
    var firstTrip =  reversedTrip.slice(revStartStationIndex, revDestStationIndex+1)
    if ((firstTrip.includes("Union Square")) && (startLine !== destLine)) {
          firstTrip = sixLine.slice(revStartStationIndex, sixLine.indexOf("Union Square")+1)
    }
    var firstTripMessage = firstTrip.join(", ")
    return firstTripMessage;
    }
  }
};

//Union Square Check
  var unionSquareCheck = function () {
        firstJourney();
        var tripToCheck = firstJourney();
        if (tripToCheck.includes("Union Square")) {
          return true;
        }
  };

// Second Journey
//MESSAGE Builder
        var journeyMessage = "You must travel through the following stops on the " + startLine + " line: ";
        journeyMessage += firstJourney(startStationIndex, destStationIndex);
        if ((unionSquareCheck() === true) && (startLine !== destLine)){
          journeyMessage += "\n";
          journeyMessage += "Change at Union Square";
        }
        console.log(journeyMessage);
  };

planTrip("6","23rd street","6","Grand Central");
