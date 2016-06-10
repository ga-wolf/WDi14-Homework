var Movie = Backbone.Model.extend({

    defaults: {
        name: "N/A",
        director: "N/A",
        plot: "N/A",
        duration: "N/A"
    },
    initialize: function () {
      this.on("change", function () {
        // console.log( "Something changed" );
      });
      this.on("change:name", function () {
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
    // initialize: function() {
    //     console.log("New animal created");
    // }

    defaults: {
      type: 'animal',
      ecosystem: "",
      stripes: 0,
      living: true
    },
    initialize: function () {
      this.on("change", function () {
        console.log("Something just changed");
      });

      this.on("changed:type", function () {
        console.log("The type just changed");
      });

    }
});

// var newAnimal = new Animal();
//
// console.log(newAnimal.toJSON());

var kangaroo = new Animal();
var living = kangaroo.get("living");
// console.log( living );

kangaroo.set("type", "kangaroo");

kangaroo.set({
  pouch: true,
  tail: true
});

var kangarooAttrs = kangaroo.toJSON();
// console.log( kangarooAttrs );

var butterfly = new Animal({
  type: "Badger"
});

var panda = new Animal({
  type: "Panda",
  living: false,
  id: 10
});

var Zoo = Backbone.Collection.extend({
  model: Animal,

  initialize: function () {
    console.log("A new zoo was created");
  },

  var Car = Backbone.Model.extend({
   defaults: {
     wheels: 4,
     steeringWheel: true
   },
   initialize: function() {
     console.log("new car created");
   }
  })

  var jag = new Car({
   year:1964,
   type: "E-type"
  });

  var galaxy = new Car({
   year: 1962,
   type: "Ford Galaxy"
  });

  var Dealership = Backbone.Collection.extend ({
   model: Car,
   initialize: function (){
     console.log("It opened");
     this.on("add", function ( car ) {
       console.log( "We just received a new car, go sell it" );
       console.log( car.toJSON() );
     });
     this.on("remove", function ( car ) {
       console.log("A car was sold or stolen");
     })
   }
  });

  var dealership = new Dealership();
  dealership.add({
   year: 1965,
   type: "XP"
  });




  dealership.add( jag );
  dealership.add ( galaxy );

  var sortedByYear = dealership.sortBy( "year" );
  console.log( sortedByYear );


  dealership.filter("year")

  console.log(dealership.add( jag ));
  console.log(dealership.add ( galaxy ));
  console.log(dealership.filter("year"));


  console.log( dealership.length );
  dealership.remove( jag );
  console.log( dealership.length );
