console.log('main.js');


var baseRonURL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
var $baseRonElement = $('.ron');
var $baseRonContent = $('.ron .content');

var displayRonInfo = function (data) {
    var quote = data[0];
    var $p = $("<p>");
    $baseRonContent.text('');
    $p.text(quote);
    $baseRonContent.prepend($p);
};

var getRonInfo = function () {
    $.ajax({
        url: baseRonURL,
        dataType: "JSON",
        type: "GET"
    }).success(displayRonInfo);
};

// var ronInterval = setInterval(function(){
//     getRonInfo();
// }, 200)
// $('#title').click(function(){
//     clearInterval(ronInterval);
// })
