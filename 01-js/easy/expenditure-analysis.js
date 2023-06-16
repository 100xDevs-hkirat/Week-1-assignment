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
  
    for (const transaction of transactions) {
      const { category, price } = transaction;
  
      if (category in categoryTotals) {
        categoryTotals[category] += price;
      } else {
        categoryTotals[category] = price;
      }
    }
  
    const totalSpentByCategory = [];
  
    for (const category in categoryTotals) {
      const totalSpent = categoryTotals[category];
      const categoryObject = { [category]: totalSpent };
      totalSpentByCategory.push(categoryObject);
    }
  
    return totalSpentByCategory;
  }
  
  const transactions = [
    { "itemName": "banana", "category": "Food", "price": 20, "timestamp": new Date(2020, 7, 14) },
    { "itemName": "mangoshake", "category": "Food", "price": 20, "timestamp": new Date(2020, 7, 14) },
    { "itemName": "addidas", "category": "shoes", "price": 8000, "timestamp": new Date(2020, 7, 14) },
    { "itemName": "nike", "category": "shoes", "price": 15000, "timestamp": new Date(2020, 7, 14) }
  ];
  
  const result = calculateTotalSpentByCategory(transactions);
  console.log(result);
  

module.exports = calculateTotalSpentByCategory;
