//google---> oogelg
// 1. divide this string into two equal half.
//   google---> 6/2
// a. goo --> starting point--> (str.length/2)-1

// b. gle --> s p--> (str.length-1)

let str= "aakash"//oogelg;

let final= "";
for(i=(str.length/2)-1; i>=0;i--){

  final= final +str[i];
}

// console.log(final); //oog

for(let i=str.length-1;i>=str.length/2;i--){

  final= final + str[i];
}
console.log(final);