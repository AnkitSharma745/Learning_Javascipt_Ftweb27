//given an array of numbers find the average of all the even number.

let b= [1,2,3,4,5];

// 2+4/2----> 3

let sum=0;
let count=0;// it used to give us how many even number are there.

for(let i=0; i<b.length;i++){
     if(b[i]%2==0){
       sum= sum + b[i];// I am adding element.
       count++;
     }
}

console.log(sum/count)// average