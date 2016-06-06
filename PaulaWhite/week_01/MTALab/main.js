// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// I need to make a list of each of the different train lines and
//their stops in order.
// I need to create a function that will plan a trip for the user with 4 arguments:
//1.Start train lines
//2.Start stop
//3. Finish train line
//4. Finish stop
//I need to capture the users input to find out this information.
//Once I have this information I need to figure which direction the train is travelling
//and determine whether they need to change trains at union square.
//The printed information should let the user know which lines they need to
//travel on and the stop in order


var startLine = function (){

};

var startStop = function (){

};

var finishLine = function (){

};

var finishStop = function (){

};

var planTrip = (){};


var trainLineOne = {
   name: "N Line",
   stops: [
     "Times Square",
     "28TH",
     "23RD",
     "Union Square"
     "8TH"
    ]
  };
  // Need to define what stop 1 is
  console.log("Get on train at stop" + indexOf.stop[0] ) //trainLineOne.indexOf[0]);
  //console.log ("Change trains at Union Square");
  for ( var i = 0; i < trainLineOne.stops.length; i++ ) {
  console.log( trainLineOne.stops [ i ] );

}
// Need to define what stop 1 is
// Need to change trains at end of loop


  var trainLinetwo = {
    name: "L Line",
    stops: [
      "8TH",
      "6TH",
      "Union Square",
      "3RD",
      "1ST"
    ]
};
console.log("Switch trains "  ) //trainLineOne.indexOf[0]);
//console.log ("Change trains at Union Square");
for ( var i = 0; i < trainLineOne.stops.length; i++ ) {
console.log( trainLineOne.stops [ i ] );

}
//
var trainLineThree = {
  name: "6TH Line"
  stops: [
    "Grand Centeral",
    "33RD",
    "28Th",
    "23RD",
    "Union Square",
    "Astor Place"
  ]
};



// console.log() shows output similar to this:
// "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
