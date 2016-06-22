var $baseISSPredictContent = $(".issPredict .contentSearch")
var $issPredictContent = $(".issPredict .contentPredict")
var searchLocation = "";
var searchURL = "";

var handlePrediction = function(data) {
  for(i = 0; i < data.response.length; i++) {
    baseTime = data.response[i].risetime;
    var myDate = new Date( baseTime * 1000);
    var $p = $("<p>").text(myDate)
    $issPredictContent.append($p)
  };
};

var locationSearch = function() {
  var baseSearchURL = "https://maps.googleapis.com/maps/api/geocode/json?";
  var apiKey = "AIzaSyDm08cpTGtufyZXXzcduaHj6kF1yiMR0xs";

  $.ajax({
    url: baseSearchURL,
    dataType: "json",
    type: "GET",
    data: {
      address: searchLocation,
      key: apiKey
    }
  }).done(issPredictPass);
};

var issPredictPass = function(data) {
  var latitute = data.results[0].geometry.location.lat;
  var longitute = data.results[0].geometry.location.lng;
  var baseISSURL = "http://api.open-notify.org/iss-pass.json?";
  console.log(latitute, longitute);

  $.ajax({
    url: baseISSURL,
    dataType: "jsonp",
    type: "GET",
    data: {
      lat: latitute,
      lon: longitute
    }
  }).done(handlePrediction);
};

$(document).ready(function(){
  $("form").on("submit", function(e){
      event.preventDefault();
      var inputSearch = $("form input").val();
      searchLocation = inputSearch.replace(/ /g, "+");
      locationSearch();
  });
});
