var baseSpaceURL = "http://api.open-notify.org/astros";
var $baseSpaceContent = $(".space .content");


var displaySpaceInformation = function (data){
// var name = data.data.number;
  for (var i =0; i < data.people.length; i ++ ) {
var $p = $("<p>");
$p.text(data.people[i].name)
$baseSpaceContent.prepend( $p );
  };
};




var getSpaceInformation = function (){
  $.ajax({
    url: baseSpaceURL,
    dataType: "JSONP",
    type: "GET"
  }).done( displaySpaceInformation );
};

$(document).ready(function (){
  getSpaceInformation();
});
