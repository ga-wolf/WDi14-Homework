var baseAstrosURL = "http://api.open-notify.org/astros.json";
var $baseAstrosContent = $(".astros .content");

var displayAstrosInformation = function ( data ) {
  var astros = data.people;
  for (var i = 0; i < astros.length; i++) {
    var currentAstro = astros[i];
    var $li = $("<li>");
    $li.text( currentAstro.name + " | " + " Craft: " + currentAstro.craft );
    $baseAstrosContent.prepend( $li );
  }

};
var getAstrosInformation = function () {
  $.ajax({
    url:baseAstrosURL,
    dataType: "JSONP",
    type: "GET"
  }).done( displayAstrosInformation );
};

$(document).ready(function () {
  getAstrosInformation();

});

var baseLocationURL = "http://api.open-notify.org/iss-now.json";
var $baseLocationContent = $(".location .content");

    var displayLocationInformation = function ( data ) {
      var latitude = data.iss_position.latitude;
      var longitude = data.iss_position.longitude;
//   for (var i = 0; i < astros.length; i++) {
//     var currentAstro = astros[i];
    var $p = $("<p>");
    $p.text( " Latitude: " + latitude + " | " + " Longitude: " + longitude );

    $baseLocationContent.prepend( $p );
//  }

};
var getLocationInformation = function () {
  $.ajax({
    url:baseLocationURL,
    dataType: "JSONP",
    type: "GET"
  }).done( displayLocationInformation );
};
//
$(document).ready(function () {
  getLocationInformation();

});
