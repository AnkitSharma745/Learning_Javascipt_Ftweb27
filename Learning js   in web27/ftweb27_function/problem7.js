

function check_even_or_odd(number){
  if(number%2==0){
    console.log(number," is even");
  }
  else{
    console.log(number, "is odd");
  }
}

// check_even_or_odd(3);
// check_even_or_odd(4);
// check_even_or_odd(5);
// check_even_or_odd(6);

for(let i=1; i<=10;i++){
  check_even_or_odd(i);//1,2,3,4,---10
}
