var nums = [1,2,3,4,5];
var square = function (x) {
  var sqrt = [];
   for (var i=0; i < x.length; i++){
     sqrt += Math.pow(x[i],2);
     root = Math.sqrt(x[i]);
    //  console.log("Square:");
    //  console.log(sqrt);
    //  console.log("Root:");
    //  console.log(root);

   }
  console.log(sqrt.split().join(""));
}

square(nums);
