/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const map = new Map();
  for (let i = 0; i < transactions.length; i++) {
    if (map.has(transactions[i].category)) {
      map.set(transactions[i].category, map.get(transactions[i].category) + transactions[i].price);
    } else {
      map.set(transactions[i].category, transactions[i].price);
    }
  }
  // console.log(Array.from(map).map(([key, val]) => ({ [key]: val })));
  return Array.from(map).map(([key, val]) => ({ [key]: val }));
}

calculateTotalSpentByCategory([
  { itemName: 'item1', category: 'category1', price: 100, timestamp: 1 },
  { itemName: 'item2', category: 'category2', price: 200, timestamp: 2 },
  { itemName: 'item3', category: 'category1', price: 300, timestamp: 3 },
  { itemName: 'item4', category: 'category2', price: 400, timestamp: 4 },
  { itemName: 'item5', category: 'category1', price: 500, timestamp: 5 },
]);

module.exports = calculateTotalSpentByCategory;
