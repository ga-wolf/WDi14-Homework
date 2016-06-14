// Create a new instance of something called the SecretInputView which should be defined in views/SecretInputView.js
// Put all of the content from the secretInputViewTemplate onto the page - this should be put in the div with the ID of secretForm

// Create the file
// Make sure app is defined
// Create the factory or constructor (extend Backbone.View)
// el: "#secretForm"
// We will need a render method
// Create the instance
// Call render on the instance

var app = app || {};

app.SecretInputView = Backbone.View.extend({

    events: {
        'click button': 'createSecret'
    },

    checkForEnter: function ( event ) {
        app.ENTER_KEY = 13;
        if (event.which === app.ENTER_KEY) {
          event.preventDefault();
          this.createSecret();
        }
    },

    createSecret: function() {
        console.log("A secret should be created");
        // Create a new instance of app.Secret

        var secret = new app.Secrets();

        var content = this.$el.find("textarea").val();
        // Set the content to be the value that the textarea has
        secret.set({
            content: content
        });
        // save the new instance
        secret.save();
        // Add that into the collection
        app.secrets.add(secret);
        this.$el.find("textarea").val('').focus();

    },

    el: "#secretForm",

    render: function() {
        console.log("Secret Input view should be rendered now");
        var SecretInputViewTemplate = $("#secretInputViewTemplate").html();
        //Set the HTML of the element with the ID of main  to be that appViewTemplate, making sure to use the keyword `this`
        this.$el.html(SecretInputViewTemplate);
    }

});
