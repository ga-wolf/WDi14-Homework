console.log('works')

var ageInSeconds = prompt("What's your age in seconds");


var earthAge = function (ageInSeconds) {
    return ageInSeconds / 60 / 24 / 7 / 365;
}

console.log(earthAge(ageInSeconds));
