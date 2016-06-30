var baseLocationURL =
"http://api.open-notify.org/iss-now.json";

var $baseLocationContent = $(".location .content");
var locationTimer = null;

var displayLocationInformation = function ( data ) {
  var lat = data.iss_position.latitude;
  var long = data.iss_position.longitude;

  var $p = $("<p>");
  $p.text( "Latitude: " + lat + " Longitude: " + long );

  $baseLocationContent.prepend( $p );
};

var getLocationInformation = function () {

  $.ajax({
    url: baseLocationURL,
    dataType: "JSONP",
    type: "GET"
  }).done(displayLocationInformation);

};

$(document).ready(function () {
  getLocationInformation();

    locationTimer = window.setInterval(getLocationInformation, 500);

    $(".location button").on("click", function () {
      window.clearInterval( locationTimer );
    });
});
