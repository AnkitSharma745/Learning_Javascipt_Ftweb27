function check_prime_or_not(number){
let count=0;
for(let i=1; i<=number;i++){
  if(number%i==0){
    count++;
  }
}

if(count==2){
  return true 
}
else{
    return false;
  }
}

for(let j=1; j<=10;j++){
 let result= check_prime_or_not(j);//1,2,3,4,5,6,---10

  (result==true) ? console.log(j," is prime"): console.log(j, "is not a prime")

}