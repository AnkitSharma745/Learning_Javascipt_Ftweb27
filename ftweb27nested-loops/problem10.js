//print the prime number from 1-1o 
//2,3,5,7;

for(let i=1; i<=10;i++){

  let number =i// prime number.
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
}