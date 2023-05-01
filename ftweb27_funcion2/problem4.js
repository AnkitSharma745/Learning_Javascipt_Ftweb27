// [1,2,3]==> '123'
// write a function to make array to string.

  // your chose---> console.log() or return;

let arr= [1,2,3];

function array_to_string(a){
  let output= "";
  for(let i=0;i<a.length;i++){
    output= output+ a[i];
  }
  // console.log(output);
  return output
}

let result= array_to_string(arr);
  
console.log(result);

  
  