// // What is the URL that we care about
// var baseLatLongURL = "http://api.open-notify.org/iss-now.json";
// var $baseLatLongContent = $(".latlong .content");
//
// var displayLatLongInformation = function ( data ) {
//   // What to do with the data
//   var $latitude = $(".latlong .latitude");
//   var $longitude = $(".latlong .longitude")
//   $latitude.text( "Latitude: " + data.iss_position.latitude );
//   $longitude.text( "Longitude: " + data.iss_position.longitude );
//   // $baseLatLongContent.append( $latitude + $longitude );
//
// };
//
// var getLatLongInformation = function () {
//   // AJAX request goes here
//   $.ajax({
//     url: baseLatLongURL,
//     // What data type am I asking for?
//       // JSON
//     dataType: "JSONP",
//     // Which method will I be using?
//       // GET
//     type: "GET"
//   }).done(displayLatLongInformation);
// };
//
// $(document).ready( function () {
//   var latlongTimer = setInterval( getLatLongInformation, 500 );
//   // latlongTimer();
//   getLatLongInformation();
// });
