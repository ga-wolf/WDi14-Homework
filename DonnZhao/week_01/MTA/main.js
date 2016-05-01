
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

var N = [ 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
var L = ['8th' , '6th', 'Union Square', '3rd' ,'1st']
var line6 = ['Grand Central', '33rd', '28th', '23rd','Union Square', 'Astro Place']
var passingStations = []; // setup a array for collection the passiong stations from eache trip.
var lineName = function (lineName) { // an additional fucntion to get a lineName in string format instead of array.
  if (lineName == N) {
    return 'N';
  };
  if ( lineName == L) {
    return 'L';
  };
   if ( lineName == line6) {
    return 'line6';
  };
};


var planTripSingle = function (getOnlineName, getOnStation,getOffLineName, getOffStation) { // loop for a single trip
  var getOnNumber = getOnlineName.indexOf(getOnStation);
  var getOffNumber = getOffLineName.indexOf(getOffStation);

    if ( getOnNumber < getOffNumber ){

      for (i = getOnNumber+1;i <=getOffNumber; i ++  ) {
         passingStations.push (getOnlineName[i]);
      }
    };

    if ( getOnNumber > getOffNumber ){

      for (i = getOnNumber; i > getOffNumber; i--  ) {
         passingStations.push (getOnlineName[i]);
      }
    }
return passingStations; }



var planTrip = function (getOnlineName, getOnStation, getOffLineName, getOffStation) { // the actual function for MTA
   var lineTrueName = lineName (getOffLineName); // varibale to collect lineName

  if ( getOnlineName === getOffLineName ) { // single trip
    planTripSingle(getOnlineName, getOnStation, getOffLineName, getOffStation);

    console.log ('You must travel through on ' + lineTrueName+ ' line and passing ' +passingStations + '.')
    console.log ('Then you will reach ' + getOffStation + '.');
    console.log ( passingStations.length +  ' stops in total' )
  }
  else if (getOnlineName !== getOffLineName) { //cross trip
     var lineTrueName2 = lineName (getOnlineName);
    planTripSingle(getOnlineName, getOnStation, getOnlineName, 'Union Square'); // seperate in single trip: set getOffStation = 'Union Square'
    console.log ('You must travel through the following stops on the line: ' + lineTrueName2 + ' : '+ passingStations + ' .')
    console.log ('Change at Union Square to : ' +lineTrueName + ' line.' );
    var totalStopPart1 = passingStations.length; //collectting number of passing stops
    passingStations.length = 0; //reset passingStations = []

    planTripSingle (getOffLineName, 'Union Square', getOffLineName, getOffStation);
    var totalStopTotal = totalStopPart1 + passingStations.length; // total stops final
    passingStations.shift(); // delete first element in second array ( 'Union Square')
    console.log ( "Your journey continues through the following stops: " + passingStations + '.')
    console.log ( 'Then you will reach ' + getOffStation + ' . ')
    console.log ( totalStopTotal+ ' stops in total.')
};
};
  planTrip (N, 'Times Square', line6, '33rd');









// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
// //
// // // console.log() shows output similar to this:
// // // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // // "Change at Union Square."
// // // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // // "7 stops in total."
//
