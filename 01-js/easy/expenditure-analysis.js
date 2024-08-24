/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
const items = [
  {
    itemName: "Mobile Phone",
    category: "Electronics",
    price: 100,
    timestamp: Date.now(),
  },
  {
    itemName: "Shirt1",
    category: "Cloths",
    price: 500,
    timestamp: Date.now(),
  },
  {
    itemName: "Shirt2",
    category: "Cloths",
    price: 1100,
    timestamp: Date.now(),
  },
  {
    itemName: "Bed",
    category: "Furniture",
    price: 200,
    timestamp: Date.now(),
  },
];

function calculateTotalSpentByCategory(transactions) {
  const cateoryTotalAmount = {};

  transactions.forEach((transaction) => {
    const { category, price } = transaction;
    if (cateoryTotalAmount[category]) {
      cateoryTotalAmount[category] += price;
    } else {
      cateoryTotalAmount[category] = price;
    }
  });

  return Object.keys(cateoryTotalAmount).map((category) => ({
    [category]: cateoryTotalAmount[category],
  }));
}

console.log(calculateTotalSpentByCategory(items));

module.exports = calculateTotalSpentByCategory;
