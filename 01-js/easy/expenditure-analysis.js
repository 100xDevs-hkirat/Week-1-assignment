/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const red = transactions.reduce( (categorySpends, transaction) => {
    const category = transaction.category
    const expenditure = transaction.price
    categorySpends.set(category, (categorySpends.get(category) || 0) + expenditure)
    return categorySpends
  }, new Map())
  const ret =  Array.from(red).map(([key, value]) => {
    return {category: key, totalSpent: value}
  })
  return ret
}

module.exports = calculateTotalSpentByCategory;
