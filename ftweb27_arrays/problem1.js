//print number 10-1 skipping the odd number in it.
// 10
// 8
// 6
// 4
// 2

// 1. starting
// 2. condition
// 3. output--> logic
// 4. ince/dec

//for loop

// for(let i=10;i>=1;i--){
//   if(i%2==0){
//   console.log(i);
//   }
// }

let i=10;

while(i>=1){
  if(i%2==1){
    i--;
    continue;
  }
  console.log(i);
  i--;
}

//please do a dry run of this while loop.