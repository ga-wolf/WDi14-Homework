$userInput = $("#userInput");
$button = $("#rainbowFiSubmit");

var buttonClicked = function(){
  var userInput = $userInput.val();
  var rainbowfiedText = $userInput.rainbowFi(userInput);
  $output.html(rainbowfiedText);
};

$button.on("click", buttonClicked);

var $form = $(".pure-form");

$form.on("submit", function(e){
  e.preventDefault();
});
