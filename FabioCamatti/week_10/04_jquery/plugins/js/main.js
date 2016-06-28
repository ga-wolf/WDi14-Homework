$.fn.makeGainsboro = function () {
  this.css({
    color: "rebeccapurple"
  });
  this.each(function (i,el) {
    var text = (i + 1) + " Gainsboro";
    $(el).text(text);
    // console.log("I: ",i);
    // console.log("El: ",el);
  });
};

// IIFE - Immediately Invoked Function Expression
(function ($) {
$.fn.makeRainbowText = function () {
  console.log("Make rainbow text");
  // This allows chaining ("h1").text().css();
  return this;
};
}(jQuery));

$(document).ready(function () {
  $("li").makeGainsboro();
  $("h1").makeRainbowText().addClass("rainbow").css({ background: "hotpink" });
});
