/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let category_wise_spent = [];
  for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];
    let index = category_wise_spent.findIndex(
      (obj) => obj.category === transaction.category
    );
    if (index !== -1) {
      console.log(transaction);
      category_wise_spent[index]["totalSpent"] += transaction.price;
    } else {
      category_wise_spent.push({
        category: transaction.category,
        totalSpent: transaction.price,
      });
    }
  }
  return category_wise_spent;
}

module.exports = calculateTotalSpentByCategory;
