$(document).ready(function () {
  var firstPath = document.querySelector('#svg_1');
  var secondPath = document.querySelector('#svg_5');

  var firstPathLength = firstPath.getTotalLength();
  var secondPathLength = secondPath.getTotalLength();

  $("#svg_1").css({
    "stroke-dasharray": firstPathLength,
    "stroke-dashoffset": firstPathLength
  });

  $("#svg_5").css({
    "stroke-dasharray": secondPathLength,
    "stroke-dashoffset": secondPathLength
  });

  $("path").css("opacity", "1");

  // $("path").addClass("complete");

  $("path").animate({
    "stroke-dashoffset": "0"
  },3000);

  // $("#svg_1").animate({
  //   "stroke-dashoffset": "0"
  // },3000, function () {
  //   $("#svg_5").animate({
  //     "stroke-dashoffset": "0"
  //   },3000);
  // });

});
