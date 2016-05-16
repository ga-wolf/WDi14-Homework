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


// Make subway stops objects so that you can retrieve the real name
var subN = {
  name: "Subway N",
  stops: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
};
var subL = {
  name: "Subway L",
  stops: ["8th", "6th", "Union Square", "3rd", "1st"]
};
var sub6 = {
  name: "Subway 6",
  stops: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

// Plan trip function accepting the station and stop you start on and the station and stop you end on
var planTrip = function(lineOn, stopOne, lineOff, stopTwo) {

  // Find the index of the start and stop locations
  var getOn = lineOn.stops.indexOf(stopOne);
  var getOff = lineOff.stops.indexOf(stopTwo);
  // Start your message, using the real name of the line, appending as you go
  var message = "You must travel through the following stops on " + lineOn.name + ": ";
  // Keep track of the number of stops
  var numStops = 0;

  // If the start line and the finish line are the same, use this function
  var sameLine = function() {
    // If the index of the first stop is less then the index of the second stop, count up (go forward)
    if (getOn < getOff) {
      for (var i = getOn; i <= getOff; i++) {
        // Append the name of each stop to the message
        message += lineOn.stops[i] + ", ";
        // Add 1 for each stop
        numStops++;
      }
    } else {
      // The index of the first stop is greater then the second stop, count down (go backwards)
      for (var i = getOn; i >= getOff; i--) {
        // Append the name of each stop to the message
        message += lineOn.stops[i] + ", ";
        // Add 1 for each stop
        numStops++;
      }
    }
  }

  // If the starting line is different to the finishing line, use this function
  var diffLine = function() {
    // Find the index of Union Square on each line to figure out starting and end points
    var unionSquareOn = lineOn.stops.indexOf("Union Square");
    var unionSquareOff = lineOff.stops.indexOf("Union Square");

    // Use this function to calculate whether your train is going backwards or forwards on the line
    // Uses Union Square as the end point for your starting line, and the start point for your ending line
    // Also accepts the line you're starting on or ending on, and calculates the appropriate number of stops and which direction
    var forwardsOrBackwards = function(on, off, lineOn) {
      // Function to append your stops
      var appendStops = function() {
        // Append stops to message
        if (i === off) {
          // If it's the last index in your array, use "and " instead of ", "
          message += "and " + lineOn.stops[i] + ".";
        } else {
          // Else just use ", "
          message += lineOn.stops[i] + ", ";
        }
        // Add 1 to number of stops
        numStops++;
      }
      if (on < off) {
        // If your starting point has an index lower than the index of Union Square, go forwards
        for (var i = on; i <= off; i++) {
          appendStops();
        }
      } else {
        //If your starting point has an index higher than the index of Union Square, go backwards
        for (var i = on; i >= off; i--) {
          appendStops();
        }
      }
    }

    // Run the function using your starting point, Union Squares index and the name of your starting line
    forwardsOrBackwards(getOn, unionSquareOn, lineOn);
    // Append the message to change at Union Square to ending line
    message += "\nChange at Union Square to " + lineOff.name + ".\nYour journey continues through the following stops: ";
    // Run the function using Union Squares index, the index of your end point and the name of your ending line
    forwardsOrBackwards(unionSquareOff, getOff, lineOff)

  }
  // Run the functions
  if (lineOn === lineOff) {
    // If your journey is on a single line, run the function sameLine
    sameLine();
  } else {
    // Run this function otherwise
    diffLine();
  }
  console.log(message);
  console.log("There were a total of " + numStops + " stops.")
}

// Run the function, using your starting line and station, plus your ending line and station
// Profit!
planTrip(subN, 'Times Square', subN, 'Times Square');
