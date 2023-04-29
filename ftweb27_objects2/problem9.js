let flipkart=[
  {type: "monitor", brand:"MSI", price:600},
  {type: "camera", brand:"canon", price:2000},
  {type: "toy", brand:"lego", price:1000},
  {type: "printer", brand:"hp", price:500},
  {type: "monitor", brand:"zebronic", price:300}
]

let query= "monitor"

for(let i=0; i<flipkart.length;i++){
  if(flipkart[i].type== query){
    console.log(flipkart[i]);
  }
}