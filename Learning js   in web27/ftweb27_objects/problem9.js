let details= {
name: "goku",
  Father_name: "gohan",
  mother_name: "chichi",
  address: "hyderabad",
  age: 123,
  pin_code: 500032,
  married: false
}

//only for object ---> for..in loop

for(let b in details){
  // console.log(b); it is giving me all the keys
  //only one way.
  // console.log(details[b]); // it will all the values inside the object.

  console.log(b + ":"+ details[b]);
  
}

