$(document).ready(function() {
    var $bill = $("img");
    var t1 = TweenMax.to($bill, 20, {
        left: "80vw",
        ease: Bounce.easeOut,
        top: Math.random() > 0.5 ? "80vh" : "0vh",
        yoyo: true,
        rotation: 3600,
        repeat: -1, //Make it goes back-and-foward
        onUpdate: function() {
            // console.log("Animation is happening");
        }
    });
    $(".reverse").on("click", function() {
        t1.reverse();
    });
    $(".pause").on("click", function() {
        t1.pause();
    });
    $(".play").on("click", function() {
        t1.play();
    });
    $(".doubleSpeed").on("click", function() {
        t1.timeScale(2);
    });
    $(".doubleSpeed").on("click", function() {
        t1.timeScale(2);
    });
    $(".seek").on("input change", function () {
      var currentVal = parseInt( $(this).val() );
      t1.pause();
      t1.seek( currentVal );
    });
    $(".speed").on("input change", function () {
      var currentVal = parseInt( $(this).val() );
      t1.play();
      t1.timeScale(currentVal);
    });
    // <button class="reverse">Reverse</button>
    // <button class="pause">Pause</button>
    // <button class="play">Play</button>
    // <button class="doubleSpeed">2x speed</button>
});
