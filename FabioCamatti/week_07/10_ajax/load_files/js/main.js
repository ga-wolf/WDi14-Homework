// Wait
$(document).ready(function () {

  // Create a local variable, prefix it with the dollar sign to
  // make sure everyone knows it has been sselected by jQuery

  var $content = $('#content');

  var loadLorem = function () {
    // Put all of the content from lorem.txt (in the previous directory) into $("#content"), then call the function.
    $content.load('../lorem.txt', function () {
      console.log( "The file was sucessfully loaded." );
    });
  }
  // When any h1 is clicked, call the loadLorem function
  $("h1").on("click", loadLorem);

})
