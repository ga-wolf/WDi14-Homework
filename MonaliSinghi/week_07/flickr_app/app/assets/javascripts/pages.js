 var pageNum = 1;
 var searchTerm;
 var loadMore = false;
 var endOfResults = false;

 var generateURL = function(photo) {
     var farmId = photo.farm;
     var server = photo.server;
     var id = photo.id;
     var secret = photo.secret;

     var url = "https://farm";
     url += farmId;
     url += ".staticflickr.com/";
     url += server;
     url += "/";
     url += id;
     url += "_";
     url += secret;
     url += "_q.jpg";
     return url;
 };

 var displayPhoto = function(url) {
     var $img = $("<img>");
     $img.attr("src", url);
     $("#content").append($img);
 };

 var handleFlickrResponce = function(data) {
   console.log(data);
     var photos = data.photos.photo;
     for (var i = 0; i < photos.length; i++) {

         var currentPhoto = photos[i];
         var url = generateURL(currentPhoto);
         displayPhoto(url);
         if (data.photos.pages === pageNum) {
             endOfResults = true;
         }
     } //pagenum++
 };


 var searchFlickr = function(searchTerm) {
     var baseFlickrURL = "https://api.flickr.com/services/rest/?nojsoncallback=1";

     $.ajax({
         url: baseFlickrURL,
         type: "GET",
         dataType: "JSON",
         data: {
             method: "flickr.photos.search",
             api_key: "2f5ac274ecfac5a455f38745704ad084",
             text: searchTerm,
             format: "json",
             per_page: 100,
             page: pageNum++
         }
     }).done(function(data) {
      //  debugger
        handleFlickrResponce(data);
         setTimeout(function() {
             loadMore = true;
         }, 1000);
     });
     //handleFlickrResponce(data);
 };

 $(document).ready(function() {
             $("form").on("submit", function(event) {
                 event.preventDefault();
                 pageNum = 1;
                 $("#content").html("");// clear the screen
                 endOfResults = false;

                 searchTerm = $("form input").val();
                 searchFlickr(searchTerm);
                 console.log("The form was submitted");
                //  handleFlickrResponce(fData);
             });
           });
             //};
             $(window).on('scroll', function() {
                 if (($(window).height() + $(window).scrollTop()) >= (0.5 * $(document).height())) {
                     if (loadMore && !endOfResults) {
                         searchTerm = $("form input").val();
                         searchFlickr(searchTerm);
                         loadMore = false;
                     }
                 }
                 // $("#load-more").on("click",searchFlickr);
                 // searchFlickr(searchTerm);

             });
             // $(document).on("scroll",function(){
             //
             // })
