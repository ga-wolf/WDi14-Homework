// var basePeople = "http://api.open-notify.org/astros.json?callback=CALLBACK";
//
// var displayPeopleInformation =  function () {
//   console.log("FABIO");
// };
//
//
// var getPeopleInformation = function () {
//
//   $.ajax({
//     url: basePeople,
//     dataType: "JSON",
//     type: "GET"
//   }).done( displayPeopleInformation ) ;
// };
//
// $(document).ready(function () {
//   getPeopleInformation();
// });
var people = function() {
    $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
        var number = data['number'];
        $('<p>').attr('id', 'astronames').appendTo('.people');
        $('.people p').text(number);

        data['people'].forEach(function(d) {
            // debugger;
            $('#astronames').append('<li>' + "Astronaut name: " + d['name'] + '</li>');
            $('#astronames').append('<li>' + "Craft: " + d['craft'] + '</li>');
        });
    });
};


var moveISS = function() {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
        var lat = data['iss_position']['latitude'];
        var lon = data['iss_position']['longitude'];

        // See leaflet docs for setting up icons and map layers
        // The update to the map is done here:
        // iss.setLatLng([lat, lon]);
        // isscirc.setLatLng([lat, lon]);
        // map.panTo([lat, lon], animate = true);
        // debugger;
        if ( !$("#lat").length && !$("#lon").length){
          $('<p>').attr('id', 'lats').appendTo('.longi');
          $('<p>').attr('id', 'lons').appendTo('.longi');
        };
        // debugger;
        // lat = lat.toString() + "fabio";
        $('#lats').text("Latitude: " + lat.toFixed(4) + "\xB0");
        $('#lons').text("Longitude: " + lon.toFixed(4) + "\xB0");

    });
    setTimeout(moveISS, 5000);
};

people();
moveISS();
