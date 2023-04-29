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

// update the already present data.
details.married= true;// dot notation.

details["address"]= "delhi"// bracket notation.

console.log(details);
