/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categorymap = {}
  for(let i = 0;i<transactions.length;i++){
    if(transactions[i].category in categorymap){
      categorymap[transactions[i].category] += transactions[i].price
    }
    else{
      categorymap[transactions[i].category] = transactions[i].price
    }
  }
  const ans = []
  for(category in categorymap){
    ans.push({category: category, totalSpent:categorymap[category]})
  }
  return ans
}

console.log(calculateTotalSpentByCategory([
  { itemName: 'Item 1', category: 'Shoes', price: 10.0, timestamp: '2023-06-13' },
  { itemName: 'Item 2', category: 'Shirts', price: 20.0, timestamp: '2023-06-13' },
  { itemName: 'Item 3', category: 'Shoes', price: 15.0, timestamp: '2023-06-13' },
  { itemName: 'Item 4', category: 'Shirts', price: 12.0, timestamp: '2023-06-13' },
  { itemName: 'Item 5', category: 'Watch', price: 8.0, timestamp: '2023-06-13' },
]))

module.exports = calculateTotalSpentByCategory;
