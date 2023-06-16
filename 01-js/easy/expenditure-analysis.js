/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

// let tr = [
//   { itemName: "a", category: "a", price: 10, timestamp: 1 },
//   { itemName: "a", category: "a", price: 10, timestamp: 1 },
//   { itemName: "a", category: "b", price: 20, timestamp: 1 },
//   { itemName: "a", category: "b", price: 20, timestamp: 1 },
// ];

function calculateTotalSpentByCategory(transactions) {
  let totals = [];

  let hm = {};
  for (let tr of transactions) {
    if (tr["category"] in hm) {
      hm[tr["category"]] += tr["price"];
    } else {
      hm[tr["category"]] = tr["price"];
    }
  }

  console.log(hm);
  Object.entries(hm).forEach((entry) => {
    totals.push({ category: entry[0], price: entry[1] });
  });

  return totals;
}

module.exports = calculateTotalSpentByCategory;
