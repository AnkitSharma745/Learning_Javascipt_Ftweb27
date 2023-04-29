let arr= ["goku", "gohan", "gon", "luffy","google", "google", "nami"];

//find out how many words are starting with the letter "g";
// output-->5

let count=0;

for(let i=0;i<arr.length;i++){
  // console.log(arr[i][0]);
  if(arr[i][0]=="g"){
    count++;
  }
}

console.log(count);