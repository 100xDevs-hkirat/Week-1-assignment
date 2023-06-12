/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  // Calculate total spent for each category
  for (let transaction of transactions) {
    const { category, price } = transaction;
    if (category in categoryMap) {
      categoryMap[category] += price;
    } else {
      categoryMap[category] = price;
    }
  }

  // Convert categoryMap to an array of objects
  const result = [];
  for (let category in categoryMap) {
    result.push({ [category]: categoryMap[category] });
  }

  return result;
}

// const transactions = [
//   { itemName: 'Item 1', category: 'Category 1', price: 10, timestamp: Date.now() },
//   { itemName: 'Item 2', category: 'Category 2', price: 20, timestamp: Date.now() },
//   { itemName: 'Item 3', category: 'Category 1', price: 15, timestamp: Date.now() },
//   { itemName: 'Item 4', category: 'Category 2', price: 5, timestamp: Date.now() },
//   { itemName: 'Item 5', category: 'Category 3', price: 12, timestamp: Date.now() }
// ];

// const totalSpentByCategory = calculateTotalSpentByCategory(transactions);
// console.log(totalSpentByCategory);

module.exports = calculateTotalSpentByCategory;
