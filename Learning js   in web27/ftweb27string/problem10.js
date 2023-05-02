let a= "masai school hi everyone"; // 4

//find out how many space then add 1 to it to get how many words.
let space=0
for(let i=0; i<a.length;i++){

  if(a[i]== " "){
    space++; // I am counting the spaces inside the string.
  }
}

console.log("words:",space+1);