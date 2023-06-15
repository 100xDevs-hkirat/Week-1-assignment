/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var myMap = new Map();
  const resultArr = [];

  // Create a map of all unique category with price set to 0
  for (let x in transactions){
    var category = transactions[x].category;
    myMap.set(category, 0);
  }

  // For each category add the total price
  for (let y in transactions){
    myMap.set(transactions[y].category, myMap.get(transactions[y].category)+transactions[y].price);
  }

  // Convert map to array of objects
  for (const [category, totalPrice] of myMap.entries()) {
    const tempObject = { "category":category, "totalSpent": totalPrice };
    resultArr.push(tempObject);
  }

  return resultArr;
}

module.exports = calculateTotalSpentByCategory;
