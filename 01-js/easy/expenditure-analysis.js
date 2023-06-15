/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let expense = {};

  transactions.forEach(t => {
    if(expense[t.category]) {
      expense[t.category] += t.price;
    }
    else {
      expense[t.category] = t.price;
    }
  });

  let ret = [];
    for(let key in expense) {
      ret.push({category: key, totalSpent: expense[key]});
    }

  return ret;
}

module.exports = calculateTotalSpentByCategory;
