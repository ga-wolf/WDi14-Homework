var lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
var lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
var line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];
var lineList = {
  "N": lineN,
  "L": lineL,
  "6": line6
};
var tripMessageOne = "Your must travel through the following stops on the ";
var tripMessageTwo = "Change at Union Square.";
var tripMessageThree = "Your journey continues through the following stops: ";
var tripMessageFour = " stops in total.";

var sameLine = function (fromLine, startStation, stopStation) {
  var startLine = lineList[fromLine];
  var indexOfStartStation = startLine.indexOf(startStation);
  var indexOfStopStation = startLine.indexOf(stopStation);
  var totalStops = Math.abs(indexOfStopStation - indexOfStartStation);
  var followStops;
  if (indexOfStartStation < indexOfStopStation){
    followStops = startLine.slice(indexOfStartStation+1, indexOfStopStation+1).toString();
  } else {
    followStops = startLine.slice(indexOfStopStation, indexOfStartStation).reverse().toString();
  }
  var message = tripMessageOne + fromLine +" line: " + followStops + "\n" + totalStops + tripMessageFour;
  console.log(message);
}

var differentLine = function (fromLine, startStation, toLine, stopStation) {
  var startLine = lineList[fromLine];
  var stopLine = lineList[toLine];
  var followStopsOne;
  var followStopsTwo;
  var indexOfStartStation = startLine.indexOf(startStation);
  var indexOfStopStation = stopLine.indexOf(stopStation);
  var indexOfTransferOnStart = startLine.indexOf("Union Square");
  var indexOfTransferOnStop = stopLine.indexOf("Union Square");
  if (indexOfStartStation < indexOfTransferOnStart){
    followStopsOne = startLine.slice(indexOfStartStation+1, indexOfTransferOnStart+1).toString();
  } else {
    followStopsOne = startLine.slice(indexOfTransferOnStart, indexOfStartStation).reverse().toString();
  }
  if (indexOfTransferOnStop < indexOfStopStation){
    followStopsTwo = stopLine.slice(indexOfTransferOnStop+1, indexOfStopStation+1).toString();
  } else {
    followStopsTwo = stopLine.slice(indexOfStopStation, indexOfTransferOnStop).reverse().toString();
  }
  var totalStops = Math.abs(indexOfTransferOnStart - indexOfStartStation) + Math.abs(indexOfStopStation - indexOfTransferOnStop);
  var message = tripMessageOne + fromLine +" line: " + followStopsOne + "\n" +
      tripMessageTwo + "\n" + tripMessageThree + followStopsTwo + "\n" + totalStops + tripMessageFour;
  console.log(message);
}

var PlanTrip = function (fromLine, startStation, toLine, stopStation) {
  if (fromLine === toLine) {
    sameLine(fromLine, startStation, stopStation);
  } else {
    differentLine(fromLine, startStation, toLine, stopStation);
  }
}


PlanTrip("N", "34th", "N", "23rd");
PlanTrip("6", "33rd", "N", "34th");
PlanTrip("L", "8th", "L", "3rd");
PlanTrip("N", "Times Square", "6", "33rd");
