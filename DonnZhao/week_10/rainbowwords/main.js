console.log ("testing")



$.fn.makeGainsboro = function() {

  this.text("Gainsboro");
  this.css({
    color: "rebeccapurple"
  });
  console.log("Gainsboro");


this.each(function (i, el) {
  var text = (i +1 ) + "Gainsboro111";
  $(el).text(text);
  console.log ("I:", i);
  console.log("El:", el);
});
};


(function($) {

$.fn.makeRainbowText = function(){
console.log(this);
  h2 = $("<h2>");
  color = ["red","orange","yellow","green","lightblue","blue","rebeccapurple"]
j = 0

for (i=0; i < this[0].innerText.length; i ++) {


  l = $("<span>")

  l.html(this[0].innerText[i])

//
if (l.html()!= " ") {

  l.css({
  	"color": color[j],
  	"font-size" : "50px",
    "text-shadow": "2px 2px gainsboro"


  })
  //
  j ++
  if (j>6) {
    j=0;
  }
 }


  console.log(l);
  $("body").append(l)
};

// $("body").prepend(h2)
this.css({
  color: "red"
})
  console.log("make rainbow text")
  //this allow chaning$("h1").text.css()
  return this;
};
}(jQuery))


$(document).ready(function(){
  $("li").makeGainsboro();
  $("h1").makeRainbowText().addClass("rainbow").css({
    background : "hotpink"});
});
