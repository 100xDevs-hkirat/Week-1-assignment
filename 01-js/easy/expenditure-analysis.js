/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let spendEstimate = {};

  for(var i = 0; i<transactions.length; i++){
    var t = transactions[i];
    if(spendEstimate[t.category]){
      spendEstimate[t.category] += t.price;
    }else{
      spendEstimate[t.category]=t.price;
    }
  }
  var keys =Object.keys(spendEstimate[i])
  let answer=[];
  for(var i=0; i<keys.length; i++){
    var obj ={
      category: keys[i],
      amountSpend: spendEstimate[keys[i]]
    }
    answer.push(obj)
  }
  return [];
}

module.exports = calculateTotalSpentByCategory;
