
var L = {
  insert: ["8th", "6th", "Union Square", "3rd", "1st", "L"],
  print: ["8thL", "6th", "Union Square", "3rd", "1st"]
}
var N = {
  insert: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th", "N"],
  print: ["Times Square", "34th", "28thN", "23rdN", "Union Square", "8thN"]
}
var six ={
  insert: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place", "6"],
  print: ["Grand Central", "33rd", "28th6", "23rd6", "Union Square", "Astor Place"]
}
//
// var stLine ;
// var startStation;
// var enLine;
// var endStation;

var planTrip = function(stLine, startStation, enLine, endStation) {
// debugger;
// var userInput = function() {
//   prompt("Where do you wanna go? Choose your destination as following : departing line, departing station, arrival line, arrival station")
//   return ;
// }
//
// stLine = window[userInput()];
// startStation = userInput();
// enLine = window[userInput()];
// endStation = userInput();

  if(stLine === 6) {
    stLine = six;
  }
  if(enLine === 6) {
    enLine = six;
  }

  var startLine = stLine.insert;
  var endLine = enLine.insert;


    var startIndex = startLine.indexOf(startStation);
    var endIndex = endLine.indexOf(endStation);

    //   if (startLine === endLine)
    var sameLine = function () {
      // debugger;
      var usIndex = startLine.indexOf("Union Square");
      var lineName = startLine[startLine.length-1];
      var stationThrough =[];
      if (startIndex < endIndex) {
        for(var i=startIndex+1; i <= endIndex; i += 1){
          stationThrough.push(stLine.print[i]);
          var joint = stationThrough.join(", ");
        }
      }
      else {
        for(var j=startIndex-1; j>=endIndex; j -= 1) {
          stationThrough.push(stLine.print[j]);
          var joint = stationThrough.join(", ");
        }
      }
      console.log("Your travel goes through the following stops on " + lineName + " line: " + joint + "." );
      var stopsNum=Math.abs(startIndex - endIndex);
      console.log(stopsNum + " stops in total")
      };


    //If startline isn't same as endline, First, you should show the stations from startstation through US. Then show message "You need to change the your train", and then show the stations right after US through the endstation.

    //   if (startLine !== endLine)
    var diffLine = function () {
      var lineFirst = startLine[startLine.length-1]
      var lineSecond = endLine[endLine.length-1]
      var usBeforeIndex = startLine.indexOf("Union Square");
      var usAfterIndex = endLine.indexOf("Union Square");
      var beforeUs = function(){
        var stationThrough=[];
          if(startIndex<usBeforeIndex) {
            for(var i=startIndex+1; i <= usBeforeIndex; i += 1) {
               stationThrough.push(stLine.print[i]);
               var jointOne = stationThrough.join(", ");
             }
           }
          else {
            for(var j=startIndex-1; j >= usBeforeIndex; j -= 1) {
              stationThrough.push(stLine.print[i]);
              var jointOne = stationThrough.join(", ");
            }
          }
          console.log("Your travel goes through the following stops on " + lineFirst + " line: "+ jointOne + "." );
          console.log("Change your train to " + lineSecond + " line.");
      };
      beforeUs();

      var afterUs = function () {
        var stationThrough=[];
          if(endIndex>usAfterIndex) {
            for(var i=usAfterIndex+1; i <= endIndex; i += 1) {
               stationThrough.push(enLine.print[i]);
               var jointTwo = stationThrough.join(", ");
             }
           }
          else {
            for(var j=usAfterIndex-1; j >= endIndex; j -= 1) {
              stationThrough.push(enLine.print[j]);
              var jointTwo = stationThrough.join(", ");
            }
          }
          console.log("Your journey continues to the following stops: " +  jointTwo+ "." );
        }
        afterUs();
        var stopsNum= Math.abs(startIndex-usBeforeIndex) + Math.abs(usAfterIndex-endIndex);
        console.log(stopsNum + " stops in total")
    };

  if (startLine === endLine) {
    sameLine();
  } else {
    diffLine();
  }
}





// Objectives:
//
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
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



// var planTrip=(startLine, startStation, endLine, endStation);
//
// planTrip("L","6th","L","3rd")
//
// var L =["8th", "6th", "Union Square", "3rd", "1st", "L"];
// var capL=['L','','','','']
// var N =["Times Square", "34th", "28th", "23rd", "Union Square", "8th", "M"];
// var capN=['','','N','N','','N']
// var six =["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place", "6"];
// var cap6=['','','6','6','','']
//
// var startLine ;
// var startStation ;
// var endLine ;
// var endStation ;
//
//
//
// var planTrip = function(startLine, startStation, endLine, endStation) {
//
//     var startIndex = startLine.indexOf(startStation);
//     var endIndex = endLine.indexOf(endStation);
//
//     //   if (startLine === endLine)
//     var sameLine = function () {
//       // debugger;
//       var usIndex = startLine.indexOf("Union Square");
//       var lineName = startLine[startLine.length-1];
//       var stationThrough =[];
//       if (startIndex < endIndex) {
//         for(var i=startIndex; i <= endIndex; i += 1){
//           stationThrough.push(startLine[i]+);
//           var joint = stationThrough.join(", ");
//         }
//       }
//       else {
//         for(var j=startIndex; j>=endIndex; j -= 1) {
//           stationThrough.push(startLine[j]);
//           joint = stationThrough.join(", ");
//         }
//       }
//       console.log("Your travel should go through the following stops on " + lineName + " line: " + joint + "." );
//       var stopsNum=Math.abs(startIndex - endIndex);
//       console.log(stopsNum + " stops in total")
//       };
//
//
//     //If startline isn't same as endline, First, you should show the stations from startstation through US. Then show message "You need to change the your train", and then show the stations right after US through the endstation.
//
//     //   if (startLine !== endLine)
//     var diffLine = function () {
//       var lineFirst = startLine[startLine.length-1]
//       var lineSecond = endLine[endLine.length-1]
//       var usBeforeIndex = startLine.indexOf("Union Square");
//       var usAfterIndex = endLine.indexOf("Union Square");
//       var beforeUs = function(){
//         var stationThrough=[];
//           if(startIndex<usBeforeIndex) {
//             for(var i=startIndex; i <= usBeforeIndex; i += 1) {
//                stationThrough.push(startLine[i]);
//                var jointOne = stationThrough.join(", ");
//              }
//            }
//           else {
//             for(var j=startIndex; j >= usBeforeIndex; j -= 1) {
//               stationThrough.push(startLine[i]);
//               var jointOne = stationThrough.join(", ");
//             }
//           }
//           console.log("Your travel should go through the following stops on " + lineFirst + " line: "+ jointOne + "." );
//           console.log("Change your train to " + lineSecond + " line.");
//       };
//       beforeUs();
//
//       var afterUs = function () {
//         var stationThrough=[];
//           if(endIndex>usAfterIndex) {
//             for(var i=usAfterIndex+1; i <= endIndex; i += 1) {
//                stationThrough.push(endLine[i]);
//                var jointTwo = stationThrough.join(", ");
//              }
//            }
//           else {
//             for(var j=usAfterIndex-1; j >= endIndex; j -= 1) {
//               stationThrough.push(endLine[j]);
//               var jointTwo = stationThrough.join(", ");
//             }
//           }
//           console.log("Your journey continues to the following stops: " +  jointTwo+ "." );
//         }
//         afterUs();
//         var stopsNum= Math.abs(startIndex-usBeforeIndex) + Math.abs(usAfterIndex-endIndex);
//         console.log(stopsNum + " stops in total")
//     };
//
// if (startLine === endLine) {
//   sameLine();
// }
// else{
//   diffLine();
// }
//
// var test = startLine.splice(startIndex, endIndex-startIndex);
//
//
//
// }
//



//

//I can make the print message with .splice


//
//       for(var i=endIndex; i <= usIndex; i +=1) {
//         stationThrough.push(startLine[i]);
//         stationThrough.join(", ")
//
//         }
//       }
//     } else {
//       for(var i=endIndex; i>=usIndex; i -=1) {
//         stationThrough.push(startLine[i]);
//         stationThrough.join(", ")
//
//       }
//
//
//   }
// //
//
