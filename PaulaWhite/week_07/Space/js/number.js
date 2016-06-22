var baseNumberURL = "http://api.open-notify.org/astros";
var $baseNumberContent = $(".number .content");


var displayNumberInformation = function (data){
var number = data.number;
// var $p = $("<p>");
$p.integer( number )
$baseNumberContent.prepend( $p );
  };





var getNumberInformation = function (){
  $.ajax({
    url: baseSpaceURL,
    dataType: "JSONP",
    type: "GET"
  }).done( displayNumberInformation );
};

$(document).ready(function (){
  getNumberInformation();
});
