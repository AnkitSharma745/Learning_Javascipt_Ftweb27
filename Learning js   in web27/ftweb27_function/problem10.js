//writ a function to mul to number and return the multiplied number.

function mul(a,b){
  return a*b;
}
let result= mul(1,2);//2

// function 
// use that muliplied number to check if it is even or odd. ---> console.log()
function check_number_even_or_odd(a){
  (a%2==0) ? console.log("even") : console.log("odd")
}

check_number_even_or_odd(result)


//use that multiplied number to check if it is less than 2 or not. ---> console.log()

function checking(b){
  if(b<2){
    console.log("less than 2")
  }
  else{
    console.log("not less than 2")
  }
}

checking(result);
