var color_from_hue = function(hue) {
    var h = hue / 60;
    var c = 255;
    var x = (1 - Math.abs(h % 2 - 1)) * 255;
    var color;

    var i = Math.floor(h);
    if (i === 0) color = rgb_to_hex(c, x, 0);
    else if (i == 1) color = rgb_to_hex(x, c, 0);
    else if (i == 2) color = rgb_to_hex(0, c, x);
    else if (i == 3) color = rgb_to_hex(0, x, c);
    else if (i == 4) color = rgb_to_hex(x, 0, c);
    else color = rgb_to_hex(c, 0, x);

    return color;
};

var rgb_to_hex = function(red, green, blue) {
    var h = ((red << 16) | (green << 8) | (blue)).toString(16);
    // add the beginning zeros

    while (h.length < 6) h = '0' + h;
    return '#' + h;
};

var hex_to_rgb = function(hex) {
    var color = hex.split('#').join('');
    var red = parseInt(hex.substr(1, 2), 16);
    var green = parseInt(hex.substr(3, 2), 16);
    var blue = parseInt(hex.substr(5, 2), 16);

    return "rgb( " + red + ", " + green + ", " + blue + " )";
};

$(document).ready(function() {

    var hue = 0;
    hex_to_rgb('#ff23ae')

    $('body').on('keydown', function(e) {
        if (e.keyCode == 32) {
            // user has pressed space
            // color_from_hue(hue);
            // debugger;
            $(this).css('background-color', color_from_hue(hue));
            hue = Math.floor((Math.random() * 255) + 1);
            console.log(hue);
            location.reload;
        }
    });
});
