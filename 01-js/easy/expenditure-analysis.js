/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryList = {}
  
  for(const transaction of transactions){
    const {category, price} = transaction


    if(category in categoryList) {
      categoryList[category] += price
    } else {
      categoryList[category] = price
    }
  }


  const result =  [];
  for(const category in categoryList){
    const Totalamountspend = categoryList[category]
    const categoryObject = { [category] : Totalamountspend }
    result.push(categoryObject)
  }

  return result
}

module.exports = calculateTotalSpentByCategory;

const transactions = [
  { itemName: "Item 1", category: "Category A", price: 10, timestamp: "2023-01-01" },
  { itemName: "Item 2", category: "Category B", price: 15, timestamp: "2023-01-02" },
  { itemName: "Item 3", category: "Category A", price: 5, timestamp: "2023-01-03" },
  { itemName: "Item 4", category: "Category B", price: 20, timestamp: "2023-01-04" },
  { itemName: "Item 5", category: "Category A", price: 8, timestamp: "2023-01-05" }
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);
