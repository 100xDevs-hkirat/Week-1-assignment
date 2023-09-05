/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  let ans = {};


  for(let i=0;i<transactions.length;i++){
    let t = transactions[i];
    if(ans[t.category]){
      ans[t.category] += t.price;
    }
    else{
      ans[t.category] = t.price;
    }
  }
  console.log(ans);
}


const transactions = [
  {itemname:"shoes",category:"footwear",price:200},
  {itemname:"slides",category:"footwear",price:200},
  {itemname:"shirt",category:"clothing",price:100},
  {itemname:"pant",category:"clothing",price:150},
  {itemname:"boxer",category:"underwear",price:100},
];

calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;
