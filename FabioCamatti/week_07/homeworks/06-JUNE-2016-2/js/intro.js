// This creates a new object that we can use to make an AJAX request.

var request = new XMLHttpRequest();

request.onreadystatechange = function () {
  // console.log( "Ready state: ", request.readyState);
  if ( request.readyState !== 4 ) {
    return;
  }
  var dataAsString = request.responseText;
  var dataAsObject = JSON.parse( dataAsString );
  var name = document.querySelector(".name");
  name.innerHTML = dataAsObject.Title;
};

request.open("GET", "http://omdbapi.com?t=Satantango");
request.send();

window.onload = function () {
  var btn = document.querySelector("button");
  btn.addEventListener("click", function () {
    // Get the value of the input
    // Are we searching for one result or a list?
    // var value = document.querySelector("button");
    // Make a new AJAX request to OMDB api
      // Figure out the URL:
        // For a single result http://omdbapi.com/?t=Satantango
        // For a list of result http://omdbapi.com/?s=Jaws

    // Represent the data on the page

  });
};



// request.onreadystatechange = function () {
//   console.log( "State is: " + request.readyState );
//   if ( request.readyState === 4 ) {
//     console.log("Ready to go");
//   }
// };
//
// // Fire off our request
// request.open( 'GET', "http://omdbapi.com?t=Satantango");
// request.send();
// console.log( request.readyState );
//
// window.setTimeout(function () {
//   console.log( request.responseTextre );
// }, 400);
