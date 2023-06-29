/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
function calculateTotalSpentByCategory(transactions) {
  let answer = {};
  for (let i = 0; i < transactions.length; i++) {
    let item = transactions[i];
    if (answer[item.category]) {
      answer[item.category] = answer[item.category] + item.price;
    } else answer[item.category] = item.price;
  }

  let array = Object.keys(answer);
  let finalAnswer = [];
  for (let i = 0; i < array.length; i++) {
    finalAnswer.push({
      category: array[i],
      totalSpent: answer[array[i]],
    });
  }
  return finalAnswer;
}

module.exports = calculateTotalSpentByCategory;
