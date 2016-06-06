// MTA Lab
// Objectives:
//
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
//
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total
// number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested
// function name and signature.
//
// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th,
// 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:


var lineN = ["Times Square", "34th", "28thN", "23rdN", "Union Square", "8thN"];
var lineL = ["8thL", "6th", "Union Square", "3rd", "1st"];
var lineSix = ["Grand Central", "33rd", "28thSix", "23rdSix", "Union Square","Astor Place"]

var detailedJourneyA1 = "";
var detailedJourneyR1 = "";
var detailedJourneyA2 = "";
var detailedJourneyR2 = "";

var numberOfStopsA1 = 0;
var numberOfStopsR1 = 0;
var numberOfStopsA2 = 0;
var numberOfStopsR2 = 0;
var totalNumberOfStops = 0;

var addDotAtTheEnd = function (journey) {

      var journeyArray = journey.split("");
      journeyArray.pop();
      journeyArray[journeyArray.length - 1] = ".";
      var journeyWithDot = journeyArray.join("");

      return journeyWithDot;
}


var planTrip = function (line1, firstStop, line2, lastStop) {

var line11 = [];
if (line1 === "Line N") { line11 = lineN;}
if (line1 === "Line L") { line11 = lineL;}
if (line1 === "Line 6") { line11 = lineSix;}

var line22 = [];
if (line2 === "Line N") { line22 = lineN;}
if (line2 === "Line L") { line22 = lineL;}
if (line2 === "Line 6") { line22 = lineSix;}


    if (line1 === line2){
                if (line11.indexOf(firstStop) < line11.indexOf(lastStop)) {
                    for (var i = line11.indexOf(firstStop); i < line11.length; i++) {
                      detailedJourneyA1 += line11[i] + ", ";
                      numberOfStopsA1 ++;
                      if (line11[i] === lastStop) { break; }
                      }
                      console.log("Your must travel through the following " + numberOfStopsA1 + " stops on the " + line1 + ": " + addDotAtTheEnd(detailedJourneyA1));
                    }

                if (line11.indexOf(firstStop) > line11.indexOf(lastStop)) {
                    for (var i = line11.indexOf(firstStop); i >= 0; i--) {
                      detailedJourneyR1 += line11[i] + ", ";
                      numberOfStopsR1 ++;
                      if (line11[i] === lastStop) { break; }
                      }
                      console.log("Your must travel through the following " + numberOfStopsR1 + " stops on the " + line1 + ": " + addDotAtTheEnd(detailedJourneyR1));
                    }
          }

    if (line1 !== line2){

                if (line11.indexOf(firstStop) < line11.indexOf("Union Square")) {

                        for (var i = line11.indexOf(firstStop); i < line11.length; i++) {
                          detailedJourneyA1 += line11[i] + ", ";
                          numberOfStopsA1 ++;
                          if (line11[i] === "Union Square") { break; }
                          }
                        console.log("Your must travel through the following " + numberOfStopsA1 + " stops on the " + line1 + ": " + addDotAtTheEnd(detailedJourneyA1));
                        console.log("Change at Union Square.");

                        if (line22.indexOf("Union Square") < line22.indexOf(lastStop)) {
                                      for (var i = line22.indexOf("Union Square"); i < line22.length; i++) {
                                        detailedJourneyA2 += line22[i] + ", ";
                                        numberOfStopsA2 ++;
                                        if (line22[i] === lastStop) { break; }
                                        }
                                        totalNumberOfStops = numberOfStopsA1 + numberOfStopsR1 + numberOfStopsA2 + numberOfStopsR2;
                                        console.log("Your journey continues on " + line2 + " through the following " + numberOfStopsA2 + " stops: " + addDotAtTheEnd(detailedJourneyA2));
                                        console.log(totalNumberOfStops + " stops in total.")
                                      }

                        if (line22.indexOf("Union Square") > line22.indexOf(lastStop)) {
                                    for (var i = line22.indexOf("Union Square"); i >= 0; i--) {
                                      detailedJourneyR2 += line22[i] + ", ";
                                      numberOfStopsR2 ++;
                                      if (line22[i] === lastStop) { break; }
                                      }
                                      totalNumberOfStops = numberOfStopsA1 + numberOfStopsR1 + numberOfStopsA2 + numberOfStopsR2;
                                      console.log("Your journey continues on " + line2 + " through the following " + numberOfStopsR2 + " stops: " +  addDotAtTheEnd(detailedJourneyR2));
                                      console.log(totalNumberOfStops + " stops in total.");
                                    }

                    }

                if (line11.indexOf(firstStop) > line11.indexOf("Union Square")) {

                    for (var i = line11.indexOf(firstStop); i >= 0; i--) {
                      detailedJourneyR1 += line11[i] + ", ";
                      numberOfStopsR1 ++;
                      if (line11[i] === "Union Square") { break; }
                    }

                      console.log("Your must travel through the following " + numberOfStopsR1 + " stops on the " + line1 + ": " + addDotAtTheEnd(detailedJourneyR1));
                      console.log("Change at Union Square.");

                    if (line22.indexOf("Union Square") < line22.indexOf(lastStop)) {
                                  for (var i = line22.indexOf("Union Square"); i < line22.length; i++) {
                                    detailedJourneyA2 += line22[i] + ", ";
                                    numberOfStopsA2 ++;
                                    if (line22[i] === lastStop) { break; }
                                    }
                                    totalNumberOfStops = numberOfStopsA1 + numberOfStopsR1 + numberOfStopsA2 + numberOfStopsR2;
                                    console.log("Your journey continues on " + line2 + " through the following " + numberOfStopsA2 + " stops: " +  addDotAtTheEnd(detailedJourneyA2));
                                    console.log(totalNumberOfStops + " stops in total.");
                    }

                    if (line22.indexOf("Union Square") > line22.indexOf(lastStop)) {
                                for (var i = line22.indexOf("Union Square"); i >= 0; i--) {
                                  detailedJourneyR2 += line22[i] + ", ";
                                  numberOfStopsR2 ++;
                                  if (line22[i] === lastStop) { break; }
                                  }
                                  totalNumberOfStops = numberOfStopsA1 + numberOfStopsR1 + numberOfStopsA2 + numberOfStopsR2;
                                  console.log("Your journey continues on " + line2 + " through the following " + numberOfStopsR2 + " stops: " +  addDotAtTheEnd(detailedJourneyR2));
                                  console.log(totalNumberOfStops + " stops in total.");
                                }

                }

     }
   }



// The N line has the following stops: Times Square, 34th, 28th, 23rd,
// Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd,
// Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other
// intersection points. (For example, this means the 28th stop on the N line
//   is different than the 28th street stop on the 6 line, so you'll have to
//   differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass t
// hrough or change at.
// Hints:
//
// Work out how you would do it on paper first! Then start to explain that
// process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get
//  it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their
// stops and intersection.
// The key to the lab is finding the index positions of each stop.
// (hint: indexOf())
// Make sure the stops that are the same for different lines have different names
// (i.e. 23rd on the N and on the 6 need to be differentiated)
