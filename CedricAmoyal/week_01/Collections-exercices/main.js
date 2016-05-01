
//
// Exercises: Arrays
// Your top choices
//
// Create an array to hold your top five choices of something
//(colors, presidents, whatever). If you choose movies, the right top choice is
//"Satantango".
//
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
//picking the right suffix for the number based on what it is.

var topArray = ["ski", "soccer", "skate", "tennis", "poker", "ruby", "pizza", "burger", "roller", "javascript"];
var showTopChoices = function ( x, y) {
      for (var i = (x - 1); i < y; i++) {
          var j = i + 1;
        if (i === 0) {
          console.log("My " + j + "st choice is " + topArray[i])
        }
        if (i === 1) {
          console.log("My " + j + "nd choice is " + topArray[i])
        }
        if (i === 2) {
          console.log("My " + j + "rd choice is " + topArray[i])
        }
        if (i > 2) {
          console.log("My " + j + "th choice is " + topArray[i])
        }

      }
    }


    // The Recipe Card
    //
    // Never forget another recipe!
    //
    // Create an object to hold information on your favorite recipe.
    //It should have properties for title (a string), servings (a number),
    //and ingredients (an array of strings).
    //
    // On separate lines (one console.log statement for each), log
    //the recipe information so it looks like:
    //
    // Mole
    // Serves: 2
    // Ingredients:
    // cinnamon
    // cumin
    // cocoa



    var recipeCard = {
      title: "pasta",
      serving: 2,
      ingredients: ["pasta", "beef", "tomato", "cheese"]
    }

    console.log(recipeCard.title);
    console.log(recipeCard.serving);
    for (var i = 0; i < recipeCard.ingredients.length; i++) {
      console.log(recipeCard.ingredients[i]);
    }



//     The Reading List
//
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has
// properties for the title (a string), author (a string), and alreadyRead
// (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and
//  book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read
//  it yet or not. If you read it, log a string like 'You already read "The Hobbit"
//   by J.R.R. Tolkien', and if not, log a string like 'You still need to read
//    "The Lord of the Rings" by J.R.R. Tolkien.'


var bookArray = [
      {title: "A", author: "AA", alreadyRead: true},
      {title: "B", author: "BA", alreadyRead: false},
      {title: "C", author: "CA", alreadyRead: true},
      {title: "D", author: "DA", alreadyRead: false},
      {title: "E", author: "EA", alreadyRead: true}
];

for (var i = 0; i < bookArray.length; i++) {
      if (bookArray[i].alreadyRead === true){
        console.log( "I already read the book " + bookArray[i].title + " from "
        + bookArray[i].author);
      }
      else {
        console.log( "I haven't read the book " + bookArray[i].title + " from "
        + bookArray[i].author);
      }
}


// The Movie Database
//
// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie:
// title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic
//  Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var favoriteMovie = {
  title: "WDI-14",
  duration: 12,
  stars: ["Cedric", "Paula", "John", "Sherif"]
}
var starsPanels = "";
for (var i = 0; i < favoriteMovie.stars.length; i++ ) {
  if (i === 0){
    starsPanels += favoriteMovie.stars[i];
  } else {
  starsPanels += ", " + favoriteMovie.stars[i];
}
}


console.log( favoriteMovie.title + " last " + favoriteMovie.duration +
" weeks. The stars are " + starsPanels + " !!");
