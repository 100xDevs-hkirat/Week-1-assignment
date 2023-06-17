/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

// transactions = [
//   { 
//     "itemName" : "Pepsi",
//     "category" : "Drink",
//     "price" : 30,
//     "timestamp" : 566969969696
//   },
//   { 
//     "itemName" : "Sprite",
//     "category" : "Drink",
//     "price" : 20,
//     "timestamp" : 566969969697
//   },
//   { 
//     "itemName" : "Samosa",
//     "category" : "Food",
//     "price" : 5,
//     "timestamp" : 566969969698
//   }
// ]

function calculateTotalSpentByCategory(transactions) {
  output_data = [];
  var unique_cat = {}
  transactions.forEach((trans) => {
    if(trans.category in unique_cat){
      unique_cat[trans.category] += trans.price;
    }else{
      unique_cat[trans.category] = trans.price;
    }
  })

  for(category in  unique_cat){
    output_data.push({
      "category" : category,
      "totalSpent" : unique_cat[category]
    })
  }
  return output_data;

}

// calculateTotalSpentByCategory(transactions)

module.exports = calculateTotalSpentByCategory;
