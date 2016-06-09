// // Search Flickr
// // Display Photo
// // Generate URL
//
//
//
// var page = 1;
// var baseFlickrURL = "https://api.flickr.com/services/rest/?jsoncallback=?";
//
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
//
// // Load all the page numbers
// //
// // var addPager = function (data) {
// //   var pagesNum = data.photos.pages;
// //   var href;
// //   for (var i=0; i < pagesNum; i += 1) {
// //     page = i;
// //     var searchTerm = $("form input").val();
// //     href = buildUrl(page,searchTerm)
// //     // debugger;
// //     var $page = $("<a>").text(i).attr("href", href).attr("value", i).attr("class", "page").attr("pagenum", i).attr("type", "submit")
// //     $(".pages").append($page)
// //   }
// // }
//
//
// var addPager = function (data) {
//   var pagesNum = data.photos.pages;
//   for (var i=0; i < pagesNum; i += 1) {
//     page = i;
//     // debugger;
//     var $div = $("<div>").attr("class", "eachPage")
//     var $page = $div.append($("<a>").text( i ).attr("value", i).attr("pagenum", i).attr("type", "submit").attr("href", "#"))
//     $(".page").append($page)
//   }
// }
//
//   //  function buildUrl(url, parameters){
//   //     var queryString = '';
//    //
//   //     for(var key in parameters) {
//   //        if (parameters.hasOwnProperty(key)) {
//   //           queryString += encodeURIComponent(key) + '=' + encodeURIComponent(parameters[key]) + '&';
//   //        }
//   //     }
//    //
//   //     if (queryString.lastIndexOf('&') === queryString.length - 1){
//   //        queryString = queryString.substring(0, queryString.length - 1);
//   //     }
//    //
//   //     return url + '?' + queryString;
//   //  }
//
// var searchPage = function(page, searchTerm) {
//   // var params = {
//   //   method: "flickr.photos.search",
//   //   api_key: "fa258ae59a24272b40c6d8f2bf83679b",
//   //   text: searchTerm,
//   //   format: "json",
//   //   page: page,
//   //   per_page: 10
//   // }
//   // var url = "https://api.flickr.com/services/rest/"
//   // var queryString = '';
//   //
//   // for(var key in params) {
//   //    if (params.hasOwnProperty(key)) {
//   //       queryString += key + '=' + params[key] + '&';
//   //    }
//   // }
//   // // if (queryString.lastIndexOf('&') === queryString.length - 1) {
//   // //    queryString = queryString.substring(0, queryString.length - 1);
//   // // }
//   // // debugger;
//   // return url + '?' + queryString + 'nojsoncallback=1'
//
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
//       per_page: 10
//     }
//   }).done(handleFlickrResponse);
// }
//
// // If you click the number, it will trigger some function that request some specific information.
//
//
//
//
//
// // Show only five pages
//
// // Make a button that show next five pages list
//
//
// var handleFlickrResponse = function ( data ) {
//   var photos=data.photos.photo;
//   for ( var i = 0; i < photos.length; i ++ ) {
//     var currentPhoto = photos[i];
//     var url = generateURL( currentPhoto );
//     displayPhoto(url);
//     console.log(url);
//   }
//   console.log( data );
// };
//
// var changeNav = function (data) {
//   if (data.photos.pages>1){
//     $(".nextPage").css("display", "initial")
//   }
//   if (data.photos.page>=2){
//     $(".prevPage").css("display", "initial")
//   } else {
//     $(".prevPage").css("display", "none")
//   }
//   addPager(data);
// }
//
//
// var searchFlickr = function ( searchTerm ) {
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
//       per_page: 10
//     }
//   }).done(handleFlickrResponse, changeNav);
//   // debugger;
// };
//
//
// $(document).ready(function () {
//   $(".search").on("click", function (event) {
//     event.preventDefault();
//     document.getElementById("content").innerHTML = "";
//     var searchTerm = $("form input").val();
//     searchFlickr( searchTerm );
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
//   $("a").on("click", function (event) {
//     console.log("working????");
//     event.preventDefault();
//     debugger;
//
//     // document.getElementById("content").innerHTML = "";
//     var searchTerm = $("form input").val();
//     page = $(this).attr("pagenum");
//     searchPage(searchTerm)
//     console.log("clicked");
//   })
//
// })
