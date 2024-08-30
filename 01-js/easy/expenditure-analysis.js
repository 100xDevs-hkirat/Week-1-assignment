/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

const currentDate = new Date()
function calculateTotalSpentByCategory(transactions) {
  const categoryItems = {}
  transactions.forEach((transaction)=>{
    const category = transaction.category
    if(!categoryItems[category]){
      categoryItems[category] = 0
    }
    categoryItems[category] += transaction.price
  })
  return [categoryItems];
}

var transactions = [
  {
    itemName:'T-shirt',
    category:'Fashion',
    price:300,
    timestamp:currentDate.getTime()
  },
  {
    itemName:'Jeans',
    category:'Fashion',
    price:700,
    timestamp:currentDate.getTime()
  },
  {
    itemName:'Mobile',
    category:'Gadgets',
    price:10000,
    timestamp:currentDate.getTime()
  },
  {
    itemName:'Laptop',
    category:'Gadgets',
    price:50000,
    timestamp:currentDate.getTime()
  },
  {
    itemName:'Biriyani',
    category:'Food',
    price:200,
    timestamp:currentDate.getTime()
  },
  {
    itemName:'Chiken',
    category:'Food',
    price:150,
    timestamp:currentDate.getTime()
  },

]

console.log(calculateTotalSpentByCategory(transactions))

// module.exports = calculateTotalSpentByCategory;
