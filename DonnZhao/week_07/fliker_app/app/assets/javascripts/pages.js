




// everytime a successful request happend update the current page
// 1.button to show the next page, stops whens there is no more photos
// 2.infinite scroll $(window).height()  $(document).height()  $(window).scrollTop();
// 3.additional seearch,
// 4.lightbox pop up
// 5.superfancy



var generateURL = function ( photo ) {
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
  console.log(url)
};

var displayPhoto = function(url){
  var $img = $("<img>");
  $img.attr("src", url);
  $img.hide().fadeIn(2000)

  $("#content").append($img);
  $img.on("click", function() {
    var new_url = url.substr(0,(url.length-5)) + 'h.jpg'
    $("#lightbox, #ligthbox_content ").css({"display":"inline-block"});
    $("#ligthbox_content").css('background-image', "url("+new_url+")");

    $("#ligthbox_content").dblclick(function(){
      $(this).css({"display":"none"});
      $("#lightbox").css({"display":"none"});
      // $img_lightbox.remove();
    })

});
}

// var generateURL = function (photo) {
//   var farmID = photo.farm;
//   var serverID = photo.server;
//   var id = photo.id;
//   var secret = photo.secret;
//
//   var url = "https://farm";
//   url += farmID;
//   url += ".staticflickr.com/";
//   url += serverID;
//   url += "/"+id + "_" + secret;
//   url += "_q.jpg";
//   return url;
//   console.log (url)
//
// };

// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)

var handleFlickrResponse = function (data) {
  console.log(data)
    var photos = data.photos.photo;
   total_pages = data.photos.pages;

    for (var i=0; i<photos.length; i++) {
      var currentPhoto = photos[i];
      // console.log(currentPhoto.title)
      var url = generateURL(currentPhoto);
      console.log(url)
      displayPhoto(url)
    }

    if (p+1 == total_pages || p> total_pages) {
      $('#next_page').css( {"display":"none", "color":"red"})
      $('#next_page').prop("disabled",true);
      p =0;
    } else if (p+1 !== total_pages ) {

      $('#next_page').css( {"display":"inline-block", "color":"green"})
      $('#next_page').prop("disabled",false);

    }
};

var p=0;
var total_pages;
var searchTerm;

// when working with apis
// find the base url;
//  look for things like: REST, BASE URL, Endpoint,
//  figure out specific URLs
//  figure out the required parameters
//  decide whether you need to pass in optional paramaters


    var searchFlickr = function ( searchTerm ) {
  var baseFlickrURL = "https://api.flickr.com/services/rest/?jsoncallback=?";

  $.ajax({
    url: baseFlickrURL,
    type: "GET",
    dataType: "JSON",
    data: {
      method: "flickr.photos.search",
      api_key: "2f5ac274ecfac5a455f38745704ad084",
      text: searchTerm,
      format: "json",
      page:1+p
    }
  }).done( handleFlickrResponse );
};





$(document).ready(function(){
  $("form").on("submit", function(event){
    event.preventDefault();
    if ($("form input").val() !== searchTerm) {
      $("#content img").remove()

      p =0;
    }
    searchTerm = $("form input").val()
    searchFlickr(searchTerm)
  });
  $('#next_page').on("click", function(){
     p += 1;
    //  var searchTerm = $("form input").val()
     searchFlickr(searchTerm)

  });
});
var debounce = _.debounce(function (){
  var windowHeight = $(window).height();
  var windwoScrollTop = $(window).scrollTop();
  var docHeight = $(document).height();
  if ((windowHeight+windwoScrollTop)>(docHeight-10)){
    $('#next_page').trigger( "click" );
  }
}, 2000)
$(window).bind("scroll", debounce)


// .animation({scrollTop:0}, 5000)
