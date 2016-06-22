// Path data

var bulkData = [];

var getPathData = function( i , j ) {
    var passoverFullURL = passoverBaseURL + i + "&lon=" + j;

    $.ajax({
      url: passoverFullURL,
      dataType: "JSONP",
      type: "GET"
    }).done( function( data ) {
      // If loop start
      if(i > 80) {
        return false;
      } else if(j > 179) {
        j = -180;
        i ++;
        if(i===0){
          i++;
        }
      }

      x = {};
      x.time = data.response[0].risetime;
      x.lat = data.request.latitude;
      x.lon = data.request.longitude;

      console.log( x );
      bulkData.push( x );

      j ++;
      if(j===0){
        j++;
      }

      getPathData( i, j );

    });
};


var testLoop = function( i, j ) {
  if(i > 10) {
    return false;
  } else if(j > 10) {
    j = 1;
    i ++;
  }

  console.log(i + ", " + j);

  j++;
  testLoop( i, j );
};


////////////  sort  ////////////

var $content = $("#content");

var loadData = function() {
  // $content.load("../bulkData.txt", function( data ) {
  //   console.log(" The file was loaded succefully ");
    $.ajax({
          url: "../bulkData.txt",
          dataType: "JSON",
          type: 'GET'
        }).done( function( data ){
          data.sort(function(a, b) {
            return parseFloat(a.time) - parseFloat(b.time);
          });
          $content.text( JSON.stringify(data) );
        });

  // });
};
