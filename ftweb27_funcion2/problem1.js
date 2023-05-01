function even_or_odd(a){
  if(a%2==0){
    return true; //even number
  }
  else{
    return false; //odd number
  }
}



let array=[1,2,3,4,5,6,7,8,9];
//even number in this array
let count=0;
for(let i=0; i<array.length;i++){
  
let result= even_or_odd(array[i]);
  
  if(result==true){
    count++;
  }
}

console.log(count);


let array2 =[ 1,34,554,67,7,88,99];
let count_even=0;
let count_odd=0;
for(let j=0;j<array2.length;j++){

  let result= even_or_odd(array2[j])
  if(result==true){
    count_even++;
  }
  else{
    count_odd++;
  }
}

console.log(count_even,count_odd);


let array3= [2,454,6567,787,345,3458678];
// if even numbers are more print the count of even number.
//   else if odd number numbers are more print the count of odd number.
// else if both numbers count are same print both are same.

