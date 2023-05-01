let arr= [1,2,3,4,5,6]
  // output= [1,4,9,16,25,36]

function power(arr,number){
 let output= [];
  for(let i=0;i<arr.length;i++){
    output.push(arr[i]** number);
  }
  // console.log(output);
  return output;
}

let result= power(arr,2);

