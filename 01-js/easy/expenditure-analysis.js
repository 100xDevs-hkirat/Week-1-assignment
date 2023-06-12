/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryAndPrice = {};
  for (let content of transactions) {
    let category = content.category;
    let value = content.price;

    if (categoryAndPrice.hasOwnProperty(category)) {
      categoryAndPrice[category] += value;
    } else {
      categoryAndPrice[category] = value;
    }
  }

  return Object.keys(categoryAndPrice).map((key) => ({
    [key]: categoryAndPrice[key],
  }));
}

// This solution expects that in transactions is an array of objects & we have a key called category and a key called price

module.exports = calculateTotalSpentByCategory;
