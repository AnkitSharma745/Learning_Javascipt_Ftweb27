// take any array --> consists of positive number.
// 1. convert this array into object with their occurancies.

// 2. delete the occurancies who are even in number.

// 3. print the object.

let object= {
"1":2,
"2":2,
"3":2,
"4":2,
"5":1, //--->
"6":1,
"7":3,
"8":4
};

// delete object[key]

for(let  key in object){
  // console.log(key); // it will gives us all the key
  if(object[key]%2==0){
    delete object[key];
  }
}
console.log(object);