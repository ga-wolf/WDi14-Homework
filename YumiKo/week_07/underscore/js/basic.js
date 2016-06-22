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

// Log out 30 random numbers between 20 and 100
var randomThirty = _.sample(_.range(20,101), 30);
console.log(randomThirty);

// Create a function that can only ever be called once
var calledOnce = _.once(function () { return console.log("It's called only once");})

// Append a paragraph tag to the body for every person in people. It should end up looking something like this - <p> Hello A, you don't look a day over 20 </p>
// var pickUsernameAge = _.pick(people,'username','age')
var insertPersonalInfo = _.template("<p>Hello <%= username %>, you don't look a day over <%= age %></p>")

var appendParagraph = _.each(people, function (p) {
  var pickUsernameAge = _.pick(p, "username", "age" )
  var compiled = insertPersonalInfo(pickUsernameAge)
  $("body").append(compiled)
})

// This is really, really difficult, and we don't really expect it to get done. But worth having a think about!
//
// Eventually we want five console.logs that look like the following...
// Groucho Marx was born in 1890.
// Chico Marx was born in 1887.
// Zeppo Marx was born in 1901.
// Harpo Marx was born in 1888.
// Gummo Marx was born in 1892.
// You'll need to rearrange the data firstly, then alter the data, then print it out.

var createParagraph = _.template("<%= firstName %> <%= lastName %> was born in <%= born %>")

var commentMarxBrothers = _.chain(startingData)
  .unzip()
  .unzip()
  .map(function(obj){ return _.object(obj[1],obj[0]) })
  .map(function(r){ return console.log(createParagraph(r)); })



//
// var unzipData = _.unzip(_.unzip(startingData))
// var arrayfy = _.map(unzipData, function(obj){ return _.object(obj[1],obj[0]) })
//
// var compileLog = _.each(arrayfy, function(r){
//   var log = createParagraph(r)
//   console.log(log);
// })
//
// var commentMarxBrothers = _.chain(startingData)
//   .unzip()
//   .unzip()
//   .map(function(obj){ return _.object(obj[1],obj[0]) })
//   .map(function(r){ return console.log(createParagraph(r)); })
//   .value();
//
// console.log(commentMarxBrothers);



  // var createParagraph = _.template("<%= firstName %> <%= lastName %> was born in <%= born %>")
  //
  // var unzipData = _.unzip(_.unzip(startingData))
  // var arrayfy = _.map(unzipData, function(obj){ return _.object(obj[1],obj[0]) })
  //
  // var compileLog = _.each(arrayfy, function(r){
  //   var log = createParagraph(r)
  //   console.log(log);
  // })
  //
  // var commentMarxBrothers = _.chain(arrayfy)
  //   .map(function(r){ return createParagraph(r) })
  //   .value();
