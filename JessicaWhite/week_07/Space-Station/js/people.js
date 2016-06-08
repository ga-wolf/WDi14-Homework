// What is the URL that we care about
var basePeopleURL = "http://api.open-notify.org/astros.json";
var $basePeopleContent = $(".people .content");

var displayPeopleInformation = function ( data ) {
  // What to do with the data
  for( i = 0; i < data.people.length; i++ ) {
    var $peopleList = $("<p>");
    $peopleList.text( data.people[i].name );
    $basePeopleContent.append( $peopleList );
  };
};

var getPeopleInformation = function () {
  // AJAX request goes here
  $.ajax({
    url: basePeopleURL,
    // What data type am I asking for?
      // JSON
    dataType: "JSONP",
    // Which method will I be using?
      // GET
    type: "GET"
  }).done(displayPeopleInformation);
};

$(document).ready( function () {
  getPeopleInformation();
  // var $peopleTimer = setInterval( getPeopleInformation, 500 );
});
