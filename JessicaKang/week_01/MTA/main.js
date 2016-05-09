// Activity
//
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
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
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

var trip = {
  nLine: ["Time Square", "34th", "28th", "23rd", "Union Square", "8th"],
  lLine: ["8th", "6th", "Union Square", "3rd", "1st"],
  sixLine: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

var needsToChange = false  ;
var secondTrip = false;
var nLine = trip.nLine;
var lLine = trip.lLine;
var sixLine= trip.sixLine;
var startLine = prompt("Which line will you depart from");
var endLine = prompt("which line with you arrive at");
var locationA = prompt("Which station will you depart from");
var locationB = prompt("Which station will you arrive at");
var tripCounter = 0;
var transferCounter = 0;

if(startLine === "N")  {
  var lineA = nLine;
} else if(startLine === "L") {
  var lineA = lLine;
} else if(startLine === "6") {
  var lineA = sixLine;
}

if(endLine != startLine)  {
  var needsToChange = true;
}

if(endLine === "N")  {
  var lineB = nLine;
} else if(endLine === "L") {
  var lineB = lLine;
} else if(endLine === "6") {
  var lineB = sixLine;
}

var stationA = lineA.indexOf(locationA);
var stationB = lineB.indexOf(locationB);

var myTrip = function(startIndex, endIndex) {
  var message = "";
  var countMyTrip = 1;

  if(needsToChange === true)  {
    endIndex = lineA.indexOf("Union Square");
  }
  if(startIndex < endIndex)  {
    for(var i = startIndex; i <= endIndex; i += 1)  {
      var output = lineA[i];
      tripCounter++;
      if (i === endIndex)  {
        message += output + ".";
        } else {
        message += output + ", ";
        }
      }
  } else if(startIndex > endIndex)  {
      for(var i = startIndex; i >= endIndex; i -= 1)  {
        var output  = lineA[i];
        tripCounter++;
        if (i === endIndex)  {
          message += output + ".";
          } else {
          message +=output + ", ";
          }
      }
    }
  console.log("Your must travel through the following stops on the Line " + startLine + ": " + message);
  return tripCounter;
};

var myTransfer = function(startIndex, endIndex) {
  var message = "";
  var countMyTransfer = 1;

  if(secondTrip === true) {
    startIndex = lineB.indexOf("Union Square");
  }
  if(startIndex < endIndex)  {
    for(var i = startIndex - 1; i <= endIndex; i += 1)  {
      var output = lineB[i];
      transferCounter++;
      if (i === endIndex)  {
        message += output + ".";
        } else {
        message +=output + ", ";
        }
      }
  } else if(startIndex > endIndex)  {
      for(var i = startIndex - 1; i >= endIndex; i -= 1)  {
        var output  = lineB[i];
        transferCounter++;
        if (i === endIndex)  {
          message += output + ".";
          } else {
          message +=output + ", ";
          }
        }
    }
  console.log("Your journey continues through the following stops Line "  + endLine + ": " + message);
  return transferCounter;
};

myTrip(stationA, stationB);
if(needsToChange === true){
  console.log("Change at Union Square.");
  secondTrip = true;
  myTransfer(stationA, stationB);
}
console.log(tripCounter + transferCounter + " stops in total.");
