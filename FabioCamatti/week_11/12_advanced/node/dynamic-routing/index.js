var express = require('express');
var app = express();
// To allow forms to be submitted and the data will be saved in req.body, as will JSON
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Express can now server static files, they all belong in the assets folder.
app.use(express.static('assets'));

app.all(/.*/, function(req, res, next) {
    console.log(req.method, "request for ", req.url);
    next();
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/users", function(req, res) {
    console.log("Request body: ", req.body);
    res.redirect("/");
});

// app.get("/:username",function (req,res) {
//   console.log(req.params);
//   res.send("Hello " + req.params.username);
// });

var setUser = function(req, res, next) {
    console.log("setUser ran");
    if (true) {
        next();
    } else {
        res.redirect("/error");
    }
};

app.get('/users/:id', setUser, function(req, res) {
    res.send("Found the user with the ID of " + req.params.id);
});

app.get('/json', function(req, res) {
    var brother = {
        firstName: "Groucho",
        lastName: "Marx"
    };
    res.json(brother);
});

app.route("/someCRUDModel/:id").get(function(req, res) {
    res.send("Grouped route: " + req.params.id);
}).put(function() {
    res.send("Grouped route: " + req.params.id);
}).post(function() {
    res.send("Grouped route: " + req.params.id);
}).delete(function() {
    res.send("Grouped route: " + req.params.id);
});


app.listen(3000, function() {
    console.log("Server running. Visit http://localhost:3000");
});
