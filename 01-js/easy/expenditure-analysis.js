/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = [];


  for(let i = 0; i<transactions.length; i++){
    if(i === 0){
      ans.push({
        category: transactions[i].category,
        totalSpent: transactions[i].price,
      });
    }else{
      let existing_obj = ans.find(obj => obj.category === transactions[i].category);
      if(existing_obj){
        existing_obj.totalSpent += transactions[i].price;
      }else{
        existing_obj = {
          category: transactions[i].category,
          totalSpent: transactions[i].price,
        }

        ans.push(existing_obj);
      }
    }
  }

  return ans;
  }

module.exports = calculateTotalSpentByCategory;
