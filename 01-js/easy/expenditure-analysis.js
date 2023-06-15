/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  //creating a object rearrange the data
  const myRecord = {};

  //looping throught the entire transactions object
  for (const transaction in transactions){
  const {category , price} = transaction;

  //checking if the category is present in the record 
    if(myRecord.hasOwnProperty(category)){
      myRecord[category] = myRecord[category] + price;
    }

  //add the key value pair to the record  
    else{
      myRecord[category] = price;
    }
  }
  // returning the rearranged record
  return myRecord;
}

module.exports = calculateTotalSpentByCategory;
