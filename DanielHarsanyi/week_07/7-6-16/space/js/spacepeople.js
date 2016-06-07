var peopleApiURL = "http://api.open-notify.org/astros.json";
var baseImageSearchURL = "http://api.pixplorer.co.uk/image?word=";
var $peopleContentDiv = $(".container .details");
var $numberOfPeopleDiv = $(".container .details .number");
var $astronautDiv = $(".container .details .astronauts");
var name;

var getSpacePeople = function(){
  $.ajax({
    url: peopleApiURL,
    dataType: "JSONP",
    type: "GET"
  }).done(displaySpacePeople);
};

// var getAstronautImage = function(){
//   $.ajax({
//     url: baseImageSearchURL+name,
//     dataType: "JSON",
//     type: "GET"
//   }).done(displayAstronautImage);
// };
//
// var displayAstronautImage = function(data){
//   url = data.images[0].imageurl;
//   $img = $("<img>");
//   $img.attr("src", url);
//   $astronautDiv.append($img);
// };

var displaySpacePeople = function(data){
  var numSpacePeople = data.number;
  var arrOfPeople = data.people;

  $numberOfPeopleDiv.append("("+numSpacePeople+" total)");

  for (var n = 0; n < arrOfPeople.length ; n++) {
    name = arrOfPeople[n].name;
    // getAstronautImage();
    craft = arrOfPeople[n].craft;
      if (craft === "ISS") {
        var $p = $("<p>");
        $p.html(name);
        $astronautDiv.append($p);
      }
  }

};

getSpacePeople();
