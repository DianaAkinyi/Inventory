
// Create an array containing the names of all items in the inventory maximum of 10.
const array =["Cereals","Fruits","Bread","Cheese","Eggs","Rice","Pasta","Snacks","Drinks","tomato"]
// Create a separate array with the corresponding stock quantities of each item maximum of 10.
const array2 =[5,10,20,30,40,50,60,70,80,90]
//creating an inventory
const array3 = {};
  
     array.forEach((element, index) => {
      array3[element] = array2[index];
     });
  console.log(array3)
//   Write a function to add a new item to the inventory, updating both arrays.
function adding(){
    array3["banana"]=5

console.log(array3)
}
adding()
// Write a function to update the stock quantity of an existing item.
function update(array3){
    
    array3.Eggs=90
    return array3
 }

console.log(update(array3))

// Write a function to calculate the total number of items in the inventory.
function total (){
    const values = Object.values(array3);

 const sum = values.reduce((accumulator, value) => {
  return accumulator + value;
 }, 0);

console.log(sum); 
}
total()
// Write a function to find the item with the lowest stock quantity.
 

    let keys=Object.keys(array3)
    let minkey=keys[0]
    for(let i = 1; i < keys.length; i++){
        let minimum = array3[minkey];
        let value = array3[keys[i]];
        if(minimum > value) minkey = keys[i];
    }
    
    console.log(minkey, array3[minkey]);
    
    





