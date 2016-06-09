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
    $("#content").append($img);
};

var handleFlickrResponse = function(data) {
  ;
    var photos = data.photos.photo;
    for (var i = 0; i < photos.length; i++) {
        var currentPhoto = photos[i];
        var url = generateURL(currentPhoto);
        displayPhoto(url);
    };
};

// var page_number;

var searchFlickr = function(searchTerm, page_number) {
    // ;

    if (!page_number){
      page_number = 1;
    }else {
      page_number += 1;
    };
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
    var searchTerm;

    $("form").on("submit", function(e) {
        e.preventDefault();
        $('.carousel').empty();
        searchTerm = $("form input").val();
        searchFlickr(searchTerm);
    });
    $(window).scroll(function() {
      // ;
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            // console.log("Fabio");


            (!searchTerm)? "cat" : searchTerm = $("form input").val();;
            searchFlickr(searchTerm);
        };
    });
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
