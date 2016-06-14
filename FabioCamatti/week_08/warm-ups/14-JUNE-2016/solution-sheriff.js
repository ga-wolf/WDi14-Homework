 var Grains = {

  range: _.range(0, 64),

  square: function(i) {
    return Math.pow(2, i);
  },

  total: function() {
    return _.reduce(Grains.range, function(sum, num) {
      return sum + Math.pow(2, num);
    }, 0);
  },

  all: function() {
    _.each(Grains.range, function(i) {
      var num = Math.pow(2, i);
      $span = $("<span>");
      $span.text(num);
      $(".board").append($span);
    })
  }
}

$(document).ready(function() {
  Grains.all();
  $("#btn-square").click(function() {
    var i = $("#input-square").val();
    $("#square-value").text(Grains.square(i));
  });
  $("#btn-total").click(function() {
    var total = Grains.total();
    $("#total").text(total);
  })
})
