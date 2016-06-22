// var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
//
// var people = [
//   { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
//   { id: 2, username: "B", active: false, age: 35, uid: 1352 },
//   { id: 3, username: "C", active: false, age: 50, uid: 5418 },
//   { id: 4, username: "D", active: true,  age: 65, uid: 216  },
//   { id: 5, username: "E", active: true,  age: 80, uid: 18   },
//   { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
// ];
//
// var words = [
//   "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics",
//   "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
// ];

// console.log('sortBy ------------ ')
//
// var sortedPeople = _.sortBy(people, 'uid');
// console.log(sortedPeople);
//
// console.log('groupBy ------------ ')
//
// var groupedPeople = _.groupBy(words, function(word) {
//     return word[0].toLowerCase();
// });
// console.log(groupedPeople);
//
// console.log('_every ------------ ')
//
// var allWordsCheck = _.every(words, function(word) {
//     return word.length > 3;
// })
// console.log(allWordsCheck);
//
// console.log('_some ------------ ')
//
// var someWordsCheck = _.some( words, function ( word ) {
//   return word.length > 20;
// }); // => true
// console.log(someWordsCheck);
//
// console.log('_some ------------ ')
//
// var someWordsCheck = _.some( words, function ( word ) {
//   return word.length > 20;
// }); // => true
// console.log(someWordsCheck);
//
// console.log('_mapObject ------------');
//
// var uids = _.mapObject(people, function(person, key) {
//     return person.uid
// })
// console.log(uids);


// -------------------------
// -------------------------

// var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
// var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];
//
// var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// range
// flatten
// compact
// array thing
// findIndex
// _.object

// console.log(_.range(30, 101, 5));
// console.log(_.flatten(bumpyArr));
// console.log(_.compact(uncompactedArr));
// console.log(_.union([ 1, 25, 100 ], [ 1, 14, 25 ], [24, Infinity, -0]));
// console.log(_.findIndex(numbers, function (number){
//     return number > 7 && number % 2 === 0
// }));
// console.log(_.object(_.unzip(arrToTransform)));
// // => {moe: 30, larry: 40, curly: 50}


// var objectToMap = {
//   start:  100,
//   middle: 853,
//   end:    912
// }
//
// console.log(_.mapObject(objectToMap, function(value, key){
//     return _.random(0, 100);
// }));
//
// console.log(_.pairs(objectToMap));
//
// console.log(_.invert(objectToMap));
//
// console.log(_.omit(objectToMap, "start"))
//
// console.log(_.pick(objectToMap, "middle", "end"))
//


var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
];

var startingData = [
  [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
  [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
  [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
  [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
  [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
];

function logRand() {
    console.log(_.random(20, 100))
}
_.times(3, logRand)

var oneTime = _.once(logRand);
oneTime();
oneTime();

// Append a paragraph tag to the body for every person in people. It should end up looking something like this - <p> Hello A, you don't look a day over 20 </p>




var templateString = "<p> Hello <%= name %>! </p>";
var template = _.template( templateString );

_.each(people, function(person) {
    var compiledTemplate = template( { name: person.username } );
    console.log(compiledTemplate);
})












var final = _.chain(startingData)
            .map(function(record) {
                return _.unzip(record)
            })

console.log(final);
