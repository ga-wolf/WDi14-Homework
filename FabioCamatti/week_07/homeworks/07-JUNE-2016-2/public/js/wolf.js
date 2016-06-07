var WolframURL = "http://api.wolframalpha.com/v2/query?input=pi&appid=R75TQY-45HLK2EVYL";
// debugger;
var $baseGifElement = $("#map");
var $baseGifContent = $(".giphy .content");
var gifTimer = null;

var displayGifInformation = function(data) {
    var $img = $('<img />', {
        src: data.data.image_original_url
    });
    // debugger;
    // $p.text( quoteGif );
    //prepend($('<img>',{id:'theImg',src:'theImg.png'}))
    $baseGifContent.prepend( $img );

    // var imageURL = data
    // var $img = $('<img>').attr( "src", imgURL);

};

var getGifInformation = function() {

  debugger;

    $.ajax({
        url: WolframURL,
        dataType: "xml",
        type: "GET",
        async: false
    }).done(displayGifInformation);

};


$(document).ready(function() {
    getGifInformation();
});
