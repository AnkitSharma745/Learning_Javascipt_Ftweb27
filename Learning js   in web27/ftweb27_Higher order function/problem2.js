
// find the element which are divisible by 2 and print them.

// 1. write a function wheather a number is divisible by 2 or not.
// if a number is not divisible return false.
//   if it is divisible return true

// 2// write a function ,
// use the above function and with the result of it, print the elements which result value is true


let arr= [1,2,3,4,5,6];

let divisible= (number,divide)=>{
  if(number%divide==0){
    return true;
  }
  else{
    return false;
  }
}

function print(arr,n){
  for(let i=0;i<arr.length;i++){
    if(divisible(arr[i],n)== true){
      console.log(arr[i]);
    }
  }
}
print(arr,3);