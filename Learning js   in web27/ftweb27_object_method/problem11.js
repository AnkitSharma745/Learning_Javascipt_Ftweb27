// let array= ["luffy", "goku", "sanji"];

// ["yfful", "ukog", "ijnas"];--> new array

let object= {
  array:["luffy", "goku", "sanji"],

  reverseArray: function (){
    let newArray= [];
    for(let i=0;i<this.array.length;i++){
      let reverse= "";
      for(let j=this.array[i].length-1; j>=0;j--){
        reverse += this.array[i][j];
        //we are addding each character into the reverse string.
      }
      newArray.push(reverse); // we are pushing the reveresed string into array
    }
  console.log(newArray);
  }
}

object.reverseArray();