let form= {
  detail: function(name, age){
    console.log(name);
    console.log(age);
  }
}
// form.detail("goku",12);// dot notation.

form["detail"]("goku",12); // bracket notation.