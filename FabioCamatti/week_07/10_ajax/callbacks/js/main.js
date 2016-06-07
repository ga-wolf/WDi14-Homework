// // CALLBACKS REALLY IMPORTANT !!!
//
//
// var doFirst = function () {
//   window.setTimeout(function () {
//     console.log("This should happen first");
//
//   }, 100 );
// };
//
// var doFirstAndSecond = function ( cb ) {
//   window.setTimeout(function () {
//     console.log("This should happen first");
//     cb();
//   }, 100 );
// };
//
// var doSecond = function () {
//   console.log("This should happen second");
// }
//
// doFirstAndSecond( doSecond );
// doFirst();
// doSecond();

console.log("1. start of main.js");

$(document).ready(function () {
  console.log("2. document is ready");
})
$('h1').text( "Hotdogs" );

var annoy = function () {
  alert("This is annoying");
};

$('h1').on("click", annoy);

$("p").each(function () {
  console.log("within the each() callback");
  $(this).text(Math.random());
});

console.log("3. end of the main.js");

var totals = [5,6,2,7,42,8];

// for (var i = 0; i < totals.length; i++) {
//   var currentElement = totals[i];
//   console.log( currentElement + "!!!");
// }

var each = function (group, callback) {
  for (var i = 0; i < group.length; i++) {
    var currentElement = group[i];
    callback( currentElement );
  }
};

var print = function ( el ) {
  console.log( el + "!!!" + el * 2);

}

each(totals, print );
  // each( totals, alert );
each( [1, 5, 10], function (el) {
  console.log("The current element is: " + el);
})
