var map, marker, last_latlng;
            function init() {
                var latlng = new google.maps.LatLng(51.48931, -0.08819);
                var mapOptions = { center: latlng, zoom: 3, mapTypeId: google.maps.MapTypeId.SATELLITE, disableDefaultUI: true};
                map = new google.maps.Map(document.getElementById("map"), mapOptions);
                marker = new google.maps.Marker({ position: latlng, map: map, title: "Updating...", icon: 'satellite_48_dis.png' });
            }
            google.maps.event.addDomListener(window, 'load', init);
            function draw_flight_path(latlng) {
                if(last_latlng === undefined) {
                    last_latlng = latlng;
                }
                flight_path = new google.maps.Polyline({
                    path: [last_latlng, latlng],
                    strokeColor: "#000000",
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });
                last_latlng = latlng;
                flight_path.setMap(map);
            }
            function getLatestPosition() {
                $.getJSON('http://open-notify-api.herokuapp.com/iss-now.json?callback=?', function(data, status) {
                    position = data.iss_position;
                    var latlng = new google.maps.LatLng(position.latitude, position.longitude);
                    map.setCenter(latlng);
                    marker.setPosition(latlng);
                    draw_flight_path(latlng);
                });
            }
            setInterval(getLatestPosition, 1000);
