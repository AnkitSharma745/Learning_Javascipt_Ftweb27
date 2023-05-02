let object = {
  array: ["luffy", "zoro", "sanji", "nami"],
//write a function to print each and every element inside the array.
//write the function inside the object.

  print: function (){
    for(let i=0; i<this.array.length; i++){
      console.log(this.array[i])
    }
  }
  
}

object.print();