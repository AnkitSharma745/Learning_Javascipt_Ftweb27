let details= {
name: "goku",
  Father_name: "gohan",
  mother_name: "chichi",
  address: "hyderabad",
  age: 123,
  pin_code: 500032,
  married: false,
  friend: "vegita"
}

//delete the key and value in object.

delete details.friend; // dot notation

delete details["pin_code"]; // bracket notation

console.log(details);