let array= [-100000,2,-70,3,-30];
//minimum value = -70;
//maximum value= 3;
let min= +Infinity// it will give us the highest value in javascript.

let max= -Infinity// it will give use the lowest value in javascript.

for(let i=0;i<array.length;i++){
    if(array[i]<min){
      min= array[i];
    }
  if(array[i]>max){
    max= array[i];
  }
}
console.log("min:",min, "max:",max);