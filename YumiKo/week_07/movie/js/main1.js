var request = new XMLHttpRequest();
var searchWord = null;


request.onreadystatechange = function () {
  console.log( "Ready state: ", request.readyState);
    if ( request.readyState !== 4 ) {
      return;
    }
  var dataAsString = request.responseText;
  var dataAsObject = JSON.parse( dataAsString );
  var name = document.querySelector(".name");
  var year = document.querySelector(".year");
  var poster = document.querySelector(".poster");
  debugger;

  if (dataAsObject.Search.length >= 2) {
    var eachMovie = dataAsObject.Search
    for(var i=0; i<eachMovie.length; i+=1) {

      var addTitle = document.createElement("h2")
      addTitle.className = "title"
      var titleText = document.createTextNode(eachMovie[i].Title)
      addTitle.appendChild( titleText )
      document.body.appendChild( addTitle )
      // document.getElementsByClassName('title').appendChild(eachMovie[i].Title)
      // $(".title").append(eachMovie[i].Title)
      // year.innerHTML = eachMovie[i].Year
      var addYear = document.createElement("h3")
      addYear.className = "year"
      var yearText = document.createTextNode(eachMovie[i].Year)
      addYear.appendChild( yearText )
      document.body.appendChild( addYear )

      var addPoster = document.createElement("p")
      addPoster.className = "poster"
      var posterUrl = document.createTextNode(eachMovie[i].Poster)
      addPoster.appendChild( posterUrl )
      document.body.appendChild( addPoster )
    }
  } else if (dataAsObject.Search.length === 1){
      request.open( "GET", "http://omdbapi.com?t=" + searchWord )
      request.send();

      var stringData = request.responseText;
      var objectData = JSON.parse( stringData );
      var name = document.querySelector(".name");
      var year = document.querySelector(".year");
      var poster = document.querySelector(".poster");
      debugger;

      name.innerHTML = objectData.Search.Title
      year.innerHTML = objectData.Search.Year
      poster.innerHTML = objectData.Search.Poster
  }
  // name.innerHTML = dataAsObject.Title;
  console.log(dataAsObject);
}


window.onload = function () {

  var btn = document.querySelector("button");
  btn.addEventListener( "click", function (e) {
    console.log( "The button was clicked" );
    searchWord = document.querySelector(".search").value
    console.log(searchWord);

    request.open( "GET", "http://omdbapi.com?s=" + searchWord )
    request.send();

        // 
        // var searchName = document.querySelector(".searchName")
        // var searchText = document.createTextNode(searchWord)
        // searchName.appendChild( searchText )
        // document.body.appendChild( searchName )

    //
    // var searchName = document.querySelector(".searchName")
    // // searchName.appendChild(searchWord);
    // $(".searchName").append(searchWord)
    //
    //   var newDiv = document.createElement("h3")
    //   newDiv.className = "titled"
    //   document.getElementsByClassName('titled').appendChild("How??")
    //
  })
}
