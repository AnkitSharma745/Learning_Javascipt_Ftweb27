//p--->P

//y--->Y

//z-->Z

// 1. array--> small case character.
// 2. array2---> capital case character

let small_case= ["a", "b", "c","d"];

let capital_case= ["A","B","C", "D"];

let character= "d" //A

for(let i=0; i<small_case.length;i++){
  if(small_case[i]== character){
    character= capital_case[i];
  }
}

console.log(character);