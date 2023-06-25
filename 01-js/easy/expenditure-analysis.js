/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var ans = {};
  for(t of transactions){
    if(!ans.hasOwnProperty(t.category)){
      ans[t.category] = t.price;
    }
    else{
      ans[t.category]+=t.price;
    }
  }

  var res = [];
  for(i in ans){
    res.push({"category": i,"totalSpent": ans[i]});
  }
  return res;
}
// const Transactions = [
//   { "itemName": "horlicks", "category":"Food", "price": 20, "timestamp": new Date(2020, 7, 14)},
//   { "itemName": "mangoshake", "category":"Food", "price": 20, "timestamp": new Date(2020, 7, 14)},
//   { "itemName": "addidas", "category":"Clothing", "price": 1000, "timestamp": new Date(2020, 7, 14)},
//   { "itemName": "nike", "category":"Clothing", "price": 2000, "timestamp": new Date(2020, 7, 14)}
// ];
// console.log(calculateTotalSpentByCategory(Transactions));
module.exports = calculateTotalSpentByCategory;
