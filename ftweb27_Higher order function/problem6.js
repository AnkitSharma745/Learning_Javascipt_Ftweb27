let array= ["goku",2,3,4] // input will always be any array

//map ---> will return us a new array;
//HOF--> it take another function as an argument

 let result= array.map(function (a,b){
   
   // console.log(a);// it will iterate over all the vlaue
   // console.log(b); // it will iterate over all the index in that array;

   return (a**2);
  
 })

console.log(result);

