var fs = require('fs');
fs.readFile(__dirname + "/dummyData.txt", "utf8", function( err, data) {
    console.log(data);
});
console.log("Fabio");
