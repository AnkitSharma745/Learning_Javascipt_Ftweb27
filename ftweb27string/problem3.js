let a= [1,2,3,-1,-2,-3]

//try replaying all the positive element to 1 and all the negative elements to 0;

// [1,1,1,0,0,0] ---> output

for(let i=0;i<a.length;i++){
  if(a[i]>0){
    a[i]=1;
  }
  else{
    a[i]=0;
  }
}
console.log(a);