// <div class="col chuck">
//     <h2>Chuck Norris</h2>
//     <div class="content"></div>
// </div>

// http://www.icndb.com/api/
//
// Save the variables that reference all
//
// Figure out the URL
// Figure out how to display the information
// Figure out how to get the information

var baseChuck = "https://api.chucknorris.io/jokes/random";

var $baseChuckElement = $(".chuck");
var $baseChuckContent = $(".chuck .content");
var chuckTimer = null;

var displayChuckInformation = function (data) {
  var quoteChuck = data.value;
  var $p = $("<p>");
  $p.text( quoteChuck );

  $baseChuckContent.prepend( $p );

};

var getChuckInformation = function () {

  $.ajax({
    url: baseChuck,
    dataType: "JSON",
    type: "GET"
  }).done ( displayChuckInformation );

};


$(document).ready(function() {
  getChuckInformation();
  chuckTimer = window.setInterval( getChuckInformation, 1000 );

  $(".chuck button").on("click", function () {
    window.clearInterval( chuckTimer );
  });
});
