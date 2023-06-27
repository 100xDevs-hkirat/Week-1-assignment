/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

const transactions = [
  { itemName: 'Item 1', category: 'Category 1', price: 10, timestamp: '2022-01-01' },
  { itemName: 'Item 2', category: 'Category 2', price: 20, timestamp: '2022-01-02' },
  { itemName: 'Item 3', category: 'Category 1', price: 15, timestamp: '2022-01-03' },
  { itemName: 'Item 4', category: 'Category 3', price: 12, timestamp: '2022-01-04' },
  { itemName: 'Item 5', category: 'Category 2', price: 8, timestamp: '2022-01-05' },
];

function calculateTotalSpentByCategory(transactions) {
  let categories ={};

  for (let i = 0; i < transactions.length; i++) {
    let category = transactions[i].category;
    let price = transactions[i].price;

    if(categories.hasOwnProperty(category)){
      categories[category] += price;
    }else{
      categories[category] = price;
    }
  
 }
    
  return [categories];
}

const result = calculateTotalSpentByCategory(transactions);
console.log(result);

module.exports = calculateTotalSpentByCategory;


