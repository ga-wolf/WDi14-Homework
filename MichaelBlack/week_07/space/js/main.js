///////////////////////////////////////////////
////////////// Space Cadets ///////////////////
///////////////////////////////////////////////
var cadetsBaseURL = "http://api.open-notify.org/astros.json";
var $cadetsContent = $(".cadets .content");

var displayCadetInfo = function( data ) {
  $cadetsContent.html("");
  var cadet_arr = data.people;

  for( i = 0; i < cadet_arr.length; i ++ ) {
    var text = cadet_arr[i].name + " - Craft: " + cadet_arr[i].craft;
    var $p = $("<p>");
    $p.text(text);
    $cadetsContent.append($p);
  }
};

var getCadetData = function() {
  $.ajax({
    url: cadetsBaseURL,
    dataType: "JSONP",
    type: "GET"
  }).done(displayCadetInfo);
};

///////////////////////////////////////////////
////////////// Current Co-ords ////////////////
///////////////////////////////////////////////
var coordBaseURL = "http://api.open-notify.org/iss-now.json";
var $coordContent = $(".coord .content");

var displayCoordInfo = function( data ) {
  var lon = data.iss_position.longitude;
  var lat = data.iss_position.latitude;
  var $p = $("<p>");
  $p.text("Longitude: " + lon + " Latitude: " + lat );
  $coordContent.prepend($p);
  if( $(".coord p").length > 7 ) {
    $(".coord p").last().remove();
  }
};

var getCoordInfo = function() {
  $.ajax({
    url: coordBaseURL,
    dataType: "JSONP",
    type: "GET"
  }).done( displayCoordInfo );
};

///////////////////////////////////////////////
////////////// Passover Time //////////////////
///////////////////////////////////////////////
var passoverBaseURL = "http://api.open-notify.org/iss-pass.json?lat=";//(lat)&lon=
var $passoverContent = $(".passOver .content");

var displayPassInfo = function( data ) {
  var time = new Date(data.response[0].risetime*1000);

  console.log( data );
};

var getPassInfo = function() {
  var lat = $(".passOver .lat").val();
  var lon = $(".passOver .lon").val();

  if( lat === "" || lon === "") {
    return false;
  } else if( (lat < -80 || lat > 80) || (lon < -180 || lon > 180 ) ) {
    return false;
  }

  var passoverFullURL = passoverBaseURL + lat + "&lon=" + lon;

  $.ajax({
    url: passoverFullURL,
    dataType: "JSONP",
    type: "GET"
  }).done( displayPassInfo );
};
