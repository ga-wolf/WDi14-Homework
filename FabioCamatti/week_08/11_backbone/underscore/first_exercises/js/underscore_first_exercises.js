var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Iterate through numbers and log each number to the console

console.log( _.each(numbers, function(value, key){
     return value;})
);

console.log("\n");

// Iterate through numbers and multiply each one of them by 5

 _.each(numbers, function(value, key){
     console.log( value * 5 );});

console.log("\n");

// Iterate through numbers and reduce it by adding them together

_.reduce(numbers, function(sum, num){
     return sum + num;
});

console.log("\n");

// Get an array of all of the people in people that have the username "E"

var query_name = _.where( people, {username: "E"});
console.log(query_name);

console.log("\n");

// Find the first object in people that has the id of 3

var query_id = _.findWhere( people, {id: 3});
console.log(query_id);

console.log("\n");

// Find the first person who has an age of less than 50

var query_age = _.filter( people ,function(n){return ( n.age < 50 )});
console.log(query_age);

console.log("\n");

// Get an array of all of the people with an age of over 60

var query_old = _.filter( people ,function(n){return ( n.age > 60 )});
console.log(query_old);

console.log("\n");

// Remove all of the people with an age less than 40

var query_reject = _.reject( people ,function(n){return ( n.age < 40 )});
console.log(query_reject);

console.log("\n");
