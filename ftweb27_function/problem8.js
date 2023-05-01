//how to check if a number is prime or not.


//1. write the logic for checking a number is prime or not.
//2. convert it into a function.
//3 run a loop over 1-10 and call the function (prime number);

function check_prime_or_not(number){

let count=0;
for(let i=1; i<=number;i++){
  if(number%i==0){
    count++;
  }
}

(count==2) ? console.log(number, "is prime") : console.log(number, "is not a prime");

}

for(let j=1; j<=10;j++){
  check_prime_or_not(j);//1,2,3,4,5,6,---10
}
// check_prime_or_not(4);
// check_prime_or_not(5);