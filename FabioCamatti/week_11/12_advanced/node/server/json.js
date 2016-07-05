var http = require("http");

http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  var brother = {
    firstName: "Grouch",
    lastName: "Marx"
  };
  res.end( JSON.stringify(brother) );
}).listen(3000, "127.0.0.1");
