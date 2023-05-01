//reverse a string.

//luffy--->yfful




// ["yfful", "ymmom", "dad", "oroz" ]---> result

//1. function---> which takes a string and returns the reverse of it.

//2. run a loop over this array and call the reverse function and push the result of the reverse inside the new array.

function reverse(str){
    let b= "";
  for(let i=str.length-1;i>=0;i--){
      b= b+ str[i];
  }
  // console.log(b);
  return b;
}

let array= ["luffy", "mommy", "dad", "zoro"];

let output= [];
for(let i=0;i<array.length;i++){
   let result= reverse(array[i]);
    output.push(result);
}

console.log(output);