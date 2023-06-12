/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

output = [];

function isCategoryExists(category, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].category === category) {
      return true;
    }
  }
  return false;
}

function calculateTotalSpentByCategory(transactions) {
  for (let element of transactions) {
    if (isCategoryExists(element.category, output)) {
      for (let key of output) {
        if (key.category === element.category) {
          key.totalSpent += element.price;
        }
      }
    } else {
      const category = new Object();
      category.category = element.category;
      category.totalSpent = element.price;
      output.push(category);
    }
  }
  return output;
}

//console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
