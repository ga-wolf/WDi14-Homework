// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on("page:change", function(){
  $('#project_user_ids option').mousedown(function(e) {
     e.preventDefault();
     $(this).prop('selected', $(this).prop('selected') ? false : true);
     return false;
  });
});
