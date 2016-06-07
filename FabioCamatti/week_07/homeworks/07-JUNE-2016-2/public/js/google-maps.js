var map, marker, last_latlng;

var init = function() {
    var latlng = new google.maps.LatLng(51.48931, -0.08819);
    var mapOptions = {
        center: latlng,
        zoom: 3,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        disableDefaultUI: false
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: "Updating...",
        icon: '../images/saticon.gif'
    });
    map.setTilt(45);
    // var heading = map.getHeading() || 0;
    // map.setHeading(heading + 90);
}

google.maps.event.addDomListener(window, 'load', init);

var draw_flight_path = function(latlng) {
    if (last_latlng == undefined) {
        last_latlng = latlng;
    }
    flight_path = new google.maps.Polyline({
        path: [last_latlng, latlng],
        strokeColor: "#f00",
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    last_latlng = latlng;
    flight_path.setMap(map);
};

var get_latest_position = function() {
    // $.getJSON('http://api.open-notify.org/iss-now.json?callback=CALLBACK', function(data, status) {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
        position = data.iss_position;
        var latlng = new google.maps.LatLng(position.latitude, position.longitude);
        // debugger;
        // map.setCenter(marker.getPosition());
        map.setCenter(latlng);
        marker.setPosition(latlng);
        draw_flight_path(latlng);
    });
};
$(document).ready(function() {
    // get_latest_position();
    setInterval(get_latest_position, 5000);
});
