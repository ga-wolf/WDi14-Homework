var request
var results
window.onload = function() {
    var btn = document.querySelector("button");
    btn.addEventListener("click", function() {

        $(".movieResults").remove()


        request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (request.readyState !== 4) {
                return;
            };
            var dataAsString = request.responseText;
            var dataAsObject = JSON.parse(dataAsString);
            results = dataAsObject.Search

            var movieTitleDiv = document.createElement("div")
            var movieImageTag = document.createElement("img")
            if (results.length < 2) {

                movieTitleDiv.innerHTML = results[0].Title
                document.body.appendChild(movieTitleDiv);

                movieImageTag.src = results[0].Poster
                document.body.appendChild(movieImageTag);


            }

            if (results.length > 2) {

                for (var i = 0; i < results.length; i++) {
                    var movieTitleDiv = document.createElement("div")
                    var movieImageTag = document.createElement("img")
                    movieImageTag.className = "movieResults" + " " + i
                    movieTitleDiv.className = "movieResults"

                    movieTitleDiv.innerHTML = results[i].Title;
                    document.body.appendChild(movieTitleDiv);

                    movieImageTag.src = results[i].Poster
                    document.body.appendChild(movieImageTag);


                    console.log(results[i].Poster)
                }





                var i
                var r
                $(".movieResults").on("click", function() {
                    i = $(this).attr('class').split(' ')[1];
                    r = $(".movieResults").remove();
                    $(".movieResults").remove();

                    //  $(".movieResults").not($(this)).remove();
                    console.log(i)
                    showmovie();


                })

                var showmovie = function() {
                    movieTitleDiv.innerHTML = results[i].Title + " (" + results[i].Year + ")";

                    document.body.appendChild(movieTitleDiv);

                    movieImageTag.src = results[i].Poster
                    document.body.appendChild(movieImageTag);



                 movieImageTag.addEventListener("click", function() {
                        for (var i = 0; i < r.length; i++) {
                            removedMovie = r[i]
                            document.body.appendChild(removedMovie)
                        }

                }) }





                //   var newDiv = document.createElement("div");
                // var newContent = document.createTextNode("Hi there and greetings!");
                // newDiv.appendChild(newContent); //add the text node to the newly created div.

            }


            // document.getElementById("myImg").src = "hackanm.gif";


            console.log(request.readyState)
            console.log(dataAsString)
            console.log(dataAsObject.Search[0])

        }
        var inputText = document.querySelector(".input_text").value
        var requestUrl = "http://omdbapi.com/?s=" + inputText
        request.open("GET", requestUrl);
        request.send();



    })


}
