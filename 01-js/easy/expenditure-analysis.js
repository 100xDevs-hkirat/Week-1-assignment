/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var totalspent = 0;
  for ( var i = 0 ; i< transactions.length ; i++){
    totalspent+= i;
  }
  return totalspent;

  }

  function objectlist(transactions){
    var objects = [];
    for( var i = 0; i< transactions.length ; i++){
      var item = transcations[i]
    }


  }










  var transcations = [
    { itemname : 'item 1 ', category: 'category A', price: 10 , timestamp: '2023'}
    { itemname : 'item 2 ', category: 'category B', price: 10 , timestamp: '2024'}
    { itemname : 'item 3 ', category: 'category C', price: 10 , timestamp: '2027'}

  ]

  
  
  

  
  
  
  return [];


module.exports = calculateTotalSpentByCategory;
