let array= [1,2,3,4,5,6,7,1,2,3,5,5];

//print the elements whos occurance is 2 or more
// 1,2,3,5

// 1. convert this array into a object.
// 2. run a loop over this object---> for .. in loop
let object= {};
for(let i=0;i<array.length;i++){
  if(object[array[i]]==undefined){
    object[array[i]]=1;
  }
  else{
    object[array[i]]++;
  }
}
console.log(object);

// for...in loop


let sum=0;
for(let key in object){
  if(object[key]>=2){
    // console.log(Number(key));
    sum= sum+ Number(key);
  console.log(object[key]);// the values of the object
    
  }
}

console.log(sum);

//add the keys whos occurance is greater or equal 2;
