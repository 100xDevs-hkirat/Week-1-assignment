/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const a = [];
  const b = [];
  transactions.forEach((transaction) => {
    if (!a.includes(transaction.category)) {
      a.push(transaction.category);
      b.push({
        category: transaction.category,
        totalSpent: transaction.price,
      });
    } else {
      b[a.indexOf(transaction.category)].totalSpent +=
        transaction.price;
    }
  });
  return b;
}

module.exports = calculateTotalSpentByCategory;
