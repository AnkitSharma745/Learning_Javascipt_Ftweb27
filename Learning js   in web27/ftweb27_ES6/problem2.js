let arr= ["harshdeep", "luffy","tanumay","ravi","deepak","tapish", "nishant", "luffy"];

// output= [9,5,7,4,6,6,7,5]--> map

let x= arr.map(function (a){
  // console.log(a.length);
  return a.length;
}) .filter(function(u){
  // console.log(u);
  if(u%2==0) {
    return u;
  }
})

console.log(x);
// [9,5,7,4,6,6,7,5]

// let y=  x.filter(function(u){
//   // console.log(u);
//   if(u%2==0) {
//     return u;
//   }
// })

// console.log(y);
  // [4,6,6]--> filter