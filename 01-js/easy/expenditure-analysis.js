/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory (transactions) {
  const result = {};

  for (const transaction of transactions) {
    const { category, price } = transaction;

    // Check if the category exists in the result object
    if (result.hasOwnProperty(category)) {
      // If the category exists, add the price to the existing total
      result[category] += price;
    } else {
      // If the category doesn't exist, create a new entry with the price
      result[category] = price;
    }
  }

  // console.log(result);

  // Convert the result into object 
  const output = Object.entries(result).map(([category, total]) => (
      {
          [category]: total
      }
  ))
  return output; 
}

const transactions = [
{ itemName: 'Item 1', category: 'Books', price: 10 },
{ itemName: 'Item 2', category: 'Books', price: 20 },
{ itemName: 'Item 3', category: 'Electronics', price: 30 },
{ itemName: 'Item 4', category: 'Books', price: 15 },
{ itemName: 'Item 5', category: 'Electronics', price: 25 },
{ itemName: 'Item 6', category: 'Clothing', price: 40 },
{ itemName: 'Item 7', category: 'Clothing', price: 50 },
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);

module.exports = calculateTotalSpentByCategory;
