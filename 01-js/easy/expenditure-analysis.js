/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


const Transactions = [
  { "itemName": "horlicks", "category":"Food", "price": 20, "timestamp": new Date(2020, 7, 14)},
  { "itemName": "mangoshake", "category":"Food", "price": 20, "timestamp": new Date(2020, 7, 14)},
  { "itemName": "addidas", "category":"Clothing", "price": 1000, "timestamp": new Date(2020, 7, 14)},
  { "itemName": "nike", "category":"Clothing", "price": 2000, "timestamp": new Date(2020, 7, 14)}
];


function calculateTotalSpentByCategory(transactions) {
   let food = 0;

  if(transactions.category === "Food"){
    transactions.price += transactions.price;
    
    console.log(transactions.price)
   
    food = transactions.price;

  }

  return [{"food": food}];
}

console.log(calculateTotalSpentByCategory(Transactions))

module.exports = calculateTotalSpentByCategory;
