var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if(req.url === "/"){
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    fs.createReadStream(__dirname + "/dummyData.txt").pipe(res);
  } else if (req.url === "/json") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    var brother = {firstName: "Groucho", lastName: "Marx"};
    res.end( JSON.stringify( brother ));
  } else {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end("Something went wrong\n");
  }
}).listen(3000, "127.0.0.1");
