var fs = require("fs");
var readable = fs.createReadStream(__dirname + "/dummyData.txt", {
  encoding: "utf8"
});

var writable = fs.createWriteStream(__dirname + "/dummyDataCopy.txt");

readable.pipe(writable);
