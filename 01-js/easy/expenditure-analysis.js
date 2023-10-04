/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  // Calculate total spent for each category
  transactions.forEach(transaction => {
    const { category, price } = transaction;
    if (category in categoryTotals) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  });

  // Convert category totals to objects
  const result = [];
  for (const category in categoryTotals) {
    result.push({ [category]: categoryTotals[category] });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
