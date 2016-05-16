//Global binding || "Default binding"


var showThis = function () {
  console.log( "This is this:", this );
};

// showThis();

//"Implicit binding"

var person = {
  name: "Groucho",
  speak: function (){
    // console.log( this ); //The person object
    console.log( "I am not " + this.name);
  }
};

// person.speak();


var Serge = {
  respondsTo: function ( question ) {
    if ( this.isSilent( question ) ) {
      console.log("Speak Up!");
    }
  },

  isSilent: function ( question ) {
    return question.trim() === "";
  }
};

// Serge.respondsTo("  ");


//"Explicit binding"

var sayHello = function () {
  console.log( "Hello, " + this.name );
};

// sayHello();

var person = {
  name: "Me"
};

sayHello.call( person );
sayHello.apply( person );

var meToSayHello = sayHello.bind( person );
// meToSayHello();

//"New binding"

var Person = function ( name, age ) {
  this.name = name;
  this.age = age;
  this.speak = function() {
    console.log( "Hi" )
  };
  return this;
};

var billy = new Person( "Billy", 10 );
var doug = new Person( "Doug", 50 );
