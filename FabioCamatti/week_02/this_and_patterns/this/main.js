//Global || "Default Binding"


var showThis = function () {
  console.log("This is this", this);
}

showThis();

 // "Implict Binding"

 var person = {
   name: "Groucho",
   speak: function () {
      // console.log(this); //The person object
      console.log("I am not " + this.name);
   }
 };

 person.speak();

 var Serge = {
    respondTo: function (question) {
      if ( this.isSilent( question )){
        console.log("speak up");
      }
    },
    isSilent: function ( question ) {
      return (question.trim() === "");
    }
 };

 Serge.respondTo("  ");

// "Explicit Binding"

var sayHello = function ( sayHiTo ) {
  console.log("Hello " + this.name);
  console.log("Hi, " + sayHiTo);
};

sayHello();

var person = {
    name: "Jane"
};

sayHello.call( person, "Jack" );
sayHello.apply(person);

var janeToSayHello = sayHello.bind(person);
janeToSayHello();


// "New Binding"

var Person = function ( name, age ) {
      this.name = name;
      this.age = age;
      this.speak  = function () {
          console.log("Hi");
      };
      console.log( this );
};

var billy = new Person( "Billy", 10 );
var doug = new Person ("Doug", 100)
