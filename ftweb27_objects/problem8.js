let details= {
name: "goku",
  Father_name: "gohan",
  mother_name: "chichi",
  age: 123,
  pin_code: 500032,
  married: false,
  friend: "vegita",
  hobbies:["cricket", "pc games", "football"],
  location: {
    city: "hyderbad",
    state: "telangana",
    pin_code: 12451,
    landmark: "near hospital"
  }
}

console.log(details.location.state);

console.log(details["location"]["pin_code"]);