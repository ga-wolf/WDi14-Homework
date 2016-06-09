$(document).ready(function() {
    var $lucky = $('#lucky');
    var $luckButton = $lucky.find("button");


    $luckButton.on("click", function() {
        $lucky.find("p").load("/lotto_numbers");
    });

    $("#uptime button").on("click", function() {
        // $("#uptime p").empty();
        $.ajax({
            url: "/uptime",
            type: "GET",
            dataType: "TEXT"
        }).done(function(data) {
            // debugger;
            $('#uptime p').prepend("<br />" + data);
        });
    });

    $("#dashboard button").on("click", function() {
        $("#dashboard p").empty();
        $.ajax({
            url: "/info",
            type: "GET",
            dataType: "JSON"
        }).done(function(data) {
            // debugger;
            $('.time').append("The current time: <br />" + data.time.slice(0, -5));
            $('.luckyNumber').prepend("My lucky number: <br />" + data.lucky_number);
            $('.fortune').prepend("My fortune: <br />" + data.fortune);

        });
    });
});
