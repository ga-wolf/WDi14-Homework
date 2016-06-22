var map;
var marker;

var getMapInformation = function () {

  var baseMapURL = "http://api.open-notify.org/iss-now"
  $.ajax({
    url: baseMapURL,
    dataType: "JSONP",
    type: "GET"
  }).done(handleMapInformation);
};

var handleMapInformation = function (result) {
  var latitude = result.iss_position.longitude
  var longitude = result.iss_position.latitude

  displayMapInformation(latitude, longitude);
  setMapCenter(latitude, longitude)
  setMarkerPosition(latitude, longitude)
}

var displayMapInformation = function (latitude, longitude) {
  var $p = $("<p>").text(latitude + ", " + longitude)
  $(".coordinates").html($p)
}

var initMap = function () {
  var mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, {
    center: {lat: 0, lng: 0},
    zoom: 6
  });
  markerMaker();
}

var setMapCenter = function (latitude, longitude) {
  map.setCenter({lat: latitude, lng: longitude});
}

var markerMaker = function (latitude, longitude) {
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  var myIcon = iconBase + 'airports.png'
  marker = new google.maps.Marker({
    position: {lat: 0, lng: 0},
    map: map
  });
}

var setMarkerPosition = function (latitude, longitude) {
  marker.setPosition({lat: latitude, lng: longitude});
}

$(document).ready( function () {
  getMapInformation();
  var mapTimer = window.setInterval(getMapInformation, 1000);

  $(".coordinates button").on("click", function () {
    window.clearInterval(mapTimer)
  })
})
