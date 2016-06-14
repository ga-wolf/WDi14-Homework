var app = app || {};

  app.Secrets = Backbone.Collection.extend({
    model: app.Secret,

    initialize: function () {
      console.log("A new secrets collection");
    }

  });
