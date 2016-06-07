var $name = $(".name");
var $poster = $(".poster");
var $plot = $(".plot");
var $tableHeaders = $("#searchResults tr");
var $tableData = $("#searchResults td");

var req = new XMLHttpRequest();

var clear = function() {
  $name.empty();
  $poster.removeAttr('src');
  $plot.empty();
  $tableHeaders.html("");
  $tableData.html("");
};

var search = function(word) {
  req.open( "GET", "http://omdbapi.com?t="+word );
  req.send();

  req.onreadystatechange = function (){
    if (req.readyState !== 4) { return; }
      var dataAsString = req.responseText;
      dataAsObject = JSON.parse( dataAsString );
      $name.html(dataAsObject.Title);
      $poster.attr("src", dataAsObject.Poster);
      $plot.html(dataAsObject.Plot);
      };
};

var clickHander = function(event){
  event.preventDefault();
  searchterm = $(this)[0].firstChild.innerHTML;
  search(searchterm);
};

$(".searchButton").on("click", function(){
    var searchTerm = $(".searchBox").val();
    var radioValue = $('input[name=searchType]:checked', '#searchType').val();

    var dataAsObject;
      if (radioValue === "singleresult") {
        clear();
        search(searchTerm);
      } else if (radioValue === "multipleresults") {
        clear();
        req.open( "GET", "http://omdbapi.com?s="+searchTerm );
        req.send();

        req.onreadystatechange = function (){
          if (req.readyState !== 4) { return; }

          var dataAsString = req.responseText;
          dataAsObject = JSON.parse( dataAsString );

          $("#searchResults thead tr").append( $('<th />', {text : "Title"}) );
          $("#searchResults thead tr").append( $('<th />', {text : "Year"}) );

            for (var i = 0; i < dataAsObject.Search.length; i ++ ) {
              var titleOfMovie = dataAsObject.Search[i].Title;
              var yearOfMovie = dataAsObject.Search[i].Year;
              var posterOfMovie = dataAsObject.Search[i].Poster;

              $('#searchResults tr:last').after('<tr><td>'+titleOfMovie+'</td><td>'+yearOfMovie);
              var a = $("tr");
              a.on("click", clickHander);
            }
          };
        }
});
