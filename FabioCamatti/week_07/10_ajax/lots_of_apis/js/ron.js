// http://ron-swanson-quotes.herokuapp.com/v2/quotes
var baseRonURL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
var $baseRonElement = $(".ron");
var $baseRonContent = $(".ron .content");
var ronTimer = null;

var displayRonInformation = function (data) {
  var quote = data[0];
  var $p = $("<p>");
  $p.text( quote );

  $baseRonContent.prepend( $p );
};

var getRonInformation = function () {

  // AJAX request goes here
  $.ajax({
      url: baseRonURL,
      dataType: "JSON",
      type: "GET"
  }).done( displayRonInformation );

};


$(document).ready(function() {
  getRonInformation();
  ronTimer = window.setInterval( getRonInformation, 1000 );

  $(".ron button").on("click", function () {
    window.clearInterval( ronTimer );
  });
});
