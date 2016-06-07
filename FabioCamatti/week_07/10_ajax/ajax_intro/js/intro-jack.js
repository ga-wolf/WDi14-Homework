var request = new XMLHttpRequest();

request.onreadystatechange = function () {
  // console.log( "Ready state: ", request.readyState );
  if ( request.readyState !== 4 ) {
    return;
  }

  var dataAsString = request.responseText;
  var dataAsObject = JSON.parse( dataAsString );

  var name = document.querySelector(".name");
  name.innerHTML = dataAsObject.Title;
};

request.open( "GET", "http://omdbapi.com?t=Satantango" );
request.send();

window.onload = function () {

  var btn = document.querySelector("button");
  btn.addEventListener("click", function () {
    // Get the value of the input
    // Are we searching for one result or a list?

    // Make a new AJAX request to OMDB API
      // Figure out the URL:
        // For a single result
          // http://omdbapi.com?t=Satantango
        // For a list of results
          // http://omdbapi.com?s=Jaws

    // Represent the data on the page
  });

};
