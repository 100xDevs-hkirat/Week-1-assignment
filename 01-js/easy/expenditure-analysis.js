/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var answer = {};
  for (var i = 0; i < transactions.length; i++) {
    if (answer.hasOwnProperty(transactions[i].category)) {
      answer[transactions[i].category] += transactions[i].price;
    } else {
      answer[transactions[i].category] = transactions[i].price;
    }
  }
  var result = [];
  for (const object of Object.keys(answer)) {
    var value = { category: object, totalSpent: answer[object] };
    result.push(value);
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
