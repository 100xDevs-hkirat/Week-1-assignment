/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
let categoryTotal={};
for(let index=0;index<transactions.length;index++){
    let items=transactions[index];
    let categoryId=items.category;
    let price=items.price;
    if(categoryId in categoryTotal){
        categoryTotal[categoryId]+=price;
    }
    else{
        categoryTotal[categoryId]=price;
    }   
    }
    let array=[];
    for(const category in categoryTotal){
 array.push({[category]:categoryTotal[category]});
    }
    return array;
}
const transactions = [
    { itemName: "Item 1", category: "Category A", price: 10, timestamp: "2023-06-01" },
    { itemName: "Item 2", category: "Category B", price: 15, timestamp: "2023-06-02" },
    { itemName: "Item 3", category: "Category A", price: 5, timestamp: "2023-06-03" },
    { itemName: "Item 4", category: "Category B", price: 20, timestamp: "2023-06-04" },
    { itemName: "Item 5", category: "Category A", price: 8, timestamp: "2023-06-05" }
  ];
  
  const result = calculateTotalSpentByCategory(transactions);
  console.log(result);
  
  

module.exports = calculateTotalSpentByCategory;
