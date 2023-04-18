
function add(keys, values) {
    const array3 = {};
  
     keys.forEach((element, index) => {
      array3[element] = values[index];
     });
  
    return array3;
  }
  
  const array =["Cereals","Fruits","Bread","Cheese","Eggs","Rice","Pasta","Snacks","Drinks","tomato"]
  const array2 =[5,10,20,30,40,50,60,70,80,90]
  const array3 = add(array, array2);
   console.log(array3);
   array3.banana = 45
   console.log(array3);
//Write a function to update the stock quantity of an existing item.
 function update(array3){
    // return array3.Eggs
    
    array3.Eggs=90
    return array3
 }

console.log(update(array3))

//Write a function to calculate the total number of items in the inventory.
function total (){
    const values = Object.values(array3);

 const sum = values.reduce((accumulator, value) => {
  return accumulator + value;
 }, 0);

console.log(sum); 
}
total()

//Write a function to find the item with the lowest stock quantity.
// function finding(array3){
// // // console.log(Math.min(array3.values));
// console.log(Math.min(...array3.values));
// }
// finding()

let keys=Object.keys(array3)
let minkey=keys[0]
for(let i = 1; i < keys.length; i++){
    let minimum = array3[minkey];
    let value = array3[keys[i]];
    if(minimum > value) minkey = keys[i];
}

console.log(minkey, array3[minkey]);








