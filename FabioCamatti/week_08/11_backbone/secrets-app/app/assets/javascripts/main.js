// var s1 = new app.Secret();
// var s2 = new app.Secret({
//
//   content: "I put bleach in your coffee"
//
// });
//
// var secretsCollection = new app.Secrets([ s1, s2 ]);


// We can ask for information from the server because we specified a url attribute on the collection.
//Once that GET request to /secret is done, call

// secretsCollection.fetch().done(function() {
//
//     console.log(secretsCollection.toJSON());
//
//     var bleachSecret = secretsCollection.findWhere({
//         id: 1
//     });
//
//     bleachSecret.set({
//         content: "I put bleach in your coffee"
//     });
//
//     bleachSecret.save().done(function () {
//       console.log("Bleach secret was saved");
//     });
//
// });

var secretsCollection = new app.Secrets();

//Wait until the document is ready
$(document).ready(function() {
    // Wait until the secretsCollection has finished fetching
    secretsCollection.fetch().done(function() {

        //Creat a new instance of the router
        app.router = new app.AppRouter();
        //Gets the router to start listening to client side URLs
        Backbone.history.start();
    })
});
