console.log( jQuery );

// What is the URL we care about:
var baseMapURL = "http://api.open-notify.org/iss-now"


var $baseMapElement = $(".map");
// only content div in map div:
var $baseMapContent = $(".map .content");
var mapTimer = null;

var marker;
var mapDiv;
var map;
var iconBase;

 var initMap = function  () {

  mapDiv = document.getElementById('mapImage1');
  map = new google.maps.Map(mapDiv, {
    center: {lat: 39.97680351395032 , lng: -119.21438132059102},
    zoom: 2
  });
  iconBase = 'http://maps.google.com/mapfiles/kml/paddle/A.png';
};

var mapMarker = function  (data) {
  marker = new google.maps.Marker({
    position: {lat: data.iss_position.latitude, lng: data.iss_position.longitude},
    map: map,
    icon: iconBase
  });

};

// marker.setPosition(new google.maps.LatLng(data.iss_position.latitude,data.iss_position.longitude));





// displayMapInformation parameter (data) is the data from .ajax
// put quotes on the page:
var displayMapInformation = function (data) {
  console.log( data );

    var mapLatitude = data.iss_position.latitude;
    var mapLongitude = data.iss_position.longitude;
    // < > to create a new parargraph
    var $p = $("<p>");
    $p.text( "The latitude is: " + mapLatitude + " and the longitude is " +  mapLongitude );
    console.log( $p );

    $baseMapContent.prepend( $p );

    // function initMap (data.iss_position.latitude, data.iss_position.longitude)

  };

// How to get the information:
var getMapInformation = function () {

    $.ajax({
      url: baseMapURL,
      dataType: "JSONP",
      type: "GET"
    }).done( displayMapInformation, mapMarker );

};

// Make sure the full page is loaded:
$(document).ready(function (){
    getMapInformation();
    mapTimer =  window.setInterval(getMapInformation, 1000);

    $(".map button").on("click", function () {
      window.clearInterval(mapTimer);
    });
});
