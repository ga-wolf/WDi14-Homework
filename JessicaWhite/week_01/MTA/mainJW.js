//

//create the arrays for the different lines listed in order of stops

var fullLines = {
 "N" : [
  "Times Square",
  "34th",
  "28th",
  "23rd",
  "Union Square",
  "8th"
],
 "L" : [
  "8th",
  "6th",
  "Union Square",
  "3rd",
  "1st"
],
 "6" : [
  "Grand Central",
  "33rd",
  "28th",
  "23rd",
  "Union Square",
  "Astor Place"
]
};

console.log("Hi there! Please input your start line, start stop, end line and end stop in a userInfo() function. ");

//create the function to collect the users info and create all the stored variables used in the rest of the code

var userInfo = function( startLine, startStop, endLine, endStop ) {

  var firstLine = fullLines[startLine];
  var endingLine = fullLines[endLine];
  var firstUnion = firstLine.indexOf("Union Square");
  var endUnion = endingLine.indexOf("Union Square");//see below
  var startStation = firstLine.indexOf(startStop);
  var destination = endingLine.indexOf(endStop);
  var stopsList1;
  var stopsList2;
  var stopsListTotal;
  var stopsNumber1;
  var stopsNumber2;
  var stopsNumberTotal;


//now, create the if/else if to check if the user is going along a single line
// then you want it to check the position of the stops in the line array and run in the direction the user is travelling
// then console.log it all out for the user to see.

if (firstLine === endingLine) {
  if (startStation < destination) {
    stopsNumber1 = (destination - startStation);
    stopsList1 = firstLine.slice(startStation, destination);

      console.log("To travel to " + endStop + " from " + startStop + " along the " + startLine + " you must pass through " + stopsNumber1 + " stops: " + stopsList1.join(", ") + "." );
  }
  else if (startStation > destination) {
    firstLine.reverse();
    startStation = firstLine.indexOf(startStop);
    destination = endingLine.indexOf(endStop);
    stopsNumber1 = (destination - startStation);
    stopsList1 = firstLine.slice(startStation, destination);

      console.log("To travel to " + endStop + " from " + startStop + " along the " + startLine + " you must pass through " + stopsNumber1 + " stops: " + stopsList1.join(", ") + "." );
  }

}

//now for the really fun part, if the start and end lines don't match; we need to run two if statements assigning values to the variables so we can spit them out in order.

else if (firstLine !== endingLine) {
  if (startStation < firstUnion) {
    stopsList1 = firstLine.slice(startStation++, firstUnion);
    stopsNumber1 = (firstUnion - startStation);
  }
  else if (startStation > firstUnion) {
    firstLine.reverse();
    startStation = firstLine.indexOf(startStop);
    firstUnion = firstLine.indexOf("Union Square");
    stopsList1 = firstLine.slice(startStation++, firstUnion);
    stopsNumber1 = (firstUnion - startStation);
  }
//now for the latter part of the journey
  if (destination > endUnion) {
    stopsList2 = endingLine.slice(endUnion++, destination);
    stopsNumber2 = (destination - endUnion);
  }
  else if (destination < endUnion) {
    endingLine.reverse();
    destination = endingLine.indexOf(endStop);
    endUnion = endingLine.indexOf("Union Square");
    stopsList2 = endingLine.slice(endUnion++, destination);
    stopsNumber2 = (destination - endUnion);
  }

  stopsNumberTotal = (stopsNumber1 + stopsNumber2 - 1);
  stopsListTotal = (stopsList1.join(", ") + ", " + stopsList2.join(", "));

  console.log("To travel to " + endStop + " from " + startStop + " along the " + startLine + " and " + endLine + " you must pass through " + stopsNumberTotal + " stops: " + stopsListTotal + " with an interchange at Union Square." );

}

};
