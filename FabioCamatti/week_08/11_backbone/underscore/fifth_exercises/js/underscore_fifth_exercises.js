$(document).ready(function() {
    var people = [{
        id: 1,
        username: "A",
        active: true,
        age: 20,
        uid: 1412
    }, {
        id: 2,
        username: "B",
        active: false,
        age: 35,
        uid: 1352
    }, {
        id: 3,
        username: "C",
        active: false,
        age: 50,
        uid: 5418
    }, {
        id: 4,
        username: "D",
        active: true,
        age: 65,
        uid: 216
    }, {
        id: 5,
        username: "E",
        active: true,
        age: 80,
        uid: 18
    }, {
        id: 6,
        username: "E",
        active: true,
        age: 95,
        uid: 1000
    }];

    // Log out 30 random numbers between 20 and 100
    _(30).times(function(n) {
        return _.random(20, 100);
    });


    // Create a function that can only ever be called once
    var sayFabio = function() {
        console.log("Fabio");
    };

    var initialize = _.once(sayFabio);
    initialize();
    initialize();

    // Append a paragraph tag to the body for every person in people. It should end up looking something like this - <p> Hello A, you don't look a day over 20 </p>

    var peopleTemplate = _.template("<p> Hello <%= username %>, you don't look a day over <%= age %> </p>");
    var insertPeopleTemplate = _.chain(people).map(function(p) {
        return peopleTemplate({
            username: p.username,
            age: p.age
        });
    }).value();

    var peopleString = "";

    for (var i = insertPeopleTemplate.length; i >= 0; i--) {

        $(insertPeopleTemplate[i]).insertAfter("h1");
    };


    // jQuery.each(insertPeopleTemplate, function(i, val) {
    //     peopleString += val;
    // });

    // $(peopleString).insertAfter("h1");

    var startingData = [
        [
            ["groucho", "marx", 1990],
            ["firstName", "lastName", "born"]
        ],
        [
            ["chico", "marx", 1987],
            ["firstName", "lastName", "born"]
        ],
        [
            ["zeppo", "marx", 2001],
            ["firstName", "lastName", "born"]
        ],
        [
            ["harpo", "marx", 1988],
            ["firstName", "lastName", "born"]
        ],
        [
            ["gummo", "marx", 1992],
            ["firstName", "lastName", "born"]
        ]
    ];

    var pessoasObject = _.chain(startingData)
        .map(function(person) {
            return _.invert(_.object(_.unzip(person)));
        })
        .map(function(p) {
            return _.mapObject(p, function(val, key) {
                if (key === "born") {
                    return parseInt(val) - 100;
                } else {
                    return val[0].toUpperCase() + _.rest(val).join("");
                }
            });
        })
        .value();

    var pessoasTemplate = _.template("<p><%= firstName %> <%= lastName %> was born in <%= born %></p>");

    var insertPessoasTemplate = _.chain(pessoasObject)
        .map(function(p) {
            return pessoasTemplate({
                firstName: p.firstName,
                lastName: p.lastName,
                born: p.born
            });
        }).value();

    var pessoasString = "";
    jQuery.each(insertPessoasTemplate, function(i, val) {
        pessoasString += val;
    });

    $("p").last().append(pessoasString);
    // $(pessoasString).insertAfter("h1");

});
