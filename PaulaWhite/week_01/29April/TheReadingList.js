// Reading List (DIDN'T COMPLETE ON MY OWN - FOLLOWED JACKS EXAMPLE)
// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties
//for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author
//like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not.
// If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien',
//and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
var books = [
{
  title: "The Hobbit",
  author: "J.R.R Tolkien",
  alreadyRead: true

},
{
  title: "The Lord Of The Rings",
  author: "J.R.R Tolkien",
  alreadyRead: false
}

];

for (var i = 0; i < books.length; i +=1){
 var book = books[i];
 var readMessage;

if (book.alreadyRead){
readMessage = " You already read ";
} else{
  readMessage + " You still need to read ";
}

 var message = readMessage + book.title + " by " + book.author;
console.log(message);
}
