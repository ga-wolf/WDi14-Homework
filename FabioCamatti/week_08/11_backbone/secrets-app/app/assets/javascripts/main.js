var s1 = new app.Secret();
var s2 = new app.Secret({

  content: "I put bleach in your coffee"

});

var secretsCollection = new app.Secrets([ s1, s2 ]);

console.log( secretsCollection );
