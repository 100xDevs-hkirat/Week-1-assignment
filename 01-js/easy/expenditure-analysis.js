/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let temp = {};
  for (i of transactions) {
    temp[i.category] = (temp[i.category] === undefined) ? i.price : temp[i.category] + i.price;
  }
  let result = [];
  for (i of Object.keys(temp)) {
    result.push({[i] : temp[i]});
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
