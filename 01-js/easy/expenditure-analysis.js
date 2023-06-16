/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let temp_dict = {}, temp_list = [];
  for(let item of transactions){
      if(temp_dict.hasOwnProperty(item.category)){
          temp_dict[item.category] += item.price;
      }
      else{
          temp_dict[item.category] = item.price;
      } 
  }
  for(const [category, totalSpent] of Object.entries(temp_dict)) temp_list.push({category,totalSpent});
  return temp_list;
}

module.exports = calculateTotalSpentByCategory;
