var app = app || {};

app.Secrets = Backbone.Collection.extend({

    url: "/secrets",

    model: app.Secret,


    initialize: function() {
        console.log("A new secrets collection");

        this.on("add", function(secret) {
            var secretView = new app.SecretView({
                model: secret
            });
            secretView.render();
        });
    }

});
