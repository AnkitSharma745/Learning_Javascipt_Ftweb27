let a= [1,-1,-2,-3,6,0];

//replace the negative elements or number with 0;
// [1,0,0,0,6,0]--> output

for(let i=0;i<a.length;i++){

  if(a[i]<0){
    a[i]=0;
  }
}

console.log(a);