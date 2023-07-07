/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions = []) {
  const reduced = transactions.reduce(function (acc, item) {
    acc[item.category]
      ? (acc[item.category] += item.price)
      : (acc[item.category] = item.price);
    return acc;
  }, {});

  const keys = Object.keys(reduced);
  const result = keys.map((key) => ({
    [key]: reduced[key],
  }));

  return [...result];
}

module.exports = calculateTotalSpentByCategory;
