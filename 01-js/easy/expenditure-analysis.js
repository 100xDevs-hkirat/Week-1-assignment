/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = [];
  let result = [];
  for (let i = 0; i < transactions.length; i++) {
    if (!categories.includes(transactions[i].category)) {
      categories.push(transactions[i].category);
      result.push({ category: transactions[i].category, totalSpent: 0 });
    }
  }

  for (let i = 0; i < transactions.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (transactions[i].category === result[j].category) {
        result[j].totalSpent = result[j].totalSpent + transactions[i].price;
      }
    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
