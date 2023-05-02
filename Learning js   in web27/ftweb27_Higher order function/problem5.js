// dress is the name of the function
let dress= function (){
  console.log("I bought a new dress which is blue in color");
}

function party(x,y){
 y();
  console.log(x, "i am going for a party");
}

party("yes", dress);

