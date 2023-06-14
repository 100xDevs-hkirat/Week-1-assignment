/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  let categoryTotal = [];

  for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];
    let category = transaction.category;
    let price = transaction.price;

    if (categoryTotal[category]) {
      categoryTotal[category] += price;
    } else {
      categoryTotal[category] = price;
    }
  }

  let result = Object.keys(categoryTotal).map(function(category) {
    return {"category": category, "totalSpent": categoryTotal[category]}
  });

  return result;
}

const transactions = [
  {"item": "poster", "category": "home-decor", "price": "500"},
  {"item": "lamp", "category": "home-decor", "price": "2500"},
  {"item": "couch", "category": "comfort", "price": "18000"},
  {"item": "mouse", "category": "productivity", "price": "5000"},
  {"item": "shoes", "category": "comfort", "price": "8000"}
]

const ans = calculateTotalSpentByCategory(transactions);
console.log(ans);

module.exports = calculateTotalSpentByCategory;
