/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var n= transactions.length;
  var omp= {};
  for(var i=0;i<n;i++){
      if(transactions[i].category in omp){
          omp[transactions[i].category]+=transactions[i].price;
      }
      else{
          omp[transactions[i].category]=transactions[i].price;
      }
  }
  var r=[];
  for(let a in omp){
      r.push({[a]:omp[a]});
  }
return r;
}

module.exports = calculateTotalSpentByCategory;
