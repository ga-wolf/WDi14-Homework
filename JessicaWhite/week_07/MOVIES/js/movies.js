$(document).ready(function () {

  var btn = document.getElementById("submit");
  btn.addEventListener("click", function () {
    // console.log( "The button was clicked" );
    // Get the value of the input

    // Are we searching for one result or a list?
    var request = new XMLHttpRequest();
    var movieName = (document.getElementById('movie').value);
    var movieNames = (document.getElementById('movies').value);

    request.onreadystatechange = function () {
      if ( request.readyState !== 4 ) {
        return;
      }
        var dataAsString = request.responseText;
        var dataAsObject = JSON.parse( dataAsString );

        if ( dataAsObject.Title ) {
          $('#content').html("");
          $('#contentSingle h2').text("");
          $('#contentSingle img').attr("src", "");
          var $contentDiv = document.getElementById('title');
          $contentDiv.innerHTML = dataAsObject.Title;
          var $posterURL = document.getElementById('poster');
          // debugger;
          $posterURL.src = dataAsObject.Poster;
        } else {
            $('#content').html("");
            $('#contentSingle h2').text("");
            $('#contentSingle img').attr("src", "");
            for( i = 0; i < dataAsObject.Search.length; i++ ) {
              var $titleList = $("<a href='' class='link'></a>");
              $titleList.text( dataAsObject.Search[i].Title );
              $('#content').append( $titleList );
              $('#content').append( "<br>" );
            };
        };
    };

    $('.link').on("click", function () {
      var input = $(this).text();
      request.open( "GET", 'http://omdbapi.com?t=' + input );
      var $contentDiv = document.getElementById('title');
      $contentDiv.innerHTML = dataAsObject.Title;
      var $posterURL = document.getElementById('poster');
      $posterURL.src = dataAsObject.Poster;
    });

    // Make a new AJAX request to OMDB API
      // Figure out the right URL:
        // For a single result
          // http://omdbapi.com?t=Satantango
    if(movieName.length > 0) {
      var x = 'http://omdbapi.com/?t=' + movieName
    } else if(movieNames.length > 0) {
      var x = 'http://omdbapi.com/?s=' + movieNames
    };
    request.open( "GET", x );
    request.send();
        // // For a list of results
        //   // http://omdbapi.com?s=Jaws
        //   request.open( "GET", movieNames );
        //   request.send();
    // Represent the data on the page
  });
});
