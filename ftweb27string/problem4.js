let array= [1,2,3,4,5,6,7];

// even: 3  odd: 3 --> output.

let even_count=0;
let odd_count=0;

for(let i=0;i<array.length;i++){
  if(array[i]%2==0){
    even_count++;
  }
  else{
    odd_count++;
  }
}
console.log("even:",even_count, "odd:", odd_count);