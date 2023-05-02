let details= {
  name: "goku",
  age: 21,
  address: "delhi",
  print: function() {
   console.log(this.name);

    console.log(this.age);
    console.log(this.phone);// here there is no key with phone so that js is giving undefined as defult value.
  }

}

details.print();
// this is special keyword which is used inside the object.

// this keyword will check all the key which are matching after this word ( this.age)
// if there are any matching that value will be assigned to the this.age place.