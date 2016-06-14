var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
        '': 'index'
    },

    index: function() {
        console.log("Empty client-side URL, index method ran");
        var appView = new app.AppView();
        appView.render();
    }

});

//Wait until the document is ready
$(document).ready(function () {
  //Creat a new instance of the router
  app.router = new app.AppRouter();
  //Gets the router to start listening to client side URLs
  Backbone.history.start();
});
