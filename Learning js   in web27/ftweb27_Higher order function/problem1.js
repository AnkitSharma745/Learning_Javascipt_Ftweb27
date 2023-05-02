let form= {
   name: "jahir",
  age:"12",
  place: "india",
  marks: {
    eng:100,
    math: 101,
    phy: 80
  },
  submit: function (){
    console.log(this.name);
    console.log(this.age);
    console.log(this.place);
    console.log(this.marks.eng);
    console.log(this.marks.math);
    console.log(this.marks.phy);
  },
  reset: function (){
    this.name= "";
    this.age="";
    this.place= "";
    
    console.log("name:",this.name);
    console.log("age:",this.age);
    console.log("place:",this.place);
  },
  total: function (){
    console.log(this.marks.eng + this.marks.math+ this.marks.phy);
  }
}

form.submit();
form.reset();
form.total();