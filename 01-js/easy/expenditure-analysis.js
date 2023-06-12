/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  map1 = new Map()
  for (let i = 0; i < transactions.length; i++) {
    category = transactions[i].category
    price = transactions[i].price
    if (map1.has(category)) {
      map1.set(category, map1.get(category) + price)
    }
    else {
      map1.set(category, price)
    }
  }
  answer = []
  for (let [key, value] of map1) {
    answer.push({ category: key, totalSpent: value })
  }
  return answer
}

module.exports = calculateTotalSpentByCategory;
