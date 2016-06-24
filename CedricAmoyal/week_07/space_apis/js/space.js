console.log( jQuery );

// What is the URL we care about:
var baseSpaceURL = "http://api.open-notify.org/astros"

// .ron full div:
var $baseSpaceElement = $(".space");
// only content div in space div:
var $baseSpaceContent = $(".space .content");
// var spaceTimer = null;

// displaySpaceInformation parameter (data) is the data from .ajax
// put quotes on the page:
var displaySpaceInformation = function (data) {
  console.log( data );

    var numberOfPeople = data.number;
    var $h5 = $("<h5>");
    $h5.text( "There are currently " + numberOfPeople + " people in space !!" );
    console.log( $h5 );

    $baseSpaceContent.prepend( $h5 );


  for (var i = 0; i < data.people.length; i++){
    var people = data.people[i].name;
    var craft = data.people[i].craft;
    // < > to create a new parargraph
    var $p = $("<p>");
    $p.text( people + " is with " +  craft );
    console.log( $p );

    $baseSpaceContent.prepend( $p );
  };

};

// How to get the information:
var getSpaceInformation = function () {

    $.ajax({
      url: baseSpaceURL,
      dataType: "JSONP",
      type: "GET"
    }).done( displaySpaceInformation );
};

// Make sure the full page is loaded:
$(document).ready(function (){
    getSpaceInformation();
    // spaceTimer =  window.setInterval(getSpaceInformation, 1000);

    // $(".space button").on("click", function () {
    //   window.clearInterval(spaceTimer);
    // });
});
