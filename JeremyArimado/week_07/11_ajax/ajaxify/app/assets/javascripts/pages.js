$(document).ready(function() {

    var $lucky = $("#lucky");
    var $luckyButton = $lucky.find("button");

    var $uptime = $("#uptime");
    var $uptimeButton = $uptime.find("button");

    var $dashboard = $("#dashboard");
    var $dashboardButton = $dashboard.find("button");

    var $dashboardTime = $dashboard.find(".time");
    var $dashboardNum = $dashboard.find(".number");
    var $dashboardFortune = $dashboard.find(".fortune");


    var ajaxTxtConfig = { url: "/uptime", type: "GET", dataType: "TEXT" }
    var ajaxJSONConfig = { url: "/info", type: "GET", dataType: "JSON" }

    $luckyButton.on("click", function() {
        $lucky.find("p").load("/lotto_numbers");


    });
    
    $uptimeButton.on("click", function() {
        $.ajax(ajaxTxtConfig).done(function(data){
            $uptime.find("p").prepend(data);
            $uptime.find("p").prepend("<br />");
        });
    });

    $dashboardButton.on("click", function() {
        console.log('click')
        $.ajax(ajaxJSONConfig).done(function(data){
            $dashboardTime.text(data.time)
            $dashboardNum.text(data.lucky_number)
            $dashboardFortune.text(data.fortune)
        });
    });
});
