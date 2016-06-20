var request = new XMLHttpRequest();
window.onload = function () {
var movie = function () {
  var search = document.getElementById("searchBar").value;
  var url = "http://omdbapi.com?t=" + search;

  request.open( "GET", url );
  request.send();
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      var info = JSON.parse(request.responseText);
      var title = document.getElementById("movieTitle");
      title.innerHTML = info.Title;
      var poster = document.getElementById("poster");
      poster.src = info.Poster;
      var year = document.getElementById("year");
      year.innerHTML = info.Year;
      }
    };
  };

  var button = document.getElementById("button");
  button.addEventListener('click', movie);
};
