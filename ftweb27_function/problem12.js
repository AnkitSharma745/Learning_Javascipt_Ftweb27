let a= "Z";// not a small

function check_smallcharacter(a){
  let lower= "abcdefghijklmnopqrstuvwxyz";
  for(let i=0; i<lower.length;i++){
    if(a== lower[i]){
     return true;
    }
  }
 return false;
}

let result= check_smallcharacter(a);

console.log(result);