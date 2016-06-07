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
        // debugger;
        var table = $('<table></table>').addClass('table-astronaut');
        var caption = $('<caption></caption>').addClass('caption').text("Number of Astronauts in the Space: " + number);
        var thead = $('<thead></thead>').addClass('thead');
        var thFirst = $('<th></th>').addClass('th').text('Name: ');
        var thSecond = $('<th></th>').addClass('th').text('Craft: ');

        table.append(caption);
        table.append(thead);
        table.append(thFirst);
        table.append(thSecond);

        for (i = 0; i < data['people'].length; i++) {
            var row = $('<tr></tr>').addClass('linha');
            var name = $('<td></td>').addClass('name').text(data['people'][i]['name']);
            var craft = $('<td></td>').addClass('craft').text(data['people'][i]['craft']);
            row.append(name);
            row.append(craft);
            table.append(row);
        }

        $('.people').append(table);

        // $('<p>').attr('id', 'astronames').appendTo('.people');
        // $('.people p').text("Number of Astronauts in the Space: " + number);
        //
        // data['people'].forEach(function(d) {
        //     // debugger;
        //     $('#astronames').append('<li>' + "Astronaut: " + d['name'] + " Craft: " + d['craft'] + '</li>');
        //     // $('#astronames').append('<li>' + "Craft: " + d['craft'] + '</li>');
        // });
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
        if (!$('.longi table').length) {
            $('<table>').appendTo('.longi');
            $('<tr>').attr('id', 'lats').appendTo('.longi table');
            $('<tr>').attr('id', 'lons').appendTo('.longi table');
        };
        
        $('#lats').text( "Lat: " + lat.toFixed(3) + "\xB0" );
        $('#lons').text( "Long: " + lon.toFixed(3) + "\xB0" );

    });
    setTimeout(moveISS, 5000);
};

$(document).ready(function() {
    people();
    moveISS();
});
