var request = new XMLHttpRequest();

request.onreadystatechange = function() {
    // console.log( "Ready state: ", request.readyState);
    if (request.readyState !== 4) {
        return;
    }
    var dataAsString = request.responseText;
    var dataAsObject = JSON.parse(dataAsString);

    if (dataAsObject.Search){
        for (var i = 0; i < dataAsObject.Search.length; i++) {
          var obj = dataAsObject.Search[i];
          for (var key in obj) {
            if (key === "Poster" || key === "Title" ||  key === "Type" || key === "Year") {
              if (key === "Poster" ) {
                var img = document.createElement('img');
                img.src = obj[key];
                document.querySelector('#content').appendChild(img);
              } else{
                var p = document.createElement('p');
                p.innerHTML = key + ": " + obj[key];
                document.querySelector('#content').appendChild(p);

              }
            }
          }
        }
    } else {
      debugger
      if (dataAsObject.Poster && dataAsObject.Poster !== "N/A") {
          var img = document.createElement('img');
          img.src = dataAsObject.Poster;
          document.querySelector('#content').appendChild(img);
      } else if (dataAsObject.Poster === "N/A") {

        console.log("No poster found for this image");

      }
      var p = document.createElement('p');
      ["Title", "Type", "Year"].forEach(logArrayElements);
    }


};


window.onload = function() {
    var btn = document.querySelector("button");
    btn.addEventListener("click", function() {
        // Get the value of the input
        var content = document.querySelector("#content").innerHTML = "";
        var movie = document.querySelector("input").value;
        var single = document.querySelector("#single").checked;
        var list = document.querySelector("#list").checked;

        if (single) {
            request.open("GET", "http://omdbapi.com?t=" + movie);
            request.send();
        } else if (list) {
            request.open("GET", "http://omdbapi.com?s=" + movie);
            request.send();
        } else {
            console.log("Error");
        }





        // Are we searching for one result or a list?
        // var value = document.querySelector("button");
        // Make a new AJAX request to OMDB api
        // Figure out the URL:
        // For a single result http://omdbapi.com/?t=Satantango
        // For a list of result http://omdbapi.com/?s=Jaws

        // Represent the data on the page

    });
};
