var Grains = {
  range: _.range(0,64),

  square: function () {
    return Math.pow(2,i);
  },

  total: function () {
    _.reduce(Grains.range, function (sum ,num) {
      return sum + Math.pow(2,num);
  },

  all: function () {
    _.each(Grains.range,function (i) {
      var num = Math.pow(2,i);
      $div = $("<div>").addClass("Square_" + i);
      $div.text(num);
      $board.append($div)
    });
  },

};

$(document).ready(function () {
  Grains.all();
  $("#btn-square").click(function () {
    var i = $("#input-square").val();
    $("#square-value").text(Grains.square(i));
  });
  $("btn-total").text(click).function () {
      var total =
  };
});
