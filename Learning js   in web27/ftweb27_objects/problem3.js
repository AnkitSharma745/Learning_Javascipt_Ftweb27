let details= {
name: "goku",
  Father_name: "gohan",
  mother_name: "chichi",
  address: "hyderabad",
  age: 123,
  pin_code: 500032,
  married: false
}

//if I want to specifically print a value inside of object.


//1 way.
//dot notation.
console.log(details.name); // goku
console.log(details.address);// hyderabad

//2 way.
//bracket notation.
console.log(details["age"]);// 123;
console.log(details["married"]);// false;