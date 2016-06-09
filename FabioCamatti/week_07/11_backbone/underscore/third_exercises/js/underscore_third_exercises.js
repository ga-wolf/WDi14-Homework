var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];


// Create an array of every five numbers between 30 and 101
var arr_range = _.range(30,101,5);
console.log(arr_range);

console.log("\n");

// Turn bumpyArr into one flat array (no nested arrays)
var arr_flat = _.flatten(bumpyArr);
console.log(arr_flat);

console.log("\n");

// Remove all of the falsey elements in the uncompactedArr
var noFalsey = _.omit(uncompactedArr,function (value, key, object) {
    return _.isEmpty(value) || _.isNaN(value) || _.isUndefined(value);
});
console.log(noFalsey);

console.log("\n");


// Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0
var arr_uni = _.union([[ 1, 25, 100 ], [ 1, 14, 25 ], 24, Infinity, -0]);
console.log(arr_uni);

console.log("\n");

// Find the index of the first element in numbers that is over 7 and is even
var iFirst = _.findIndex(numbers, function (num) {
    return (num > 7 && num % 2 === 0)? num : false;
});
console.log(iFirst);

console.log("\n");

// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }
var changeToObj = _.object(arrToTransform);
console.log(changeToObj);

console.log("\n");
