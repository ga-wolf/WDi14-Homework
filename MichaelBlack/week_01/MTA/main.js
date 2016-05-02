// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


// We will have three arrays, one for each line. Each array will list stations on that line as the values of the arrays.
// Begin with travel through one array only...
// Two variables will be required, startStation & endStation.
// find indexOf startStation & endStation
// if startStation < endStation loop forward ++
// if startStation > endStation loop backward --
// Loop will add each iteration to a string, used to print stops passed
// Loop will add to a count variable with each iteration used to print total stops

// Expand for cross - line jurneys....
// MTA Object containing three array's, one for each line?

// USER INPUT (variables provided) WE CAN WORK WITH INCLUDES:
// startStation, whatLineTheyStartOn, endStation, whatLineTheyEndOn

var lineN = [
  "Times Square",
  "34th",
  "28th",
  "23rd",
  "Union Square",
  "8th"
];

var lineL = [
  "8th",
  "6th",
  "Union Square",
  "3rd",
  "1st"
];

var line6 = [
  "Grand Central",
  "33rd",
  "28th",
  "23rd",
  "Union Square",
  "Astor Place"
];

var tripCounter = 0;
var tripMessage = "";
var startIndex;
var endIndex;

var planTrip = function ( startLine, startStation, endLine, endStation ) {

  if( startLine === endLine ) {

    startIndex = startLine.indexOf(startStation) + 1;
    endIndex = startLine.indexOf(endStation);
    lineTravel( startLine, startIndex, endIndex );
  } else if (endStation === "Union Square") {

    startIndex = startLine.indexOf(startStation) + 1;
    endIndex = startLine.indexOf("Union Square");
    lineTravel( startLine, startIndex, endIndex );
  } else {

    startIndex = startLine.indexOf(startStation) + 1;
    endIndex = startLine.indexOf("Union Square");
    lineTravel( startLine, startIndex, endIndex );

    startIndex = endLine.indexOf("Union Square");
    endIndex = endLine.indexOf(endStation);
    lineTravel ( endLine, startIndex, endIndex );
  }

  console.log( tripCounter + " stops in total." )
};

var lineTravel = function ( curLine, startIndex, endIndex ) {
  if( tripCounter > 0 && startIndex < endIndex ) {
    startIndex += 1
    console.log("Change at Union Square")
  } else if( tripCounter > 0 && startIndex > endIndex ) {
    startIndex -= 1
    console.log("Change at Union Square")
  }

  switch (curLine) {
    case lineN:
        lineName = "N"
      break;
    case lineL:
        lineName = "L"
      break;
    case line6:
        lineName = "6"
      break;
    default:

  }

  if( tripCounter === 0 ) {
    tripMessage = "You must travel through the following stops on the " + lineName + " line: ";
  } else {
    tripMessage = "Your journey then continues on the " + lineName + " line through stops: ";
  }

  if(startIndex < endIndex) {
    for(var i = startIndex; i <= endIndex; i += 1) {
      if(i !== endIndex){
        tripMessage += curLine[i] + ", ";
      } else {
        tripMessage += curLine[i];
      }
      tripCounter += 1
    }
  } else {
    for(var i = startIndex; i >= endIndex; i -= 1) {
      if(i !== endIndex){
        tripMessage += curLine[i] + ", ";
      } else {
        tripMessage += curLine[i];
      }
      tripCounter += 1
    }
  }
  console.log(tripMessage);
};

var getStartLine = prompt("Which line are you starting from?", "N, L, or 6")

if( getStartLine === "N" ) {
  getStartLine = lineN;
  getStartStation = prompt("Which Station on line N are you starting from?", lineN.join(", "));
} else if( getStartLine === "L" ){
  getStartLine = lineL;
  getStartStation = prompt("Which Station on line L are you starting from?", lineL.join(", "));
} else if( getStartLine === "6" ) {
  getStartLine = line6;
  getStartStation = prompt("Which Station on line 6 are you starting from?", line6.join(", "));
} else {
  alert("Invalid Line Name. \n ABORT!")
}

var getEndLine = prompt("Which line are you going to?", "N, L, or 6")

if( getEndLine === "N" ) {
  getEndLine = lineN;
  getEndStation = prompt("Which Station on line N are you going to?", lineN.join(", "));
} else if( getEndLine === "L" ){
  getEndLine = lineL;
  getEndStation = prompt("Which Station on line L are you going to?", lineL.join(", "));
} else if( getEndLine === "6" ) {
  getEndLine = line6;
  getEndStation = prompt("Which Station on line 6 are you going to?", line6.join(", "));
} else {
  alert("Invalid Line Name. \n ABORT!")
}

planTrip( getStartLine, getStartStation, getEndLine, getEndStation );
