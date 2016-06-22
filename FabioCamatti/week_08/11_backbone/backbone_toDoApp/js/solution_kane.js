var ArachnidsView = Backbone.View.extend({
  el: '#main',
  initialize: function(){
    console.log("View has been called!")
  },
  render: function(){

    var view = this;
    view.collection.each( function( model ){
      $h3 = $('<h3 />').text( model.get("name") );
      $p = $('<p />').text( model.get("species") );
      view.$el.append($h3);
      view.$el.append($p);
      view.$el.append('<hr>');

    } )
  }
})

var spidersView = new ArachnidsView({ collection: spiderCollection })
spidersView.render();
