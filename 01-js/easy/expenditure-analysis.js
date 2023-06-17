/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let summary = [];

  for(var i=0; i<transactions.length; i++){
    
    let index = -1;
    for(var j=0; j<summary.length; j++){
      if(summary[j].category === transactions[i].category){
        index =  j;
        summary[j].total_amount_spend += transactions[i].price;
      }
    }
    if (index == -1){
      let t = {'category':transactions[i].category, 'total_amount_spend':transactions[i].price};
      summary.push(t);
    }
  }

//  console.log(summary);
  return summary;
}
/*
let obj = [{ itemName:'Soap', category:'HouseHold', price:60 },
{ itemName:'Burger', category:'Food', price:110 },
{ itemName:'Ketchup', category:'HouseHold', price:500 },
{ itemName:'Bike Repair', category:'Vehicle', price:600 },
{ itemName:'Petrol', category:'Vehicle', price:12000 },
{ itemName:'Internet', category:'HouseHold', price:60 }];

console.log(calculateTotalSpentByCategory(obj));
*/
module.exports = calculateTotalSpentByCategory;
