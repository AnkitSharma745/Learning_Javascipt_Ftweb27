
// {
// //z:1
// //o:2
// //r:1;
// }

//1. take empty object.
//2. run a loop over the str.
//3. try to add chars into object.
// 4. write a logic in a way where the value only increase.
let str= "zoro";

let object= {};
for(let i=0;i<str.length;i++){
  if(object[str[i]]== undefined){
    object[str[i]]=1;// adding into the object.
  }
  else{
    object[str[i]]++;
  }
}
console.log(object);