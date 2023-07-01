/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let category ={}

    for(let t of transactions){
      let c = t.category;
      let p =  t.price;

      if(c in category){
        category[c]+=p;
      }
      else{
        category[c]=p;
      }
    }

    let result =[];
    for(let cat in category){
      result.push({category:cat, totalSpent:category[cat]});
    }
  return result;
}

module.exports = calculateTotalSpentByCategory;
