var baseFlickrURL = "https://api.flickr.com/services/rest/?jsoncallback=?"
var methodFlickrSearch = "flickr.photos.search"
var currentPage = 0;
var fetchTimeout = false;


var handleFlickrResponse = function (data) {
    console.log(data);
    var photos = data.photos.photo;
    photos.forEach(function(currentPhoto){
        displayPhoto(generateURL(currentPhoto));
    });
}

var searchFlickr = function (searchTerm) {
    console.log('requesting')
    currentPage += 1;
    var data = {
        method: methodFlickrSearch,
        api_key: "2ebcc646d929b76ef404d044686d5124",
        text: searchTerm,
        format: "json",
        page: currentPage
    }

    var ajaxConfig = {
        url: baseFlickrURL,
        type: "GET",
        dataType: "JSON",
        data: data
    }

    $.ajax(ajaxConfig).done(handleFlickrResponse)
}

var displayPhoto = function (url) {
    var $img = $("<img>");
    $img.attr("src", url);
    $("#content").append($img);
}

var generateURL = function (photo) {
     var farmID = photo.farm;
     var server = photo.server;
     var id = photo.id;
     var secret = photo.secret;

     // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
     var url = "https://farm";
     url += farmID;
     url += ".staticflickr.com/";
     url += server;
     url += "/";
     url += id;
     url += "_";
     url += secret;
     url += "_q.jpg";

     return url;
}


var debounce = function() {
    fetchTimeout = true;
    $('body').css('background', 'grey')
    setTimeout(function(){
        fetchTimeout = false;
        $('body').css('background', 'white')
    }, 5000);
}

$(document).ready(function() {

    $("form").on("submit", function (e) {
        e.preventDefault();
        $("#content").text('');
        var searchTerm = $("form input").val();
        searchFlickr(searchTerm);
    });

    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
           if (fetchTimeout) return;
           var searchTerm = $("form input").val();
           searchFlickr(searchTerm);
           debounce();
       }
    });

})
