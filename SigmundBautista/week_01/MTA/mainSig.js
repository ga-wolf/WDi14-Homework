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
var tripCounter = 0;
var transferCounter = 0;
var startLine = prompt("Which line will you depart from: L or N or 6");
var endLine = prompt("which line with you arrive at: L or N or 6");
var locationA = prompt("Which station will you depart from");
var locationB = prompt("Which station will you arrive at");


if(startLine === "N")  {
  var lineA = nLine;
} else if(startLine === "L") {
  var lineA = lLine;
} else if(startLine === "6") {
  var lineA = sixLine;
}

if(endLine === "N")  {
  var lineB = nLine;
} else if(endLine === "L") {
  var lineB = lLine;
} else if(endLine === "6") {
  var lineB = sixLine;
}

if(endLine != startLine)  {
  var needsToChange = true;
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
