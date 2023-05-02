//sort--> takes an array and return an array;
//it will also return any array;

let arr= [944,11,4,600,584,4,3,2,1];

let result= arr.sort(function (a,b){
  // return a-b// low number to high
  return b-a // high to low
}) 

console.log(result);