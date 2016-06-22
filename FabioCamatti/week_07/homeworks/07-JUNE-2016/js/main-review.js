var searchOMDB = function(e) {
        e.preventDefault();
        var searchTitle = $("#search").val();
        if ( searchTitle === "") {
          return false;
        }
        console.log("Valid search title: " + searchTitle );

        var $poster = $("#poster");
        var $title = $("#title");
        var $plot = $("#plot");

        var baseURL = "http://omdbapi.com?t=";

        var displayMovie = function ( data ) {
              var poster = data.Poster;
              var plot = data.Plot;
              var title = data.Title;

              $poster.attr("src", poster);
              $title.text( title );
              $plot.text( plot );


              $('body').css({
                "background-image": "url(" + poster + ")"
              });

              // debugger;
        };

        $.ajax({
          url: baseURL + searchTitle,
          dataType: "JSON",
          type: "GET"
        }).done( displayMovie );

        // Stop the page refreshing
        // Make an AJAX request
        // http://omdbapi.com?t=Satantango
        // GET
        // Change some elements on the page
    }
    // Make an AJAX request
    // http://omdbapi.com?t=Satantango
    // GET request
    // Change some elements on the page
    // var request = new XMLHttpRequest();


$(document).ready(function() {
    $("form").on("submit", searchOMDB);
});
