let array= ["luffy","luffy", "gohan", "goku", "goku","gohan"];

// {
//   luffy:2,
//   gohan:1,
//    goku:2
// }

let object= {};

for(let i=0;i<array.length;i++){
  if(object[array[i]]== undefined){
    object[array[i]]=1;// adding element into object.
  }
  else{
    object[array[i]]++; //update the value.
  }
}

console.log(object);