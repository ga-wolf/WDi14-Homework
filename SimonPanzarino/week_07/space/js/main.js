var issIcon = L.icon({
    iconUrl: '../images/iss.png',

    iconSize:     [70, 46], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [35, 23], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var lat, long;
var mymap = L.map('mapid', {scrollWheelZoom: false}).setView([0, 0], 3);
var spaceStation = L.marker([0, 0], {icon: issIcon}).addTo(mymap);

(function moveISS() {
    setTimeout(function() {
        $.ajax({
            url: "http://api.open-notify.org/iss-now.json?callback=?",
            type: "GET",
            dataType: "json"
        }).done(function(data) {
          moveISS();
          updateISS(data);
        })
    }, 1000);
})();

(function peopleInSpace() {
        $.ajax({
            url: "http://api.open-notify.org/astros.json?callback=?",
            type: "GET",
            dataType: "json"
        }).done(function(data) {
          updatePeople(data);
        })
})();

var updateISS = function(data) {
  lat = data.iss_position.latitude;
  lon = data.iss_position.longitude;

  mymap.setView([lat, lon]);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
    maxZoom: 18,
    id: 'mapbox.streets'
  }).addTo(mymap);
  spaceStation.setLatLng([lat, lon])
}

var updatePeople = function(data) {

  var $body = $('tbody');

  $body.empty();

  for (var i = 0; i < data.people.length; i++) {
    var randNum = Math.floor((Math.random() * 6) + 1);
    var skill = "";
    switch (randNum) {
      case 0:
        skill = "Nunchuck Skills"
        break;
      case 1:
        skill = "Ninja Skills"
        break;
      case 2:
        skill = "Can lift"
        break;
      case 3:
        skill = "Computer Hacking Skills"
        break;
      case 4:
        skill = "Extremely Good Looking"
        break;
      case 5:
        skill = "Smells Amazing"
        break;
      default:
        skill = "None"
    }
    $body.append("<tr><td class='right-align'>" + (i + 1) + "</td><td>" + data.people[i].name + "</td><td>" + data.people[i].craft + "</td><td>" + skill + "</td></tr>")
  }
}
