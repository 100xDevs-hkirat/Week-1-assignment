/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let done = {};
  let result = []
  for(let i=0;i<transactions.length;i++){
    let cat = transactions[i].category;
    if(done[cat]==undefined){
      let sum = 0;
      for(let j=0;j<transactions.length;j++){
        if(transactions[j].category==cat)
          sum+=transactions[j].price;
      }
      result.push({
        category:cat,
        totalSpent:sum
      });
      done[cat] = true;
    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
