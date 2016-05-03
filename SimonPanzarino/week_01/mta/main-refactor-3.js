'use strict';

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
// Hints:
//
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

var subN = {
  name: "Subway N",
  stops: ["Times Square", "34th", "N28th", "N23rd", "Union Square", "N8th"]
};
var subL = {
  name: "Subway L",
  stops: ["8th", "6th", "Union Square", "3rd", "1st"]
};
var sub6 = {
  name: "Subway 6",
  stops: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

var planTrip = function(lineOn, stopOne, lineOff, stopTwo) {
  var getOn = lineOn.stops.indexOf(stopOne);
  var getOff = lineOff.stops.indexOf(stopTwo);
  var message = "You must travel through the following stops on " + lineOn.name + ": ";

  var sameLine = function() {
    if (getOn < getOff) {
      for (var i = getOn; i <= getOff; i++) {
        message += lineOn.stops[i] + ", ";
      }
    } else {
      for (var i = getOn; i >= getOff; i--) {
        message += lineOn.stops[i] + ", ";
      }
    }
  }

  var diffLine = function() {
    var getOnL = lineOn.stops.indexOf("Union Square");
    var getOnO = lineOff.stops.indexOf("Union Square");

    var forwardsOrBackwards = function(on, off, offOrOn) {
      if (on < off) {
        for (var i = on; i <= off; i++) {
          message += offOrOn.stops[i] + ", ";
        }
      } else {
        for (var i = on; i >= off; i--) {
          message += offOrOn.stops[i] + ", ";
        }
      }
    }

    if (getOnL >= getOnO) {
      forwardsOrBackwards(getOn, getOnL, lineOn);
      message += "Change at Union Square to " + lineOff.name + " ";
      forwardsOrBackwards(getOnO, getOff, lineOff);
    } else {
      forwardsOrBackwards(getOn, getOnL, lineOn);
      message += "Change at Union Square to " + lineOff.name + " ";
      forwardsOrBackwards(getOnO, getOff, lineOff)
    }
  }

  if (lineOn === lineOff) {
    sameLine();
  } else if (subL.stops.indexOf(stopTwo) >= 0) {
    diffLine("Subway L");
  } else if (sub6.stops.indexOf(stopTwo) >= 0) {
    diffLine("Subway 6");
  } else if (subN.stops.indexOf(stopTwo) >= 0) {
    diffLine("Subway N");
  }
  console.log(message);
}

planTrip(subL, '1st', sub6, 'Grand Central');
