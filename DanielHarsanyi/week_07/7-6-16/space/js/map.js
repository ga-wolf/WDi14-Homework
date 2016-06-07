var positionApiURL = 'http://api.open-notify.org/iss-now.json';
var $lat = $(".positionDetails .lat");
var $long = $(".positionDetails .long");
var positionTimer = null;
var currentLatitude;
var currentLongitude;
var marker;
var worldMap;
var issIcon;

var clear = function(){
  $lat.html("Current Latitude: ");
  $long.html("Current Longitude: ");
};

var getLocation = function(data){
  clear();
  currentLatitude = parseFloat(data.iss_position.latitude);
  currentLongitude = parseFloat(data.iss_position.longitude);
  $lat.append(currentLatitude);
  $long.append(currentLongitude);
  if (marker) {
    marker.setLatLng([currentLatitude, currentLongitude ]);
  }
  if (worldMap) {
  worldMap.panTo(new L.LatLng(currentLatitude, currentLongitude));
  }
};

var spaceApiCall = function(){
  $.ajax({
    url: positionApiURL,
    dataType: "JSONP",
    type: "GET",
  }).done( getLocation );
};

  var initMap = function(){
      worldMap = L.map('map').setView([currentLatitude, currentLongitude], 3);
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
          id: 'mapbox.streets'
      }).addTo(worldMap);
      issIcon = L.icon({iconUrl: 'assets/iss.png'});
      marker = L.marker([0, 0], {icon: issIcon}).addTo(worldMap);

      worldMap.scrollWheelZoom.disable();
};

$(document).ready(function(){
    window.setInterval(spaceApiCall, 200);
  });

window.setTimeout(initMap, 2500);
