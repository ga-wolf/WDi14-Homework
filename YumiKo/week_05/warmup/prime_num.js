console.log("Let's find Prime numbers");

//
var num_array = [];
var new_array = function () {
for(i=1; i<=given_number; i+=1){
num_array.push(i)
}
}

var given_number=200;

var find = function (given_number) {


  new_array();

  for(i=2; i<given_number; i+=1) {
    for(j=0; j<given_number; j+=1) {
      if (num_array[j]%i === 0 && j+1!=i) {
        // if( j!=i ){
          num_array[j]=""
        // }
      }
    }
  }
  // debugger;
  //
  // num_array.forEach(function(){
  //   if(this != ""){
  //     result.push(this)
  //   }
  //   return result;
  // })

  var result= [];

    for(s=1; s<given_number; s+=1) {
      // debugger;
      if (num_array[s]!== "") {
        // if( j!=i ){
          result.push(num_array[s])
        // }
      }
    }


  return result;
}


//
// for(j=0; j<num_array; j+=1) {
//   if (num_array[j]!== 0) {
//     // if( j!=i ){
//       result.push(num_array[j])
//     // }
//   }
// console.log(result);
// }
//
//
// num_array.forEach(function(){
//   if(this != "") {
//     result.push(this)
//   }
//   return result;
// })
