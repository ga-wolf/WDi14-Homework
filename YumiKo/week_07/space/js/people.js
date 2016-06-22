var basePeopleURL = "http://api.open-notify.org/astros";
var $basePeopleContent = $(".people");
var peopleTimer = null;

var displayPeopleInformation = function (data) {
  // debugger;
  for(var i=0; i < data.people.length; i += 1) {
    var name = data.people[i].name
    var $p = $("<p>").text(name)

    $basePeopleContent.append($p)
  }
};

var getPeopleInformation = function () {
  $.ajax({
    url: basePeopleURL,
    dataType: "JSONP",
    type: "GET"
  }).done(displayPeopleInformation);
};


$(document).ready( function () {
  getPeopleInformation();
  // peopleTimer = window.setInterval(getPeopleInformation, 5000)
  //
  // $(".people button").on("click", function () {
  //   window.clearInterval(peopleTimer)
  // })

})
