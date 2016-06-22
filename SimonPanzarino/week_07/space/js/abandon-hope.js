var issIcon = L.icon({
    iconUrl: '../images/iss.png',
    shadowUrl: 'leaf-shadow.png',

    iconSize:     [70, 46], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [35, 23], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var lat = 0;
var long = 0;
var mymap = L.map('mapid').setView([0, 0], 3);
var spaceStation = L.marker([0, 0], {icon: issIcon}).addTo(mymap);
function moveISS () {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
        lat = data['iss_position']['latitude'];
        lon = data['iss_position']['longitude'];

        console.log(data);

        mymap.setView([lat, lon]);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
          maxZoom: 18,
          id: 'mapbox.streets'
        }).addTo(mymap);
        spaceStation.setLatLng([lat, lon])

        // See leaflet docs for setting up icons and map layers
        // The update to the map is done here:
    });
    setTimeout(moveISS, 5000);
}

moveISS();
