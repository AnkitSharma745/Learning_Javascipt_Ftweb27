let obj= {};

//1. adding into the object.
obj.name= "masai";
obj["age"]=23;

console.log(obj);

//2. update the values inside the object.

obj.age= 56;

console.log(obj);

delete obj.name;
console.log(obj);

// run a loop over the object.
for(let key in obj){
  console.log(key);// to print keys in object.

  console.log(obj[key]); //it gives us all the values inside the object.
}