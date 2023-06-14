/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  return [];
  let Map = {}

  for(i = 0;i<transactions.length;i++){

    let transaction = transactions[i];
    let category = transaction.category;
    let price = transaction.price;

    if(Map.has(category)){
      Map[category] += price;
    }
    else{
      Map[category] = price;
    }
  }

  let result = [];

  for( category in Map){
    result.push({category : category, totalSpent: Map[category]})
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
