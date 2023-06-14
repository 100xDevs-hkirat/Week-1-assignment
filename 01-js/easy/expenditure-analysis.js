/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

const transactions=[ { itemName : "Hide and Seek", category : "food", price : 60, timestamp : new Date().getTime() },
{ itemName : "Maggi", category : "food", price : 24, timestamp : new Date().getTime() },
{ itemName : "T-Shirt", category : "clothing", price : 650, timestamp : new Date().getTime() },
{ itemName : "Shirt", category : "clothing", price : 2800, timestamp : new Date().getTime() },
{ itemName : "Iphone", category : "electronics", price : 80000, timestamp : new Date().getTime() }]

function calculateTotalSpentByCategory(transactions) {
    var sz = transactions.length;
    var uniqueList = [];
    var list = [];
    for(var i=0; i<sz; i++) {
      var object = transactions[i];
      if(!uniqueList.includes(object.category)){
          // not found
          uniqueList.push(object.category);
          list.push({category: object.category, totalSpent: object.price});
      }
      else {
        // found
        var foundObject = list.find(obj => obj.category === object.category);
  
        foundObject.totalSpent += object.price;
      }
    }
    return list;
  
  }
  
  const x=calculateTotalSpentByCategory(transactions);
  console.log(x);

  
  

module.exports = calculateTotalSpentByCategory;
