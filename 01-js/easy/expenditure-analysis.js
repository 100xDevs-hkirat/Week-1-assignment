/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const output = new Map();
  for (var index = 0; index < transactions.length; index++) {
    var category = transactions[index].category
    var price = transactions[index].price
    if (!output.has(category)) {
      output.set(category, price)
    }
    else {
      var addToPrice = output.get(category)
      output.set(category, addToPrice + price)
    }
  }
  let answer = []
  output.forEach(function (value, key) {
    answer.push({ [key]: value });
  });
  return answer;
}

// const transactions = [
//   { itemName: 'Item 1', category: 'Category A', price: 10, timestamp: '2023-06-01' },
//   { itemName: 'Item 2', category: 'Category B', price: 20, timestamp: '2023-06-02' },
//   { itemName: 'Item 3', category: 'Category A', price: 15, timestamp: '2023-06-03' },
//   { itemName: 'Item 4', category: 'Category C', price: 12, timestamp: '2023-06-04' },
//   { itemName: 'Item 5', category: 'Category B', price: 8, timestamp: '2023-06-05' }
// ];

// console.log(calculateTotalSpentByCategory(transactions));


module.exports = calculateTotalSpentByCategory;
