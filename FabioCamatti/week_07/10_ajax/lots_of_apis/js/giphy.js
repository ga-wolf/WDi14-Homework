var baseGif = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC"
// debugger;
var $baseGifElement = $(".giphy");
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

    var url = baseGif;
    var currentValue = $("input").val();

    if ( currentValue !== "" ) {
      // Add more information - &tag=hotdogs
      url += "&tag=";
      url += currentValue;
    }


    $.ajax({
        url: url,
        dataType: "JSON",
        type: "GET"
    }).done(displayGifInformation);

};


$(document).ready(function() {
    getGifInformation();
    gifTimer = window.setInterval( getGifInformation, 1000 );

    $(".giphy button").on("click", function () {
      window.clearInterval( gifTimer );
    });

    $(".giphy#search").on("click", getGifInformation );
});
