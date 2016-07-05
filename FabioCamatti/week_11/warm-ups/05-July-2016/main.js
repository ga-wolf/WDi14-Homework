//RESOURCES
// ANSWER FROM http://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-8.php
var happy_number = function(num) {
    debugger;
    var m, n;
    var c = [];

    while (num != 1 && c[num] !== true) {
        c[num] = true;
        m = 0;
        while (num > 0) {
          debugger;
            n = num % 10;
            m += n * n;
            num = (num - n) / 10;
        }
        num = m;
    }
    return (num == 1);
};
// happy_number(2);

var cnt = 10;
var num = 1;
var f5 = '';
while (cnt-- > 0) {
    while (!happy_number(num))
        num++;
    f5 = f5 + (num + ", ");

    num++;
}
