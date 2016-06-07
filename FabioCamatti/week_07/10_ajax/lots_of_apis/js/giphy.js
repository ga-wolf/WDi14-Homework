var baseGif = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC";

var $baseGifElement = $(".giphy");
var $baseGifContent = $(".giphy .content");
var gifTimer = null;

var displayGifInformation = function(data) {
    debugger;
    var $img = $('<img />', {
        src: data.data.image_original_url
    });
    debugger;
    // $p.text( quoteGif );
    //prepend($('<img>',{id:'theImg',src:'theImg.png'}))
    $baseGifContent.prepend($img, {
        class: "giphy",
        src: ''
    });

};

var getGifInformation = function() {

    $.ajax({
        url: baseGif,
        dataType: "JSON",
        type: "GET"
    }).done(displayGifInformation);

};


$(document).ready(function() {
    getGifInformation();
    gifTimer = window.setInterval(getGifInformation, 1000);

    $(".giphy button").on("click", function() {
        window.clearInterval(gifTimer);
    });
});
