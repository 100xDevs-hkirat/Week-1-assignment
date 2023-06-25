/*
  Implement a function `calculateTotalSpentBycategories` which takes a list of transactions as parameter
  and return a list of objects where each object is unique categories-wise and has total price spent as its value.
  Transaction - an object like { itemName, categories, price, timestamp }.
  Output - [{ categories1 - total_amount_spent_on_categories1 }, { categories2 - total_amount_spent_on_categories2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentBycategories(transactions) {
  const categories = [];
  const summary = [];

  transactions.map((transaction) => {
    if (!categories.includes(transaction.category)) {
      categories.push(transaction.category);
    }
  });

  for (let category of categories) {
    let totalSpent = 0;
    for (let transaction of transactions) {
      if (category === transaction.category) {
        totalSpent += transaction.price;
      }
    }
    summary.push({ category, totalSpent });
    totalSpent = 0;
  }
  return summary;
}

module.exports = calculateTotalSpentBycategories;
