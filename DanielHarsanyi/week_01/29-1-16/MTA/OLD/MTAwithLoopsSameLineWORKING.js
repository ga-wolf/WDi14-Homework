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


// console.log(lines.nLine.indexOf("28th"));
// console.log(lines[0].indexOf("34th"));

// function to work out what line they are starting on

// function that takes the starting line and starting station and returns the string of the journey based on the indexes of the stops

// function that decides whether the person will need to change lines

// if the person needs to change lines, a function that will return the remainder of the journey on the second lines

// function that builds up the journey message based on the above function

// function that determines the total amount of stations

// function that takes the starting line, starting destination, destination line and destination station and returns the journey MESSAGE


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

var areLinesSameFinder = function (goFromLine, goToLine){
    if (goFromLine === goToLine) {
      return true
    } else {
      return false
    }
};
var areLinesSame = areLinesSameFinder();

var firstTripMessage = function (){
  var sameLineTrip = startLine[departStation];
  var differentLineTrip = startLine[departStation];

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
            console.log("didn't work");
    }
};
var firstTrip = firstTripMessage();

var stopsInSameLineTrip;
    if (destStation > departStation) {
      stopsInSameLineTrip = ((finishLine.indexOf(goToStation)) + 1) - (startLine.indexOf(goFromStation));
    } else {
      stopsInSameLineTrip = ((finishLine.indexOf(goToStation)) + 1) + (startLine.indexOf(goFromStation))
    }

if (areLinesSame === true) {
  var journeyMessage = "You must travel through the following stops on the " + goFromLine + " line: " + firstTrip + ".";
  journeyMessage += "\n";
  journeyMessage += stopsInSameLineTrip + " stops in total."
  console.log(journeyMessage);

} else {
  var journeyMessage = "You must travel through the following stops on the " + goFromLine + " line: " + firstTrip + ".";
  journeyMessage += "\n";
  journeyMessage += "Change at Union Square";
  console.log(journeyMessage);
  }
};

planTrip("6", "33rd", "6", "23rd St");
