/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var totalsByCategory = {};

  for (var i = 0; i < transactions.length; i++) {
    var transaction = transactions[i];
    var category = transaction.category;
    var price = transaction.price;

    if (totalsByCategory.hasOwnProperty(category)) {
      totalsByCategory[category] += price;
    } else {
      totalsByCategory[category] = price;
    }
  }
  var result = [];

  for (var category in totalsByCategory) {
    result.push({ [category]: totalsByCategory[category] });
  }

  return [];
}

module.exports = calculateTotalSpentByCategory;
