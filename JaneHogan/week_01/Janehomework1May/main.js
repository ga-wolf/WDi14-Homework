console.log ("Hello Jane and Betty");

// var computer = Betty;
// Betty, we're helping people around the sub-way.
// They want to know how to get between stations.
// There are 3 train lines.  They all go through Union Square. You need to REMEMBER (VAR) the stations in a very speficic order ARRAY []. We also need to look through  each line at various times to see if the stations they are wanting, are on them ie FUNCTIONS  AN OBJECT for the collections of lines. We then need to figure out whether the start and end stations (VARIABLES) are on the same line, or if they need to change between lines (FUNCTION).  Also, if the start line is Union Square, there will only ever be one line.  IF STATEMENTS We then need to work out the order of the stations.  There will be a forward and backwards way on the line. Because you remember the INDEX NUMBER of where the stations are, for each line, IF the start station has an index number LESS THAN the end station, they will be travelling forward.  If not, they will be travelling backwards, and we will need to put the stations in the reverse order (ARRAY.REVERSE???)  Also, if the start station and the end station are the same, they are douche bags and aren't going anywhere!


//These are the list of stations - created as arrays because the order is important.  I think I should be able to put the //arrays in an OBJECT to make some of the code more eloquent, but didn't quite get there. The names in these arrays are ridiculously convuloted and long and I want need to do something to help the user pick the right one!

var lLine = ["Eigth station on the l Line", "Sixth station on the l Line ", "Union Square", "third station on the l Line", "1st station on the l Line"] ;

var sixthLine = ["Grand Central", "33rd", "28th", "23rd on the sixthLine", "Union Square",  "Astor Place"];

var nLine =  ["Times Square", "34th", "28th", "23rd on the N Line", "Union Square",  "8th station on the nLine"]

// This is what the user needs to input.  As you'll see from the names in my arrays, I've cheated a bit ie assumed (!!!) the user knows the line names.

var startStation = "Eigth station on the l Line";
var endStation = "Times Square";

//Users mistakes in inputting data

// HELP This was supposed to check that the user was going somewhere.  I couldn't get it working in here, but I got it working in JS bin. Don't know why!
//Would also like to get the user to pick from a list of stations - rather than the free-form typing which is bound to cause //problems.
// Assume this would use some kind of array

// var validInput = function (startStation, endStation){
//   var messageNoWhere = "Hi, you've made a bit of mistake as your start and end station are the same, which means you're on a road to nowhere.  Would you like to pick a different start or end station?";
//   {
//     if (startStation === endStation);
//     console.log (messageNoWhere);
//   }
// }
// validInput ();



//This code is about finding  what train lines the stations are on that the users wants to travel to and from.  One scenario, is that the user will not need to change lines.  This is dealt with in a separate function. Initially I had dealt with this in here, but have moved it to a separate function (which is hopefully working!).

// STARTING  This bit tells me what starting line the user would take.  It generates a variable called startLine
// //I'm sure I could use a loop here, but I can't figure out how
//
//
 var startLine = function (startStation){
    if ((lLine.indexOf (startStation)) >= 0){
    console.log ("The startline is lLine");
    return lLine;
  }
  else if ((sixthLine.indexOf (startStation)) >= 0){
    console.log ("The startline is sixth Line");
    return sixthLine;
  }
  else if ((nLine.indexOf (startStation)) >= 0){
      console.log ("The startline is nLine");
       return console.log ("The stations on this line are: " + nLine);
  }
   else {
     console.log ("Help. I can't find you!")
   }
}

startLine (startStation);
console.log ("The stations on the first line are: " + startLine (startStation));

// ENDLINE This bit tells me what ending line the user would take.  It generates a variable called endLine
//
var endLine = function (endStation){
  var yourEndLine;
  if ((lLine.indexOf (endStation)) >= 0){
    yourEndLine = "Your end line is lLine";
    return lLine;
  }
  else if ((sixthLine.indexOf (endStation)) >= 0){
    yourEndLine = "Your end line is sixthLine";
    return sixthLine

  }
  else if ((nLine.indexOf (endStation)) >= 0){
       yourEndLine = "Your end line is nLine"
       return nLine;
  }
   else {
     console.log ("Help. I can't find you!")
   }
}

endLine (endStation);
console.log ("The stations on the second line are: " + endLine (endStation));

// //This part is about finding the index numbers of the station on the line. This is important for enabling us to tell the user what stations etc they will travel through and getting Betty to figure out whether they are going forward or backward along the line.
//
var startStationNumber = function (startStation, startLine){
  var startStationArray = startLine(startStation);
  var stationNumber = startStationArray.indexOf (startStation);
  console.log ("The station number of the start station is " + stationNumber);
  return stationNumber;
  }

startStationNumber (startStation, startLine);


var endStationNumber = function (endStation, endLine){
  var endStationArray = endLine (endStation);
  var stationNumber = endStationArray.indexOf (endStation);
  console.log ("The station number of the end station is " + stationNumber);
  return stationNumber;
}

endStationNumber (endStation, endLine);
//
// HELP This section is finally about listing the stations. I haven't really finished it, but was working along the following lines, and have included it to test my logic. First of all, I've used a FUNCTION to see whether the user needs to change. I then need two more functions to run to list the stations where there is no change, and the stations where there is a change.  I was planning on using .reverse where the user needed to travel in the  "backward" direction along the line.
//
//
var isChangeNeeded = function (startLine,endLine){
var doIchange;
  if (startLine === endLine){
    doIchange = false;
    console.log ("You do not need to change."  );
  }
  else {
    doIchange = true;
    console.log ("Bad luck. You need to change at Union Square")
       };
  return doIchange;
}
isChangeNeeded (startLine,endLine);

var noChangeRoute = function (changeNeeded, startStationNumber, endStationNumber)
  if (isChangeNeeded === false){
    if (startStationNumber < endStationNumber){
      travellingRoute = startLine.splice (startStationNumber, endStationNumber)
    };
    else {
      travellingRoute = stareLine.reverse
    }
  console.log ("The stations you will travel on are " + travellingRoute)
 }
// HELP This bit here was really doing my head in.  I hope I'm on the right direction.  I didn't get time to really test, so will keep working on it. 

var changeNeededRoute = function (){
  var stage1;
  var stage2;
  var startLineUnSq = startLine.indexOf ("Union Square");
  var endLineUnSq = endLine.indexOf ("Union Square");
  if (isChangeNeeded === true){
    (if (startStationNumber < startLineUnSq {
    var stage1 = startLine.splice (startStationNumber,startLineUnSq)
    };
    else stage1 = startLine.reverse (startStationNumber,startLineUnSq;
    };)
    (if (startStationNumber < endLineUnSq{
    var stage2 = startLine.splice (startStationNumber,startLineUnSq)
    };
    else stage2 = stareLine.reverse (startStationNumber,startLineUnSq;
    };)
  else (console.log ("You don't need to change! So lucky")
  }
  console.log ("Your journey is " + stage1 + stage2);
  return stage1, stage2;
}
