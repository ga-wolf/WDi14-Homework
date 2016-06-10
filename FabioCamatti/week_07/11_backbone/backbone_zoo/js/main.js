var Movie = Backbone.Model.extend({

    defaults: {
        name: "N/A",
        director: "N/A",
        plot: "N/A",
        duration: "N/A"
    },
    initialize: function () {
      this.on("change", function () {
        console.log( "Something changed" );
      });
      this.on("change:name", function () {
        var changedAttributes = this.previousAttributes();
        var currentAttributes = this.toJSON();

        console.log( "Name was changed from: " + changedAttributes.name); console.log( "Name was changed to: " + this.get("name") );
        
      });
    }
});

var newMovie = new Movie({
    name: "Satantango",
    duration: 450,
    director: "Bela Tarr"
});
console.log(newMovie.toJSON());

var genericMovie = new Movie();
var specificMovie = new Movie({
    name: "Satan"
});
console.log(genericMovie.toJSON(), specificMovie.toJSON());

var movieName = newMovie.get("name");

var anotherMovie = new Movie({
    name: "Toy Story 3"
});

anotherMovie.set("spaceShip", 42);

anotherMovie.set({
    type: "animated",
    madeBy: "Pixar"
});

console.log(anotherMovie.toJSON());

var Animal = Backbone.Model.extend({
    initialize: function() {
        console.log("New animal created");
    }
});

var newAnimal = new Animal();
