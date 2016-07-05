(function($){
  $.fn.rainbowFi = function(text){
    $("#rainbowOutput").empty();
    var arrOfText = text.split("");
      for (var i = 0; i < arrOfText.length; i++) {
        var currentLetter = arrOfText[i];
        var randomColor = "rgb("+(Math.round(Math.random()*255))+','+(Math.round(Math.random()*255))+','+(Math.round(Math.random()*255))+")";
        var $span = $("<span>");
        $span.text(currentLetter).css({
          color: randomColor
        });
        $("#rainbowOutput").append($span);
      }
    };
}(jQuery));
