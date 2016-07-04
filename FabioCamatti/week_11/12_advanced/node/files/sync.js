var fs = require('fs');
// Always give files with absolute paths for node.
// Absolut path is when you specify the file address in the long way. => /Users/fbga/WDi14-Homework/FabioCamatti/week_11/12_advanced/node/files
// Specify utf8 to 
var data = fs.readFileSync( __dirname + "/dummyData.txt", "utf8");
// Really important => It's like pwd command
// console.log(__dirname);
console.log(data);
