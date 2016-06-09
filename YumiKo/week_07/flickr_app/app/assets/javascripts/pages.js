// var page = 1;
//
// var generateURL = function (photo) {
//   // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
//   var farmID = photo.farm;
//   var server = photo.server;
//   var id = photo.id;
//   var secret = photo.secret;
//   var url = "https://farm";
//   url += farmID;
//   url += ".staticflickr.com/";
//   url += server;
//   url += "/";
//   url += id;
//   url += "_"
//   url += secret;
//   url += "_q.jpg"
//
//   return url;
//   console.log(photo);
// }
//
// var displayPhoto = function (url) {
//   var $img = $("<img>");
//   $img.attr("src", url);
//   $("#content").append($img);
// }
//
// var handleFlickrResponse = function ( data ) {
//   if (data.photos.pages>1){
//     $(".nextPage").attr("value", "Next Page")
//     $(".nextPage").css("display", "initial")
//   }
//   if (data.photos.page === data.photos.pages) {
//     $(".nextPage").attr("value", "Last Page")
//   }
//   if (data.photos.pages>1) {
//     $(".prevPage").attr("value", "Previous Page")
//     $(".prevPage").css("display", "initial")
//   }
//   if (data.photos.page === 1) {
//     $(".prevPage").attr("value", "First Page")
//   }
//   $("form p").css("display", "initial").html(data.photos.page + "/" + data.photos.pages)
//   var photos=data.photos.photo;
//
//   for ( var i = 0; i < photos.length; i ++ ) {
//     var currentPhoto = photos[i];
//     var url = generateURL( currentPhoto );
//     displayPhoto(url);
//     console.log(url);
//   }
//   console.log( data );
// };
//
//
// var searchFlickr = function ( searchTerm ) {
//   var baseFlickrURL = "https://api.flickr.com/services/rest/?jsoncallback=?";
//   $.ajax({
//     url: baseFlickrURL,
//     type: "GET",
//     dataType: "JSON",
//     data: {
//       method: "flickr.photos.search",
//       api_key: "fa258ae59a24272b40c6d8f2bf83679b",
//       text: searchTerm,
//       format: "json",
//       page: page,
//       per_page: 30
//     }
//   }).done(handleFlickrResponse);
// };
//
//
// $(document).ready(function () {
//   $(".search").on("click", function (event) {
//     event.preventDefault();
//     document.getElementById("content").innerHTML = "";
//     var searchTerm = $("form input").val();
//     searchFlickr( searchTerm );
//
//     console.log( "The form was submitted" );
//   })
//
//   $(".nextPage").on("click", function (event) {
//     event.preventDefault();
//     document.getElementById("content").innerHTML = "";
//     page += 1;
//     var searchTerm = $("form input").val();
//     searchFlickr( searchTerm );
//     return page;
//   })
//
//   $(".prevPage").on("click", function (event) {
//     event.preventDefault();
//     document.getElementById("content").innerHTML = "";
//     page -= 1;
//     var searchTerm = $("form input").val();
//     searchFlickr( searchTerm );
//     return page;
//   })
//
// })
