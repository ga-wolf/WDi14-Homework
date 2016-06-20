var latlng;
var marker;
var currentLat;
var currentLon;
var mymap;

// What is the URL that we care about
var baseLatLongURL = "http://api.open-notify.org/iss-now.json";
var $baseLatLongContent = $(".latlong .content");

var displayLatLongInformation = function ( data ) {
  // What to do with the data
  currentLat = parseFloat(data.iss_position.latitude);
  currentLon = parseFloat(data.iss_position.longitude);

  var $latitude = $(".latlong .latitude");
  var $longitude = $(".latlong .longitude");
  $latitude.text( "Latitude: " + data.iss_position.latitude );
  $longitude.text( "Longitude: " + data.iss_position.longitude );

  if (marker) {
    marker.setLatLng([currentLat, currentLon]);
  }
  if (mymap) {
    mymap.panTo(new L.LatLng(currentLat, currentLon));
  }

};

var getLatLongInformation = function () {
  // AJAX request goes here
  $.ajax({
    url: baseLatLongURL,
    // What data type am I asking for?
      // JSON
    dataType: "JSONP",
    // Which method will I be using?
      // GET
    type: "GET"
  }).done(displayLatLongInformation);
};

var initMap = function(){
    mymap = L.map('mapid').setView([currentLat, currentLon], 3);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
      // attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets'
    }).addTo(mymap);

    marker = L.marker([0, 0]).addTo(mymap);

    mymap.scrollWheelZoom.disable();
};

$(document).ready( function () {
  var latlongTimer = setInterval( getLatLongInformation, 500 );
});

window.setTimeout(initMap, 3000);
