var baseAstronautURL = "http://api.open-notify.org/astros.json";

var $baseAstronautContent = $(".astronaut .content");

var displayAstronautInformation = function ( data ) {
  for ( var i = 0; i < data.people.length; ++i ) {
    var name = data.people[i].name;

    var $p = $("<p>");
    $p.text( name );

  $baseAstronautContent.prepend( $p );
  };
};

var getAstronautInformation = function () {
  $.ajax({
    url: baseAstronautURL,
    dataType: "JSONP",
    type: "GET"
  }).done(displayAstronautInformation);
};

$(document).ready(function () {
  getAstronautInformation();
});
