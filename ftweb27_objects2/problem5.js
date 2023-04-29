let array= [1,2,1,2];
// convert this array into object, this object should have how many times each element is present in the array.

// {
//   "1":2,
//   "2":2
// }

let object= {};

for(let i=0;i<array.length;i++){
  if(object[array[i]]== undefined){
    object[array[i]]=1;
  }
  else{
    object[array[i]]++;
  }
}

console.log(object);
