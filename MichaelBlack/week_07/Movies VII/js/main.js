window.onchange = function() {

  var clearContent = function(){
    $("#content").html("");
  };

  var titleRequest = function (input) {

    var req = new XMLHttpRequest();
    req.open( "GET", "http://omdbapi.com?t=" + input );
    req.send();

    req.onreadystatechange = function() {
      if( req.readyState !== 4 ) {
        return;
      }

      var dataAsObject = JSON.parse( req.responseText );
      console.log(dataAsObject);

      clearContent();

      $title = $("<h2></h2>");
      $title.text(dataAsObject.Title);
      $poster = $("<img>");
      $poster.attr("src", dataAsObject.Poster);
      $date = $("<p></p>");
      $date.text(dataAsObject.Released);
      $plot = $("<p></p>");
      $plot.text(dataAsObject.Plot);

      $("#content").append( $title );
      $("#content").append( $poster );
      $("#content").append( $date );
      $("#content").append( $plot );

    };
  };

  var searchRequest = function () {
    var input = $(".search").val();

    var req = new XMLHttpRequest();
    req.open( "GET", "http://omdbapi.com?s=" + input );
    req.send();

    req.onreadystatechange = function() {
      if( req.readyState !== 4 ) {
        return;
      } else {

      }

      var dataAsObject = JSON.parse( req.responseText );
      console.log(dataAsObject);

      clearContent();

      for( i = 0; i < dataAsObject.Search.length; i++ ) {
        var $newLink = $("<a href=# class=title></a>");
        $newLink.text( dataAsObject.Search[i].Title );
        $("#content").append( $newLink );
        $("#content").append( "<br>" );
      }

      $(".title").on("click", function() {
        input = $( this ).text();
        titleRequest(input);
      });

    };
  };


  $("input").keypress(function(e) {
    if( e.which == 13 ) {
      searchRequest();
    }
  });

  $(".btnSearch").on("click", searchRequest);
  $(".btnLucky").on("click", function() {
    input = $(".search").val();
    titleRequest(input);
  });
  $("h1").on("click", clearContent);

};
