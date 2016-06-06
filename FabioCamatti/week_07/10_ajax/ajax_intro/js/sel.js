$(document).ready(function() {

    $.ajax({
        type: 'GET',
        url: 'http://api.fixer.io/latest',
        dataType: 'json',
        success: function(data) {
            fx.rates = data.rates
            var rates = Object.keys(fx.rates)
            for (var i = 0; i < rates.length; i++) {
                var opt = new Option(Object.keys(fx.rates)[i]);
                $("#brand").append(opt);

            }
        },
        error: function(data) {
            console.log("Error.", data);
        }

    });

    $.ajax({
        type: 'GET',
        url: 'http://api.fixer.io/latest',
        dataType: 'json',
        success: function(data) {
            fx.rates = data.rates
            var rates = Object.keys(fx.rates)
            for (var i = 0; i < rates.length; i++) {
                var opt = new Option(Object.keys(fx.rates)[i]);
                $("#2brand").append(opt);

            }
        },
        error: function(data) {
            console.log("Error.", data);
        }

    });


    var displayCurrency = function () {
      console.log("Test")
      var money = function(data) {
        fx.rates = data.rates;

        // Get the current value of the first dropdown .val();
        var firstCurrency = $("#branch").eq(0).val();
        // Get the current value of the second dropdown .val();
        var secondCurrency = $("#2branch").eq(1).val();

        var rate = fx(1).from(firstCurrency).to(secondCurrency);
        // $("#money").text( Object.keys(fx.rates)[29] + " = $ " + rate.toFixed(3) + " " + Object.keys(fx.rates)[0])
        // $( "#result" ).append('<input id="result" type="text" disabled>' );
        $("#result").text( "$ " + rate.toFixed(3) )

      }

      $.getJSON("https://api.fixer.io/latest", money)
    }

    displayCurrency();
    $("select").on("change", displayCurrency);

});
