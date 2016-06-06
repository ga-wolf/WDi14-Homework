// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:

var rectangleOne = {
  length: 5,
  width: 12
};
var rectangleTwo = {
  length: 7,
  width: 9
};

// isSquare - Returns whether the rectangle is a square or not
var isSquare = function (givenObject) {
  var message;
  if (givenObject.length === givenObject. width) {
    message = " This is square. "
  }
  else {
    message = " This is rectangle, but not a square. "
  }
  console.log(message);
}

// area - Returns the area of the rectangle
var area = function (givenObject) {
  var areaResult = givenObject.length * givenObject.width;
  console.log(areaResult);
}
// perimeter - Returns the perimeter of the rectangle
var perimeter = function (givenObject) {
  var perimeterResult = givenObject.length * 2 + givenObject.width * 2;
  console.log(perimeterResult);
}

isSquare(rectangleOne);
isSquare(rectangleTwo);
area(rectangleOne);
area(rectangleTwo);
perimeter(rectangleOne);
perimeter(rectangleTwo);


// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
var triangleOne = {
  sideA: 3,
  sideB: 4,
  sideC: 5
};
var triangleTwo = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var triangleThree = {
  sideA: 3,
  sideB: 3,
  sideC: 3
};

// isEquilateral - Returns whether the triangle is equilateral or not
var isEquilateral = function (triangleObject) {
  var a = triangleObject.sideA;
  var b = triangleObject.sideB;
  var c = triangleObject.sideC;
  var message;
  if ( a === b && b === c ) {
    message = " This triangle is equilateral. "
  } else {
    message = " this triangle is not equilateral. "
  }
  console.log(message);
}
// isIsosceles - Returns whether the triangle is isosceles or not
var isIsosceles = function (triangleObject) {
  var a = triangleObject.sideA;
  var b = triangleObject.sideB;
  var c = triangleObject.sideC;
  var message;
  if ( a === b || b === c || a === c ) {
    message = " This triangle is isosceles. "
  } else {
    message = " this triangle is not isosceles. "
  }
  console.log(message);
}
// area - Returns the area of the Triangle
var area = function (triangleObject) {
  var a = triangleObject.sideA;
  var b = triangleObject.sideB;
  var c = triangleObject.sideC;
  var s = a + b + c;
  var areaResult = Math.round(Math.sqrt( s * ( s - a ) * ( s - b) * ( s - c )));
  console.log(areaResult);
}
// isObtuse - Returns whether the triangle is obtuse or not

var isObtuse = function (triangleObject) {
  var a = triangleObject.sideA;
  var b = triangleObject.sideB;
  var c = triangleObject.sideC;
  var message;
  if ( Math.pow( a,2 ) + Math.sqrt( b,2 ) < Math.pow( c,2 ) ||
       Math.pow( b,2 ) + Math.pow( c,2 ) < Math.pow( a,2 ) ||
       Math.pow( a,2 ) + Math.pow( c,2 ) < Math.pow( b,2 )) {
         message = "This is a obtuse triangle."}
         else {
           message = "This is not a obtuse triangle."
         }
  console.log(message);
}

isEquilateral(triangleOne);
isEquilateral(triangleTwo);
isEquilateral(triangleThree);

isIsosceles(triangleOne);
isIsosceles(triangleTwo);
isIsosceles(triangleThree);

area(triangleOne);
area(triangleTwo);
area(triangleThree);

isObtuse(triangleOne);
isObtuse(triangleTwo);
isObtuse(triangleThree);
