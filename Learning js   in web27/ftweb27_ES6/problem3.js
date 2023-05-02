//take an array

let array= ["A","sachin","pankaj","ram","venky","amols"];

//1. filter the odd length strings
// ["A","ram","venky","amols"] --> filter

 let x= array.filter(function(a){
  if(a.length%2==1){
    return a;
  }
}).forEach(function(a,b){
  if(b%2==1){
    console.log(a);
    return a;
  }
})

console.log(x);

  // console.log(x);

// x.forEach(function(b,a){
//   if(a%2==1){
//     console.log(b);
//   }
// })



  

  // 2. console.log the odd index element.
// ["ram", "amols"]--> map, filter, forEach;
  