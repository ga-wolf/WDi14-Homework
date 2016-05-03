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

//Check if trip covers more than one line.
  if( startLine === endLine ) {

    startIndex = startLine.indexOf(startStation) + 1;
    endIndex = startLine.indexOf(endStation);
    lineTravel( startLine, startIndex, endIndex );
  } else if (endStation === "Union Square") { // Check if end station is Union Square on second line.

    startIndex = startLine.indexOf(startStation) + 1;
    endIndex = startLine.indexOf("Union Square");
    lineTravel( startLine, startIndex, endIndex );
  } else {

// If trip covers two lines, break into two trips. first trip end point = union station, second trip start point = union station.
    startIndex = startLine.indexOf(startStation) + 1;
    endIndex = startLine.indexOf("Union Square");
    lineTravel( startLine, startIndex, endIndex );

    startIndex = endLine.indexOf("Union Square");
    endIndex = endLine.indexOf(endStation);
    lineTravel ( endLine, startIndex, endIndex );
  }

  console.log( tripCounter + " stops in total." )
};

//Function to run through line - requires line to be provided, and start + end index.

var lineTravel = function ( curLine, startIndex, endIndex ) {
  if( tripCounter > 0 && startIndex < endIndex ) {
    startIndex += 1
    console.log("Change at Union Square")
  } else if( tripCounter > 0 && startIndex > endIndex ) {
    startIndex -= 1
    console.log("Change at Union Square")
  }

// return string of line name based on array provided (curLine)
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

//Choose output message based on if this is the first run through lineTravel
  if( tripCounter === 0 ) {
    tripMessage = "You must travel through the following stops on the " + lineName + " line: ";
  } else {
    tripMessage = "Your journey then continues on the " + lineName + " line through stops: ";
  }

//Check is looping forward or backward - Loop through array and add stations to message, stops to counter.
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


//Get input from user, prompt with options available.. Additional error checking should be added..
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

//Call function with user inputs.
planTrip( getStartLine, getStartStation, getEndLine, getEndStation );
