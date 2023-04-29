// prime number ===> numbers which have only two factor. or it should be divisible by two number

// number should be divisible by 1 and number itself

let number =7// prime number.
let factor=0
for(let i=1; i<=number;i++){

  if(number%i==0){
    factor++;
  }
}
// console.log(factor)//2
if(factor==2){
  console.log(number,"is a prime number");
}
else{
  console.log(number,"is not a prime number");
}