var request = new XMLHttpRequest();

request.onreadystatechange = function () {
  console.log( "Ready state: ", request.readyState);
    if ( request.readyState !== 4 ) {
      return;
    }
  var dataAsString = request.responseText;
  var dataAsObject = JSON.parse( dataAsString );
  var movies = dataAsObject.Search
  // debugger;

  if (dataAsObject.Title !== undefined) {
    renderDetailedResult(dataAsObject)
  } else {
    renderRoughResult(movies);
  }
}

var renderRoughResult = function (movies) {
  for(var i=0; i<movies.length; i+=1) {

    var addTitle = document.createElement("h2")
    addTitle.className = "title"
    var titleText = document.createTextNode(movies[i].Title)
    addTitle.appendChild( titleText )
    document.querySelector("#content").appendChild( addTitle )

    var addPoster = document.createElement("img")
    addPoster.setAttribute('src', movies[i].Poster)
    document.querySelector("#content").appendChild( addPoster )

    var addYear = document.createElement("h3")
    addYear.className = "year"
    var yearText = document.createTextNode(movies[i].Year)
    addYear.appendChild( yearText )
    document.querySelector("#content").appendChild( addYear )
  }
}

var renderDetailedResult = function (dataAsObject) {
  // var keys=Object.keys(dataAsObject)

  var addPoster = document.createElement("img")
  addPoster.setAttribute('src', dataAsObject.Poster)
  debugger;
  document.querySelector("#content").appendChild( addPoster )

  for (var key in dataAsObject) {
    var addText = document.createElement("h3")
    var filling = key + ": " + dataAsObject[key]
    var content = document.createTextNode(filling)
    addText.appendChild( content )
    document.querySelector("#content").appendChild( addText )
  }
}

window.onload = function () {
  var btn = document.querySelector(".rough");
  btn.addEventListener( "click", function () {
    document.getElementById("content").innerHTML = "";
    var searchWord = document.querySelector(".roughSearch").value

    request.open( "GET", "http://omdbapi.com?s=" + searchWord )
    request.send();
  })

  var btn = document.querySelector(".detail");
  btn.addEventListener( "click", function () {
    document.getElementById("content").innerHTML = "";
    var searchWord = document.querySelector(".detailSearch").value

    request.open( "GET", "http://omdbapi.com?t=" + searchWord )
    request.send();
  })

}
