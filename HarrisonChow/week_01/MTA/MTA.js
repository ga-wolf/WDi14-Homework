
//define the line and stops by objects and arrays
var lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
var lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
var line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];
var lineList = {
  "N": lineN,
  "L": lineL,
  "6": line6
};
// all messages will be used for console.
var tripMessageOne = "Your must travel through the following stops on the ";
var tripMessageTwo = "Change at Union Square.";
var tripMessageThree = "Your journey continues through the following stops: ";
var tripMessageFour = " stops in total.";

// this function will list the all stops from departure station to destination(transfer station)
var stopList = function(from, to, line) {
  if (from < to){
    trip = line.slice(from+1, to+1).toString();
  } else {
    trip = line.slice(to, from).reverse().toString();
  }
  return trip;
}
//this function is for the departure station and  destination are in the same line.
var sameLine = function (fromLine, startStation, stopStation) {
  var startLine = lineList[fromLine];
  var indexOfStartStation = startLine.indexOf(startStation);
  var indexOfStopStation = startLine.indexOf(stopStation);
  var totalStops = Math.abs(indexOfStopStation - indexOfStartStation);

  var followStops = stopList(indexOfStartStation, indexOfStopStation, startLine)
  var message = tripMessageOne + fromLine +" line: " + followStops + "\n" + totalStops + tripMessageFour;
  console.log(message);
}

//this function will consider about the transfer station.
var differentLine = function (fromLine, startStation, toLine, stopStation) {
  var startLine = lineList[fromLine];
  var stopLine = lineList[toLine];
  var indexOfStartStation = startLine.indexOf(startStation);
  var indexOfStopStation = stopLine.indexOf(stopStation);
  var indexOfTransferOnStart = startLine.indexOf("Union Square");
  var indexOfTransferOnStop = stopLine.indexOf("Union Square");
  var followStopsOne = stopList(indexOfStartStation, indexOfTransferOnStart, startLine);
  var followStopsTwo = stopList(indexOfTransferOnStop, indexOfStopStation, stopLine);
  var totalStops = Math.abs(indexOfTransferOnStart - indexOfStartStation) + Math.abs(indexOfStopStation - indexOfTransferOnStop);
  var message = tripMessageOne + fromLine +" line: " + followStopsOne + "\n" +
      tripMessageTwo + "\n" + tripMessageThree + followStopsTwo + "\n" + totalStops + tripMessageFour;
  console.log(message);
}
// The MTA main function which is combined the two situations.
var PlanTrip = function (fromLine, startStation, toLine, stopStation) {
  fromLine = prompt("Please input your line of start station..." );
  startStation = prompt("Please input the name of start station..." );
  toLine = prompt("Please input your line of stop station... ");
  stopStation = prompt("Please input the name of stop station... ");

  if (fromLine === toLine) {
    sameLine(fromLine, startStation, stopStation);
  } else {
    differentLine(fromLine, startStation, toLine, stopStation);
  }
}


PlanTrip();
