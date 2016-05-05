console.log('i work');


var cat = {};

cat.static = {};
cat.update = {};
cat.model = {};
cat.render = {};
cat.init = {};

cat.static.binCounter = 50;
cat.static.img = [
        'http://www.catgifs.org/wp-content/uploads/2013/09/074_evil_cat_gifs.gif', 'https://45.media.tumblr.com/6b52bce5723d89b9df196fa9021cb21f/tumblr_nw0lr1Mqmn1ttovh1o1_500.gif'
    ];

cat.static.words = ['DONALD TRUMP', '2AM LOCKOUTS', 'TURNBULL', 'UNEMPLOYMENT', 'CLICKBAIT', 'STUDENT LOANS', 'SHIT'];

cat.model.objects = [];

cat.model.createObject = function () {
    return {
        x: null,
        y: null,
        id: null,
        content: null,
        img: null
    }
};

cat.model.randomise = function ( object, imgArray ) {
    var currentCat = object;
    var screenHeight = window.innerHeight; //get screenHeight
    var screenWidth = window.innerWidth; //get screenHeight
    var randomX = Math.floor(Math.random() * screenWidth);
    var randomY = Math.floor(Math.random() * screenHeight);
    var randomImg = imgArray[Math.round(Math.random() * imgArray.length)];
    currentCat.x = randomX;
    currentCat.y = randomY;
    currentCat.id = null;
    currentCat.content = 'LOL';
    currentCat.img = randomImg;
    return currentCat;
};

cat.update.objects = function (objectsArr) {

    for (var i = 0; i < objectsArr.length; i += 1) {
        objectsArr[i].x += 10;
    };
};

cat.render.createElement = function ( object ) {
    // create element at randomScreenPosition
    var element = document.createElement('img');
    element.setAttribute('src', object.img);
    element.style.position = "absolute";
    element.style.top = object.y + "px";
    element.style.left = object.x + "px";
    return element;
};

cat.render.placeElement = function (element) {
    // places an element on the screen
    var bodyElement = document.getElementById('body');
    bodyElement.appendChild(element);
};

cat.paint = function () {
    // you have a bunch of object that you have to loop though and place
    // well these objects have to re intialise themselves
};

cat.init.step = function () {
    var newCat = cat.model.createObject(100, 100, 'ID', 'content');
    var randomisedCat = cat.model.randomise(newCat, cat.static.img);
    var newCatElement = cat.render.createElement(randomisedCat);
    cat.render.placeElement(newCatElement); 
};

cat.init.loop = function () {
    var init = setInterval(cat.init.step, 300);
};


// setInterval(function () {
//     // change word;
//
//     if(cat.static.binCounter === 0) {
//
//     }
//
//     var randomWord = cat.static.words[Math.round(Math.random() * cat.static.words.length)];
//     var wordElement = document.getElementsByClassName('line2')[0];
//     wordElement.innerHTML = randomWord;
//
//
//
// }, 1000)

cat.init.loop();
