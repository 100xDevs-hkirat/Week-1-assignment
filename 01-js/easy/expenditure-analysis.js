/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const m= {};
  for ( let i of transactions){
    const category = i.category;
    const price = i.price;

    if ( m[category])m[category]+=price;
    else m[category] = price;
  }
  var res =[];
  for ( let i in m){
    res.push({"category" : i , 
    "totalSpent" : m[i]
  });
  }

  return res;
}

var pass = [{
  itemName: "chips",
  category: "snacks",
  price: 40,
  timstamp: 100,
}, {
  itemName: "crossiant",
  category: "snacks",
  price: 140,
  timstamp: 104
}, {
  itemName: "chocolate",
  category: "sweets",
  price: 100,
  timstamp: 103
}, {
  itemName: "nutella",
  category: "sweets",
  price: 200,
  timstamp: 102
},{
  itemName: "bottle",
  category: "essentials",
  price: 400,
  timstamp: 101
}];

var ans = calculateTotalSpentByCategory(pass);
console.log(ans);
module.exports = calculateTotalSpentByCategory;
