//create a object and write your length and breadth inside the object as keys with their values.

// write  a function for calculating area of that length and breadth

//write a function to calculate the perimeter of that length and breadth

let object= {
  length:5,
  breadth:4,
  area: function (){
    console.log("area-", (this.length* this.breadth));
  },
  perimeter: function (){
    console.log("perimeter-", 2*(this.length+ this.breadth));
  }
  
}

object.area();
object.perimeter();