
$(document).ready(function () {
  var $content = $('#content');

  var loadLorem = function () {
    $content.load('../lorem.txt', function () {
      console.log( "The file was sucessfully loaded." );
    });
  }

  $("h1").on("click", loadLorem);

})
