/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var size = transactions.length;
  

  var spendEstimates = {};
  for (let i = 0; i < size; i++)
    {
      var t = transactions[i];

      if (spendEstimates[t.category])
      {
        spendEstimates[t.category] += t.price;
      }
      else
      {
        spendEstimates[t.category] = t.price;
      }
    }

  let ans = [];
  console.log(spendEstimates);
  for (let i = 0; i < Object.entries(spendEstimates).length; i++)
    {
      var obj = {
        category : Object.entries(spendEstimates)[i][0],
        totalSpent : Object.entries(spendEstimates)[i][1]
      }
      ans.push(obj);
    }
  return [ans];
}

module.exports = calculateTotalSpentByCategory;
