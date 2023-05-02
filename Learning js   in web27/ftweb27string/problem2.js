let array= [1,2,3,4,5];

// reverse the array 
// this is a new array-[5,4,3,2,1] ===> this should be our output.

let b= [];// empty array.

for(let i=array.length-1;i>=0;i--){
  b.push(array[i]);// here I will be pushing elements into the empty array.
}

console.log(b);