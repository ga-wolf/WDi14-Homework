var ISSPeopleBaseURL = "http://api.open-notify.org/astros";
var $baseISSContent = $(".people .content" );

var getISSPeopleInformation = function()  {
  $.ajax({
    url: ISSPeopleBaseURL,
    dataType: "jsonp",
    type: "GET"
  }).done(displayISSPeopleInformation);
};

var displayISSPeopleInformation = function(data)  {
  for(i = 0; i < data.people.length; i++ )  {
    name = data.people[i].name;
    var $p = $("<p>").text(name);
    $baseISSContent.prepend($p);
  };

};

$(document).ready(function()  {
  getISSPeopleInformation();

});
