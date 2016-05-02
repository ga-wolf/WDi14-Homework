//Factory Pattern

var AnimalFactory = function () {
    var animal = {};
    animal.alive = true;
    animal.breathing = function () {
      console.log("In through the snout, out through the mouth");
    }
    return animal;
}




var DogFactory = function ( name, breed ) {
  var dog = AnimalFactory();

  dog.name = name;
  dog.breed = breed;
  dog.bark = function () {
    console.log("Woof");
  };


  return dog;
};


var tammy = DogFactory( "Tammy", "Tamaskan" );
console.log( tammy );
var buddy = DogFactory( "Buddy" , "Labrador");

var PersonFactory = function ( name , age ) {
  var person = {};

  person.name = name;
  person.age = age;

  person.speak = function () {
    console.log("Hi");
  };

  return person;
}

var alexander = PersonFactory( "Alexander Sokurov" , 22);


var Coyfish = function ( name, color, alive ) {
   console.log( this );
   this.name = name;
   this.color = color;
   this.alive = true;
   this.isCreepy = function () {
     console.log("Definitely");
   }
   return this;

};

var goldy = new Coyfish( "Goldy", "gold", true );


///OLOO - Objects linked to other Objects

var Animal = { //a generic animal
  living: true,
  die: function () {
    console.log("I am now dead");
  }
};

var Wolf = Object.create( Animal );
Wolf.howl = function () { // a generec Wolf
    console.log("Extreme cute when pup");
};


//A specific Wolf
var tamaskan = Object.create( Wolf );
tamaskan.breed = "Tamaskan"
