var fs = require("fs");
// var readable = fs.createReadStream(__dirname + "/dummyData.txt");
//
// readable.on("data", function (chunk) {
//       console.log(chunk);
// });

var readable = fs.createReadStream(__dirname + "/dummyData.txt", {
  encoding: "utf8",
  highWaterMark: 1024
});

readable.on("data", function (chunk) {
      console.log(chunk.length);
});
