// ES6---> ecma script 6
// it gives us new updates for javascript

//3 ways of declaring a variable.

//ES5
// var a= 10;
// console.log(a);

//ES6
//let and const

// var a=5;
// let b= 6;
// const c= 7;
// // c= 10;
// console.log(a,b,c);

// const values cannot be changed once assgined.

// {
// //block of code.
//   // var , let and const.
// }

// var a=10;
// {
//   var a= 40;
// }
//   console.log(a);

// {
//   var password= "goku"
// }

// console.log(password);


// let a= 10;

// {
//   var b= 20;
  
// }

// console.log(b);

const x= 4;

{
  const x= 6;
  console.log(x);//x
}
console.log(x); //4


//let var and const are same when we write outside the block of scope.
//const values cannot be reassigned.

//but the let and const are different in block of scope, as they are secure inside that scope.


//global scope
{
//block scope.
}