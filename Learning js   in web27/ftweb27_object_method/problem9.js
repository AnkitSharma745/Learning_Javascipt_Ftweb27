//rest parameter ---> it is used to convert all the argument to array format and store to a variable


let print= function (...b){
  // console.log(b);
  for(let i=0; i<b.length;i++){
    console.log(b[i]);
  }
}


print(1,2,3,4,5,66,7,78,8,8,9,9,90,0,6566,7687,87, "hi", true);