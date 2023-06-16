/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let map = new Map()
  let ans = []
  for (let i = 0; i < transactions.length; i++) {
    if(map.has(transactions[i].category)){
      map.set(transactions[i].category, map.get(transactions[i].category)+transactions[i].price)
    } else {
      map.set(transactions[i].category, transactions[i].price)
    }
  }
  map.forEach (function(value, key) {
    // console.log(key + ' = ' + value);
    ans.push({key,value})
  })
  return ans
}
calculateTotalSpentByCategory(transactions)

module.exports = calculateTotalSpentByCategory;
