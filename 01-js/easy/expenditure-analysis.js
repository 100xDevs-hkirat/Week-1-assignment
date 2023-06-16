/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
function calculateTotalSpentByCategory(transactions) {
  
  let final_op = {};
  for (let i = 0; i < transactions.length; i++) {
    let item = transactions[i]
    if (final_op[item.category]) {
      final_op[item.category] += item.price;
    } else {
      final_op[item.category] = item.price;
    }
  }
  console.log(final_op)
}

let transactions = [
  { itemName: "fanta", category: "drink", price: 25, timestamp: 121 },
  { itemName: "sprite", category: "drink", price: 25, timestamp: 121 },
  { itemName: "samosa", category: "food", price: 20, timestamp: 121 },
  { itemName: "kachori", category: "food", price: 20, timestamp: 121 },
];
let op = calculateTotalSpentByCategory(transactions);
console.log(op);

module.exports = calculateTotalSpentByCategory;
