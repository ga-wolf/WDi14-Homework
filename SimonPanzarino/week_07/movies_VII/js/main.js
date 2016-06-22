// var request = new XMLHttpRequest();
//
// request.onreadystatechange = function() {
//   if (request.readyState !== 4) {
//     return;
//   }
//   var data = request.responseText;
//   var parseData = JSON.parse(data);
//
//   var name = document.querySelector(".name");
//   name.innerHTML = parseData.Title;
//
//   console.log(parseData);
// }
//
// request.open("GET", "http://omdbapi.com?s=Satantango");
// request.send();

// var req = new XMLHttpRequest();
// req.onreadystatechange = function() {
//   if (req.readyState !== 4) {
//     return
//   }
//   console.log(req.responseText);
// }
//
// req.open("GET", "http://omdbapi.com?s=Alien");
// req.send();

window.onload = function() {

  var movieId = "";

$("#searchForm").submit(function(e) {
  e.preventDefault();
  console.log("hi")
  // get the value of the input
  var searchTerm = $("#searchBox").val();

  // make a new ajax request to omdbapi
  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (request.readyState !== 4) {
      return;
    }
    var data = request.responseText;
    var parseData = JSON.parse(data);

    if (parseData.totalResults < 2) {
      findSingleTitle(parseData.Search[0].imdbID);
    } else {

    $(".single .image").empty();
    $("#multipleResults tbody").empty();
    $("#multipleResults thead").empty();
    $("#singleTitle").empty();
    $("#description").empty();
    $("#misc").empty();

    $("#searchTitle").text("Search Results for " + searchTerm);

    $("#multipleResults").prepend("<thead><tr><th>#</th><th>Title</th><th>Year</th></tr></thead>")

    for (var i = 0; i < parseData.Search.length; i++) {
      $("#multipleResults tbody").append("<tr><th scope=row>" + (i + 1) + "</th><td><a id='" + parseData.Search[i].imdbID + "' href=''>" + parseData.Search[i].Title + "</a></td><td>" + parseData.Search[i].Year + "</td></tr>");
    };

    $("a").on("click", function(e) {

      e.preventDefault();
      findSingleTitle(this.id);
      // $("#multipleResults tbody").empty();
      // $("#multipleResults thead").empty();
    })

    console.log(parseData);
  }
  }

  request.open("GET", "http://omdbapi.com?s=" + searchTerm);
  request.send();
  // represent the data
})

var findSingleTitle = function(id) {

  $("#multipleResults tbody").empty();
  $("#multipleResults thead").empty();
  $("#searchTitle").empty();
  $("#singleTitle").empty();
  $("#description").empty();
  $("#misc").empty();
  $(".single .image").empty();
  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (request.readyState !== 4) {
      return;
    }
    var data = request.responseText;
    var parseData = JSON.parse(data);

    $("#singleTitle").text(parseData.Title);
    $(".image").append("<img class='thumbnail' src='" + parseData.Poster + "'/>");
    $("#description").text(parseData.Plot);
    $("#misc").text(parseData.Released);

    console.log(parseData);
  }

  request.open("GET", "http://omdbapi.com?i=" + id);
  request.send();
}

};
