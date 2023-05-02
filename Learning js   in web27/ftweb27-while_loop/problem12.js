//print the sum of all the multiples of 3 from 0-6;

//1 I want to find the sum
//2 . I only want the numbers which are divisible by 3
//3 0-5;

// 0,3,6--> 9;


let i=0;//starting point
let sum=0;

while(i<=6){
  if(i%3==0){
    // console.log(i);
     sum= sum+i;
  }
  i++;
}

console.log(sum);