/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

const transactions = [
  { itemName: 'Banana', category: 'Fruit', price: '70', timestamp: '2:00pm' },
  { itemName: 'Oats', category: 'Grain', price: '370', timestamp: '2:30pm' },
  { itemName: 'Rice', category: 'Grain', price: '300', timestamp: '2:45pm' },
  { itemName: 'Colgate', category: 'Bathroom', price: '150', timestamp: '3:00pm' },
  { itemName: 'Okra', category: 'Vegetable', price: '400', timestamp: '3:15pm' },
  { itemName: 'Chicken Breast', category: 'Meat', price: '280', timestamp: '3:30pm' },
  { itemName: 'Toothbrush', category: 'Bathroom', price: '20', timestamp: '4:15pm' },
];

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for (const transaction of transactions) {
    const { category, price } = transaction;
    if (categoryTotals.hasOwnProperty(category)) {
      categoryTotals[category] += parseFloat(price);
    } else {
      categoryTotals[category] = parseFloat(price);
    }
  }

  const result = Object.entries(categoryTotals).map(([category, total]) => {
    return { [category]: total };
  });

  return result;
}
const output = calculateTotalSpentByCategory(transactions);
console.log(output);
module.exports = calculateTotalSpentByCategory;
