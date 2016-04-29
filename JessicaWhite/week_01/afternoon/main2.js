
var babbleThing = function(stringy) {
  var splitString = stringy.split("");

   for( var i = 1; i < splitString.length; i++) {
     if( splitString[i] === splitString[0] ) {
       splitString[i] = "*";
     }
   }

console.log(splitString.join(""))
}
