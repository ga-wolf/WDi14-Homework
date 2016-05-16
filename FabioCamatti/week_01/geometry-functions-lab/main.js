//GEOMETRY FUNCTION LAB
//
//Part 1, RECTANGLE


var rectangle = {

    area: function(a,b){
      return "it's area is " + (a*b);
    },
    isSquare: function(a,b){

        if(a===b){
           return "This is a square rectangle, ";
        } else {
            return "This is not a square rectangle, ";
        }
    },
    perimeter: function(a,b){
      return " and the perimeter is: " + (2*(a+b) + ".");
    }

};

console.log( rectangle.isSquare(4,4) + rectangle.area(4,4) + rectangle.perimeter(4,4));
// console.log("");
// console.log( rectangle.isSquare(2,3) + rectangle.area(2,3) + rectangle.perimeter(2,3));
// console.log("");


//Part 2, TRIANGLE

var triangle = {

    area: function(a,b,c){
           var p = (a+b+c)/2;
           var area = Math.sqrt((p*(p-a)*(p-b)*(p-c)));
           return ("The triangle area is: " + area.toFixed(2) )

    },
    isEquilateral: function(a,b,c){
        return (a === b && b === c)? " and it's an equilateral" : ""

    },
    isIsosceles: function(a,b,c){

            return ((a === b || a === c || b === c) && (a !== b || b !== c || b !== c))? " and it's a isosceles triangle." : ""

    },
    isObtuse: function(a,b,c){

            return ( (a !== b) && (a !== c) && (b !== c))? " and it's a scalene triangle." : ""

    },
    getTriangleType: function(a,b,c) {
	return (a === b && b === c) && 'equilateral' ||
		(a === b || a === c || b === c) && 'isosceles' ||
		'scalene';
}

};










//console.log(triangle.area(2,2,2) + " " + triangle.isEquilateral() + triangle.isIsosceles() + triangle.isObtuse());
console.log(triangle.area(3,4,4) +  triangle.isEquilateral(3,4,4) +  triangle.isIsosceles(3,4,4) + triangle.isObtuse(3,4,4));
// console.log("");
// console.log(triangle.area(5,5,5) + triangle.isEquilateral(5,5,5) + triangle.isIsosceles(5,5,5) + triangle.isObtuse(5,5,5));
// console.log("");
