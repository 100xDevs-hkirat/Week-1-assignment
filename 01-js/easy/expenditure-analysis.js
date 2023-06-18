/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
    let categoriesPriceObject = {};
    let result = [];
    for(let i = 0; i<transactions.length; i++){
      const {category, price} = transactions[i];
      if(categoriesPriceObject[category] !== undefined){
        categoriesPriceObject[category] += price; 
      }
      else{
        categoriesPriceObject[category] = price;
      }
    }
    for(let category in categoriesPriceObject){
        result.push({
           "category":category,
           "totalSpent":categoriesPriceObject[category]
        });
    }
    return result;
  }
module.exports = calculateTotalSpentByCategory;
