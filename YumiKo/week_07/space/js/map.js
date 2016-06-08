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
  initMap(latitude, longitude)
}

var displayMapInformation = function (latitude, longitude) {
  var $p = $("<p>").text(latitude + ", " + longitude)
  $(".coordinates").html($p)
  // debugger;
}

var initMap = function (latitude, longitude) {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: latitude, lng: longitude},
    zoom: 2
  });
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var myIcon = iconBase + 'airports.png'
    var marker = new google.maps.Marker({
      position: {lat: latitude, lng: longitude},
      icon: myIcon.icon,
      map: map
    });
  }

$(document).ready( function () {
  getMapInformation();
  var mapTimer = window.setInterval(getMapInformation, 1000);


  $(".coordinates button").on("click", function () {
    window.clearInterval(mapTimer)
  })
})
