/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var spendEstimates = {};

   for (var i =0 ; i<transactions.lenght; i++) {
    var t = transactions[i];
    if (spendEstimates[t.category]) {
      spendEstimates[t.category] = spendEstimates[t.category] + t.price
    } else {
      spendEstimates[t.category] = t.price
    }
   }

   var keys = object.keys(spendEstimates)
   console.log(spendEstimates);

   let answer = [];
   for (var i =0 ; i<keys.lenght; i++) {
    var category = keys[i];
    var obj = {
      category: category,
      totalSpent: spendEstimates[category]
    }
    answer.push(obj)
   }
  return answer;
}

module.exports = calculateTotalSpentByCategory;


var transactions = [
  {
    id: 1,
    timestamp: 121158980000,
    price: 10,
    category: 'food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 121212898000,
    price: 20,
    category: 'food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestmap: 124913898000,
    price: 30,
    category: 'food',
    itemName: 'Sushi',
  },
];
const result = calculateTotalSpentByCategory(transactions);
