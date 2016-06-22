// Book
//   Create three or four books
//   Every time the title is changed, run a function
//   Every time anything is changed, run something as well
//   Each book should have a set of default values

//--------------------------------------------------------
// Model - a single instance
//--------------------------------------------------------

var Book = Backbone.Model.extend({
    defaults: {
        title: "N/A",
        numberOfPages: "N/A",
        author: "N/A",
        year: "N/A",
        publisher: "N/A",
        genre: "N/A"
    },
    initialize: function() {
        console.log("new book created");
    }
});

//--------------------------------------------------------
// Data - three objects
//--------------------------------------------------------

var orwell = new Book({
    title: "Nineteen Eighty-Four",
    numberOfPages: 268,
    author: "George Orwell",
    year: "1950",
    publisher: "New American Library",
    genre: "Fiction"
});

var musk = new Book({
    title: "Elon Musk: Inventing the Future",
    numberOfPages: 392,
    author: "Ashlee Vance",
    year: "2015",
    publisher: "Ecco Press",
    genre: "Biography"
});

var jefferson = new Book({
    title: "Thomas Jefferson and the Tripoli Pirates: The Forgotten War That Changed American History",
    numberOfPages: 256,
    author: "Don Yaeger",
    year: "2015",
    publisher: "Sentinel",
    genre: "Biography"
});

// Library
//   Add all of the books you created
//   Add another random book, and then remove it
//   Event handlers for adding and removing here

//--------------------------------------------------------
// Collection - a collection of single models.
//--------------------------------------------------------


var LibraryCollection = Backbone.Collection.extend({
    model: Book,
    initialize: function() {
        console.log("It opened");
        this.on("add", function(book) {
            console.log("We just received a new book, go sell it");
            console.log(book.toJSON());
        });
        this.on("remove", function(book) {
            console.log("A book was sold or stolen");
        })
    }
});

var verbalBehavior = new Book({
    title: "The Verbal Behavior Approach: How to Teach Children with Autism and Related Disorders",
    numberOfPages: 199,
    author: "Mary Barbera",
    year: "2007",
    publisher: "Jessica Kingsley Publishers",
    genre: "Teaching"
});

var libraryCollectionHere = new LibraryCollection([ musk, jefferson, orwell ])

//--------------------------------------------------------
// View - Show a collection
//--------------------------------------------------------
var BookView = Backbone.View.extend({
  el: '#main',
  initialize: function () {
      console.log("Fabio");
  },
  render: function () {
    var view = this;
    console.log("lalalala");
    // debugger;
    view.collection.each( function ( model ) {
      $h3 = $("<h3>").text(model.get("title"));
      $p = $("<p>").text(model.get("year"))
      view.$el.append($h3);
      view.$el.append($p);
      view.$el.append('<hr>');
      // debugger;
    })
  }
});

libraryCollectionHere.add(verbalBehavior);

var libraryView = new BookView({collection: libraryCollectionHere });

libraryView.render();





// library.add(orwell);
// library.add(jefferson);
//
// var sortedByYear = library.sortBy("year");
// console.log(sortedByYear);
//
//
// library.filter("year")
//
// console.log(library.add(musk));
// console.log(library.add(jefferson));
// console.log(library.filter("year"));
//
//
// console.log(library.length);
// library.remove(jefferson);
// console.log(library.length);
