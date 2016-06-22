
var myVariable
var dataAsObject

$(document).ready(function () {
});



window.onload = function () {

var btn = document.querySelector("button");
btn.addEventListener("click", function () {


var request = new XMLHttpRequest();
myVariable = document.getElementsByClassName("searchTerm")[0].value;
request.onreadystatechange = function () {
            // console.log( "Ready state: ", request.readyState );
            if ( request.readyState !== 4 ) {
              return;
            }


            var dataAsString = request.responseText;
           dataAsObject = JSON.parse( dataAsString );

            var name = document.querySelector(".name");
            name.innerHTML = dataAsObject.Title;

            var poster = document.getElementsByTagName("img")[0];
            poster.src = dataAsObject.Poster;
          };

          // request.open( "GET", "http://omdbapi.com?t="+myVariable );

          request.open( "GET", "http://omdbapi.com?t="+myVariable );
          request.send();

    // Represent the data on the page
      console.log( "searchTerm");
  });
};
