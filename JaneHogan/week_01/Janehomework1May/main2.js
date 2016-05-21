console.log ("Test this is working")


var line = {
lLine: ["Eigth station on the l Line", "Sixth station on the l Line ", "Union Square", "third station on the l Line", "1st station on the l Line"],

sixthLine: ["Grand Central", "33rd", "28th", "23rd on the sixthLine", "Union Square",  "Astor Place"],

nLine: ["Times Square", "34th station", "28th station", "23rd on the N Line", "Union Square","8th station on the nLine"]
}

//user input

var startStation;
var startLine
var endStation;
var endLine;
// var lLine;

// //do they change?
// var oneLineorTwo = function (startLine, endLine){
//   if ( startLine === startLine){
//     console.log ("You don't have to change")
//     return true;
//   }
//   else {oneLineorTwo = false}
// }
// oneLineorTwo ("a","b");


// //station number for a straight journey
// var indexNum = line.lLine.indexOf("Union Square");
// var indexNumStart = line.startLine.indexOf("startStation");
// var indexNum = line.lLine.indexOf("Union Square");

var indexNumStart = function(startLine, startStation){
  debugger
  startNum = line.startLine.indexOf(startStation);
}
indexNumStart (line.lLine,"Eigth station on the l Line");

//station numbers for a journey that they have to change
