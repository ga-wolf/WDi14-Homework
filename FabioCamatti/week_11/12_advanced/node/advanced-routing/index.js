var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('assets'));

app.all(/.*/, function(req, res, next) {
    console.log(req.method, "request for ", req.url);
    next();
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

var userRouter = require('./userRouter');

app.use("/users", userRouter);

app.listen(3000, function() {
    console.log("Server running. Visit http://localhost:3000");
});
