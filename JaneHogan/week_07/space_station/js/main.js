var baseSpaceURL = "http://api.open-notify.org/astros.json";
var $baseSpaceContent = $(".space");
var $basePeopleContent =$(".people");



var displaySpaceInformation = function (data){
  var number = data.number;
  console.log (number);
  var $p = $("<p>").text(number);
  $baseSpaceContent.prepend( $p );

  var people = data.people;
    for (var i = 0; i <  people.length; i++){
      var names = people[i].name;
      var $p = $("<p>").text(names);
      $basePeopleContent.prepend( $p );
      console.log(names);
    };

  };

// var displayNameInformation = function (data){
//   var people = data.people;
//     for (var i = 0; i <  people.length; i++){
//       var names = people[i].name;
//       console.log(names);
//       }
// //     var $p = $("<p>").text(names);
// //     $baseSpaceContent.prepend( $p );
// //
// //
// }



//   var names_all = function(){
//     var people = data.people;
//     for (var i = 0; i <  people.length; i++){
//       var names = people[i].name;
//       console.log(names);
//       names_all = names;
//       return names_all;
//     }
//     console.log(names_all)
//   }
//   var $p2 = $("<p>").text()
//   $basePeopleContent.prepend( $p2 );
//
// };


var getSpaceInformation = function(){
  $.ajax({
    url:baseSpaceURL,
    dataType: "JSONP",
    type: "GET"
  }).done( displaySpaceInformation) ;
};

$(document).ready (function(){
getSpaceInformation();

});
