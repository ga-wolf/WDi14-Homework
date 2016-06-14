var app = app || {}

app.AppView = Backbone.View.extend({

  el: "#main",

  render: function () {
    console.log("App view should be rendered now");
    var appViewTemplate = $("#appViewTemplate").html();
    //Set the HTML of the element with the ID of main  to be that appViewTemplate, making sure to use the keyword `this`
    this.$el.html( appViewTemplate );

    var SecretInputView = new app.SecretInputView();
    SecretInputView.render();

  }

});
