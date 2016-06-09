var searchTerm;
var page_number = 1;

//Search Flickr Function

//Generate URL

var generateURL = function(photo) {
    // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
    var farmID = photo.farm;
    var server = photo.server;
    var id = photo.id;
    var secret = photo.secret;

    var url = 'https://farm';
    url += farmID;
    url += ".staticflickr.com/"
    url += server;
    url += "/";
    url += id;
    url += "_";
    url += secret;
    url += "_q.jpg";

    return url;
};

//Display photos from the JSON request from Flickr API

var displayPhoto = function(url) {
    var $img = $("<img>").addClass("circle");
    $img.attr("src", url);
    $(".carousel").
    var $a = $("<a>").addClass("carousel-item").attr("href", url);
    $(".carousel").append($a);
    // debugger;
    $("a.carousel-item").append($img);
};

var handleFlickrResponse = function(data) {

    page_number++

    var photos = data.photos.photo;
    for (var i = 0; i < photos.length; i++) {
        var currentPhoto = photos[i];
        var url = generateURL(currentPhoto);
        displayPhoto(url);
    };
};


var searchFlickr = function(searchTerm) {



    console.log(page_number);
    // http://stackoverflow.com/questions/24671709/how-to-get-correct-json-object-from-flickr-api

    var baseFlickrURL = "https://api.flickr.com/services/rest/?nojsoncallback=?";
    // ;
    $.ajax({
        url: baseFlickrURL,
        type: "GET",
        data: {
            method: "flickr.photos.search",
            api_key: "c5359009a8b692eec82466c241268871",
            text: searchTerm,
            format: "json",
            per_page: 20,
            page: page_number
        }
    }).done(handleFlickrResponse);

};

$(document).ready(function() {
    // searchFlickr("cat");


    $("form").on("submit", function(e) {
        page_number = 1;
        e.preventDefault();
        $('.carousel').empty();
        searchTerm = $("form input").val();
        searchFlickr(searchTerm);
    });

    var throttled = _.throttle(function() {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            // (!searchTerm) ? "cat" : searchTerm = $("form input").val();;
            searchFlickr(searchTerm);
        };
    }, 2000);

    // Infinite scrolling function
    $(window).scroll(throttled);

    // MaterializeCSS Initialization
    $('.carousel').carousel();

});




//Keep track at the current page
// $(window).height() tells the visible window height
// $(docment).height() tells the document height (web page)
// $(window).scrollTop() tells if it's closer to the top or to the bottom of the window


//Everytime a successfully request happens, update the current page number
// throttling
// deboucing
//underscorejs

//Scrolling effect like the MaterializeCSS paralallax
//Additional searches
//Lightbox
//Handler Errors
//Fancy effects
