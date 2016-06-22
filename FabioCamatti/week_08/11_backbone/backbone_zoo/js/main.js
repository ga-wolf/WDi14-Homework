var Movie = Backbone.Model.extend({

    defaults: {
        name: "N/A",
        director: "N/A",
        plot: "N/A",
        duration: "N/A"
    },
    initialize: function() {
        this.on("change", function() {
            // console.log( "Something changed" );
        });
        this.on("change:name", function() {
            var changedAttributes = this.previousAttributes();
            var currentAttributes = this.toJSON();

            // console.log( "Name was changed from: " + changedAttributes.name); console.log( "Name was changed to: " + this.get("name") );

        });
    }
});

var newMovie = new Movie({
    name: "Satantango",
    duration: 450,
    director: "Bela Tarr"
});
// console.log(newMovie.toJSON());

var genericMovie = new Movie();
var specificMovie = new Movie({
    name: "Satan"
});
// console.log(genericMovie.toJSON(), specificMovie.toJSON());

var movieName = newMovie.get("name");

var anotherMovie = new Movie({
    name: "Toy Story 3"
});

anotherMovie.set("spaceShip", 42);

anotherMovie.set({
    type: "animated",
    madeBy: "Pixar"
});

// console.log(anotherMovie.toJSON());

var Animal = Backbone.Model.extend({
    // Default values, initialize methods, event handlers
    defaults: {
        type: 'animal',
        ecosystem: "",
        stripes: 0,
        living: true
    },
    initialize: function() {
        var animal = this;
        animal.on("change", function() {
            // console.log( "Something just changed" );
        });

        // .set("type", "something") will trigger this function
        animal.on("change:type", function() {
            // console.log( "The type just changed" );
        });
    }
});
// var genericAnimal = new Animal();
// console.log( genericAnimal.toJSON() );

var kangaroo = new Animal();
var living = kangaroo.get("living");
// console.log( living );

kangaroo.set("type", "Kangaroo");
kangaroo.set({
    pouch: true,
    tail: true
});

kangaroo.set("type", "Giant Kangaroo");

var kangarooAttrs = kangaroo.toJSON();
console.log(kangarooAttrs);

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

// Backbone.Model.extend() will create a new blueprint
// new Movie() will create a new instance
// .get() is the way to access information
// .set() is the way to set information and this will fire the event handlers
// this.on("change", function () {})

var Zoo = Backbone.Collection.extend({
    model: Animal,

    initialize: function() {
        console.log("A new zoo was created");
        this.on("add", function(animal) {
            console.log("We just got a new animal, hopefully it isn't Donald");
        });
        this.on("remove", function() {
            console.log("Hopefully it was Donald");
        });
    }
});

var zoo = new Zoo([kangaroo, badger, butterfly]);
zoo.add(panda);
zoo.add({
    type: "Blobfish",
    living: false
});

var Zoo = Backbone.Collection.extend({
    model: Animal,

    initialize: function() {
        // console.log("A new zoo was created");
    },
});

var ZooView = Backbone.View.extend({

    el: "#app",

    events: {
        'click h1': 'headerClick',
        'click li': 'accessAnimal'
    },

    accessAnimal: function() {
        alert("That section of the zoo is closed");
    },

    headerClick: function(e) {
        var $clickedElment = $(e.currentTarget);
        $clickedElment.fadeToggle();
    },

    render: function() {

        // You gave this view a collection
        // If someting is added to that collection:
        // Call this.render
        //

        // this.collection.on("add", this.render, this);

        // Because we defined the el property, we now have access to this.el (document.getElementById('app')), we also have to the jQuery selected version of it using this.$el ($("#app"))

        this.$el.append("<h1>Yay, we just bought a zoo!</h1>");
        var $ul = $("<ul>");

        this.collection.each(function(animal) {
            var $li = $("<li>");
            $li.text(animal.get('type'));
            $ul.append($li);
            console.log($li);

        });

        // console.log(this);
        // Zoo.each(function (Animal) {
        //   console.log(Animal.toJSON());
        // });

        this.$el.append($ul);
    }

});

var Router = Backbone.Router.extend({
    routes: {
        '': 'showZoo',
        'secret': 'showSecret'
    },

    showSecret: function() {
        $("#app").html('I put bleach in your coffee. ');
        $("#app").append('<a href="#">Go home</a>');
    },

    showZoo: function() {
        $("#app").html('');
        var zv = new ZooView({
            collection: zoo
        });
        zv.render();
    }
});

$(document).ready(function() {

    var router = new Router();
    Backbone.history.start();

});









// var Car = Backbone.Model.extend({
//  defaults: {
//    wheels: 4,
//    steeringWheel: true
//  },
//  initialize: function() {
//    console.log("new car created");
//  }
// })
//
// var jag = new Car({
//  year:1964,
//  type: "E-type"
// });
//
// var galaxy = new Car({
//  year: 1962,
//  type: "Ford Galaxy"
// });
//
// var Dealership = Backbone.Collection.extend ({
//  model: Car,
//  initialize: function (){
//    console.log("It opened");
//    this.on("add", function ( car ) {
//      console.log( "We just received a new car, go sell it" );
//      console.log( car.toJSON() );
//    });
//    this.on("remove", function ( car ) {
//      console.log("A car was sold or stolen");
//    })
//  }
// });
//
// var dealership = new Dealership();
// dealership.add({
//  year: 1965,
//  type: "XP"
// });
//
//
//
//
// dealership.add( jag );
// dealership.add ( galaxy );
//
// var sortedByYear = dealership.sortBy( "year" );
// console.log( sortedByYear );
//
//
// dealership.filter("year")
//
// console.log(dealership.add( jag ));
// console.log(dealership.add ( galaxy ));
// console.log(dealership.filter("year"));
//
//
// console.log( dealership.length );
// dealership.remove( jag );
// console.log( dealership.length );
