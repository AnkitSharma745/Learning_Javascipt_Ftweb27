let student1= {
  name:"luffy", age:20, location:'hyd'
}
let student2= {
  name:"zoro", age:18, location:'hyd'
}
let student3= {
  name:"goky", age:100, location:'hyd'
}


let student= [
  {
  name:"luffy", age:20, location:'hyd'
},
  {
  name:"zoro", age:18, location:'hyd'
},
  {
  name:"goku", age:100, location:'hyd'
}
]


// console.log(student[0].name);
for(let i=0; i<student.length;i++){
  if(student[i].name== "goku"){
    console.log(student[i]);
  }
}