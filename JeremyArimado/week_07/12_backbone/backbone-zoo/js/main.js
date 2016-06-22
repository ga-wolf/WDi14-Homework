var main = "main.js";

var Movie = Backbone.Model.extend({

    defaults: {
        name    : "N/A",
        director: "N/A",
        plot    : "N/A",
        duration: "N/A",
        rating  : 1,
    },

    initialize: function() {
        // console.log('new movie created');

        this.on( "change", function () {
            // console.log('Something changed');
        })

        this.on("change:name", function () {
            var changedAttr = this.previousAttributes();
            var currentAttr = this.toJSON();
            console.log(changedAttr, currentAttr);
        })
    },
});

var Movies = Backbone.Collection.extend({
    model: Movie,
    initialize: function () {
            // console.log('movies collection init')
    },
})

var genericMovie = new Movie();
var specificMovie = new Movie({name: "Satan"});

var movies = new Movies();

movies.add({
    name: "Finding Nemo"
});

var moviesSingle = new Movies( genericMovie )
var moviesThree = new Movies([genericMovie, specificMovie, {name: "B@d B0y$ 2"}])


var movieOne = {
    name: "Movie one",
    rating: 2
}

var movieTwo = {
    name: "Movie Two",
    rating: 3
}

var movieThree = {
    name: "Movie Three",
    rating: 3
}

movies.add([movieOne, movieTwo, movieThree]);

var ratingOverThree = movies.filter(function(movie) {
    return movie.get("rating") >= 3;
})


// var newMovie = new Movie({
//     name    : "Satantango",
//     duration: 450,
//     director: "Bela Tarr",
// });
//
// var movieName = newMovie.get("name");
//
// var anotherMovie = new Movie();
// anotherMovie.set("name", "Toy Story 3");
// anotherMovie.set({
//     space   : "42",
//     char    : "Buzz",
//     type    : "animated",
//     madeBy  : "Pixar",
// })
//
//
// var genericMovie = new Movie();
// var specificMovie = new Movie({name: "Satan"});

var Animal = Backbone.Model.extend({

    defaults: {
        type: 'animal',
        ecosystem: "",
        stripes: 0,
        living: true,
    },
    initialize: function() {
        // console.log(this.toJSON());
        this.on("change", function () {
            // console.log('soetihng changed');
        });
        this.on("change:type", function () {
            // console.log("The type just changed")
        });

    },
})


var genericAnimal = new Animal();

var kangaroo = new Animal();
    kangaroo.set("type", "Kangaroo");
    kangaroo.set({
        pouch: true,
        tail: true
    });

var butterfly = new Animal({
    type: "Monarch"
});

var badger = new Animal({
    type: "Badger"
});

var panda = new Animal({
    type: "Panda",
    living: false,
    id: 10
});


var Zoo = Backbone.Collection.extend({
    model: Animal,
    initialize: function() {
        // console.log("A new zoo was created");
        this.on("remove")
    }
});

var zoo = new Zoo([butterfly, badger, kangaroo]);
    zoo.add( panda );
    zoo.add( { type: "Blobfish", living: false } );

var deadAnimals = zoo.where({ living: false });

var donaldTrump = new Animal({
    type: "moron"
});

zoo.add( donaldTrump );
zoo.remove( donaldTrump );

var donaldTrumps = zoo.where({type: "moron"});

var remainingAnimals = zoo.pluck("type");


var Car = Backbone.Model.extend({
    defaults: {
        wheels: 4,
        steeringWheel: true
    },
    initialize: function() {
        console.log('init')
    },
})


var jag = new Car({
    year: 1964,
    type: "E-type"
})

var galaxy = new Car({
    year: 1962,
    type: "Ford Galaxy"
})


var Dealership = Backbone.Collection.extend({
    model: Car,
    initialize: function() {
        // console.log("A new zoo was created");
        this.on('add', function (car) {
            console.log("We received a new car");
            console.log(car.toJSON());
        });
    }
});

var dealership = new Dealership([jag, galaxy]);

var carsByYear = dealership.sortBy("year");

dealership.each(function(car) {
    console.log(car.get("type"))
})

console.log( dealership.length )
dealership.remove(jag);
console.log( dealership.length )
