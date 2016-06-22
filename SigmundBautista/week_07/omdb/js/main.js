var request = new XMLHttpRequest();
var dataAsObject;

request.onreadystatechange = function () {
  if ( request.readyState !== 4 ) {
    return;
  };
  dataAsObject = JSON.parse(request.responseText);

    var title = document.querySelector(".title");
    title.innerHTML = "Title: " + dataAsObject.Title;

    var image = document.querySelector(".image").setAttribute("src", dataAsObject.Poster);

    var rated = document.querySelector(".rated");
    rated.innerHTML = "Rating: " + dataAsObject.Rated;

    var released = document.querySelector(".released");
    released.innerHTML = "Released: " + dataAsObject.Released;

    var runtime = document.querySelector(".runtime");
    runtime.innerHTML = "Runtime: " + dataAsObject.Runtime;

    var metascore = document.querySelector(".metascore");
    metascore.innerHTML = "Metascore: " + dataAsObject.Metascore;

    var director = document.querySelector(".director");
    director.innerHTML = "Director: " + dataAsObject.Director;

    var actor = document.querySelector(".actors");
    actor.innerHTML = "Actors: " + dataAsObject.Actors;

    var plot = document.querySelector(".plot");
    plot.innerHTML = "Plot: " + dataAsObject.Plot;


};

window.onload = function () {
  var butt = document.querySelector("button");

    butt.addEventListener("click", function() {
      request.open( "GET", ("http://omdbapi.com?t=" + document.getElementById("searchbar").value) );
      request.send();
    });
};
