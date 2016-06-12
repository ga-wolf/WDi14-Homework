var ISSLocationBaseURL = "http://api.open-notify.org/iss-now";
var $baseISSLocationContent = $(".issLocation .content");

var getIssLocationInformation = function()  {
  $.ajax({
    url: ISSLocationBaseURL,
    dataType: "jsonp",
    type: "GET"
  }).done(displayISSLocationInformation);
};

var displayISSLocationInformation = function(data)  {
  var latitude = data.iss_position.latitude;
  var longitude = data.iss_position.longitude;


  var $p1 = $("<p>").text(latitude);
  var $p2 = $("<p>").text(longitude);
  $baseISSLocationContent.prepend($p1, $p2 )



};


getIssLocationInformation();
