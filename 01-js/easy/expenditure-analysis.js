/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
const transactions=[ { itemName : "Hide and Seek", category : "food", price : 60, timestamp : new Date().getTime() },
{ itemName : "Maggi", category : "food", price : 24, timestamp : new Date().getTime() },
{ itemName : "T-Shirt", category : "clothing", price : 650, timestamp : new Date().getTime() },
{ itemName : "Shirt", category : "clothing", price : 2800, timestamp : new Date().getTime() },
{ itemName : "Iphone", category : "electronics", price : 80000, timestamp : new Date().getTime() }]

function calculateTotalSpentByCategory(transactions) {

  var hashmap = new Map();

  
  for(let i=0;i<transactions.length;i++)
  {
      if(hashmap.has(transactions[i].category))
      {
        //hashmap.set(transactions[i].categroy, hashmap.(transactions[i].category) + transactions.price);
        var temp = hashmap.get(transactions[i].category);
        hashmap.delete(transactions[i].category);
        hashmap.set(transactions[i].category, temp + transactions[i].price);
      }
      else
      {
        hashmap.set(transactions[i].category,transactions[i].price); 
      }
    
  }
let text = "";
hashmap.forEach (function(value, key) {
  text = key + ' = ' + value ;
  console.log(text);
})

  return hashmap;
}

calculateTotalSpentByCategory(transactions);
//module.exports = calculateTotalSpentByCategory;
