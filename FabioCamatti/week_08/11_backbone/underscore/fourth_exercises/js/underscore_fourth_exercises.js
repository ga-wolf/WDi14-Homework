var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
}

// Multiply each value in objectToMap by a random number and return an object with the changed values
var multiplyObj = _.mapObject( objectToMap, function (value, key) {
  return value * _.random(1,100);
});
console.log(multiplyObj);

// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
var arr_pairs = _.pairs(objectToMap);
console.log(arr_pairs);

// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
var arr_inv = _.invert(objectToMap);
console.log(arr_inv);

// Remove the "start" key from objectToMap in two different ways
var startLess = _.omit( objectToMap, "start" );
console.log(startLess);

var startNone = _.pick( objectToMap, "middle", "end" );
console.log(startNone);
