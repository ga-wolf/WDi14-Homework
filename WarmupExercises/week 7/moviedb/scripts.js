var request = new XMLHttpRequest;

var handler = function() {
  var searchterm = $(this).data().movieName;
  searchMovie(searchterm);
}

var searchMovie = function(searchterm) {
  request.open("GET", "http://omdbapi.com/?t=" + searchterm);
  request.onreadystatechange = function() {

    if (request.readyState !== 4)
      return;
    var responseText = request.responseText;
    var responseObject = JSON.parse(responseText);

    // $("#container").remove($("div"));
    var div = $("<div>");
    var img = $("<img>");
    var h1 = $("<h1>");
    h1.text(responseObject.Title);
    img.attr("src", responseObject.Poster);
    div.append(h1).append(img);
    $("#container").append(div);
  };
  request.send();
}

var searchList = function(searchterm) {
  request.open("GET", "http://omdbapi.com/?s=" + searchterm);
  request.onreadystatechange = function() {

    if (request.readyState !== 4)
      return;
    var responseText = request.responseText;
    var responseObject = JSON.parse(responseText);

    var ul = $("<ul>");
    var results = responseObject.Search;
    for (var i = 0; i < results.length; i++) {
      var movieName = results[i].Title;
      var li = $("<li>");
      var a = $("<a>");
      a.data("movieName", movieName);
      a.html(movieName);
      a.attr("href", "#");
      a.(handler);
      li.append(a);
      ul.append(li);
    }
    $("#container").append(ul);
  };
  request.send();
}

$("#btn-search").click(function() {
  var searchterm = $("#input-search").val();
  var choice = $("input[name=choice]:checked").val();
  if (choice == 0)
    searchMovie(searchterm);
  else
    searchList(searchterm);
});
