/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  //return [];
  var helper = {}
  var result = transactions.reduce(function(r,o){
    var key = o.category

    if(!helper[key]){
      helper[key] = Object.assign({},o)
      r.push(helper[key])
    }else{
      helper[key].price += Number(o.price)
          
    }
    return r
  },[]);
  const newArray = result.map(({category,price}) => ({category,"totalSpent": price}));
  console.log(newArray)
  return newArray
}

module.exports = calculateTotalSpentByCategory;
