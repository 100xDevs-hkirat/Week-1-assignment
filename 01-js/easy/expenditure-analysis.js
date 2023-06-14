/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryToTotal = {};
  for (const transaction of transactions) {
    const category = transaction.category;
    const price = transaction.price;
    if (categoryToTotal.hasOwnProperty(category)) {
      categoryToTotal[category] += price;
    } else {
      categoryToTotal[category] = price;
    }
  }

  const ans = [];
  for (const key of Object.keys(categoryToTotal)) {
    ans.push({ [key]: categoryToTotal[key] });
  }
  return ans;
}

const ans = calculateTotalSpentByCategory([
  { itemName: 'Item 1', category: 'Food', price: 10, timestamp: '2023-06-10' },
  { itemName: 'Item 2', category: 'Food', price: 15, timestamp: '2023-06-11' },
  { itemName: 'Item 3', category: 'Clothing', price: 30, timestamp: '2023-06-11' },
  { itemName: 'Item 4', category: 'Electronics', price: 50, timestamp: '2023-06-12' },
  { itemName: 'Item 5', category: 'Food', price: 20, timestamp: '2023-06-12' }
]);
console.log(ans);
// [ { Food: 45 }, { Clothing: 30 }, { Electronics: 50 } ]