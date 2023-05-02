let a= -1000000000000;
let b= 1;
let c= -34;

// if((a>b) && (a>c)){
//   console.log("a is greater");
// }
// else if((b>a) && (b>c)){
//   console.log("b is greater");
// }
// else {
//   console.log("c is greater");
// }

((a>b) && (a>c)) ? console.log("a is greater") : ((b>a) && (b>c)) ? console.log("b is greater") : console.log("c is greater");