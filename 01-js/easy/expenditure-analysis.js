/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = new Map();

  // Iterate over each transaction
  for (const transaction of transactions) {
    const { category, price } = transaction;

    // If category already exists in the map, update the total price
    if (categoryMap.has(category)) {
      const currentTotal = categoryMap.get(category);
      categoryMap.set(category, currentTotal + price);
    } else {
      // If category doesn't exist in the map, add a new entry
      categoryMap.set(category, price);
    }
  }

  // Convert the map to an array of objects
  const result = Array.from(categoryMap, ([category, total]) => ({
    category: category,
    totalSpent: total,
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;