/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  const obj={};

  for(let trans of transactions){
    const {category,price}=trans;
    if(category in obj){
      obj[category]+=price;
    }
    else{
      obj[category]=price
    }
  }
  const res=[];
  for(const category in obj){
    res.push({[category]:obj[category]})
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;
