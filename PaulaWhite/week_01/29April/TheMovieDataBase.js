// It's like IMDB, but much much smaller! (HALF COMPLETED - FOLLOWED JACKS EXAMPLE)
// Create an object to store the following information about your favorite movie:
//title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so:
//"Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var puff = {
  title: "Puff the Magic Dragon",
  duration: 30,
  stars: [
    "Puff",
   "Jackie",
   "Living Sneezes",
 ]
 };

 var displayMovie = function (movie){
   var movieMessage = movie.title;
   movieMessage += " lasts for " + movie.duration + " minutes. ";
   movieMessage += "Stars: ";
   movieMessage += movie.stars.join(", ") + ".";
   console.log(movieMessage);

 };
// for (var i = 0; i < favMovie.stars.length; i += 1){
//console.log (favMovie.stars[i]);
//console.log(title + " lasts for " + duration + "minutes. The Stars are " + stars);
// }
displayMovie ( puff );
