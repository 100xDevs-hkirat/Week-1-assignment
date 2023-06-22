/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {}

  for (let transaction of transactions) {
      const { category, price } = transaction;
      if (categoryMap.hasOwnProperty(category)) {
          categoryMap[category] = +price
      }
      else {
          categoryMap[category] = price
      }
  }
  const result = [];

  for (let category in categoryMap) {
      const totlSpent = categoryMap[category]
      result.push({ [category]: totlSpent })
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;

const transactions = [
  {
      itemName: 'Item 1',
      category: 'Food',
      price: 10,
      timestamp: '2023-06-20T10:00:00Z',
  },
  {
      itemName: 'Item 2',
      category: 'Food',
      price: 15,
      timestamp: '2023-06-20T12:00:00Z',
  },
  {
      itemName: 'Item 3',
      category: 'Clothing',
      price: 50,
      timestamp: '2023-06-20T14:00:00Z',
  },
  {
      itemName: 'Item 4',
      category: 'Electronics',
      price: 200,
      timestamp: '2023-06-20T16:00:00Z',
  },
  {
      itemName: 'Item 5',
      category: 'Clothing',
      price: 30,
      timestamp: '2023-06-20T18:00:00Z',
  },
];

const res = calculateTotalSpentByCategory(transactions)
console.log(res)