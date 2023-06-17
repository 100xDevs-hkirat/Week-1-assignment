/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
let transactions=[{
  itemName:'football',
  category:'Sport',
  price:1200,
  timestamp:"16-june-2023"
},
{
  itemName:'Cake',
  category:'Bakery',
  price:200,
  timestamp:'16-june-2023'
},
{
  itemName:'Paneer',
  category:'Bakery',
  price:100,
  timestamp:'16-june-2023'
},
]
function calculateTotalSpentByCategory(transactions) {
  let object={};
  for(let i=0;i<transactions.length;i++){
if(object[transactions[i].category]){
object[transactions[i].category]=object[transactions[i].category]+transactions[i].price;
  }
  else{
    object[transactions[i].category]=transactions[i].price;
  }
  // return array;
}
console.log(object);
}

// module.exports = calculateTotalSpentByCategory;
var ans=calculateTotalSpentByCategory(transactions);
// console.log(ans);
