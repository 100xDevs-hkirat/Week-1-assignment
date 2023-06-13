/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  let foodPrice = 0 , clothingPrice = 0, electronicsPrice = 0;
  for( let i of transactions){
    if(i.category === 'Food'){
      foodPrice += i.price;
    }

    if(i.category === 'Clothing'){
      clothingPrice += i.price;
    }

    if(i.category === 'Electronics'){
      electronicsPrice += i.price;
    }
  }


}

module.exports = calculateTotalSpentByCategory;
