//map always returns an array, --> store to a variable.
// if you miss return statement it will return an array with all the values as undefined.


//filter--> array.

let arr= [1,2,3,4,5,6,7]; //[2,4,6]

let result= arr.filter( function (b,c){
  // console.log(b);//values
  // console.log(c);
 if(b%2==0){
   return b;
 } 
});


console.log(result);

let result= arr.map(function (a){
  if(a%2==0){
    return a;
  }
  else{
    return "odd";
  }
})
console.log(result);

