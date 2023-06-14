/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = []

  // for all transaction in transactions array we do the following
  for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i]

    // if category already exists in Array, we add the price to the existing amount and update the amount

    // console.log(transaction.category)
    let existingCategory = categories.find((item) => {
      return item.category === transaction.category
    })

    if (existingCategory) {
      existingCategory.totalSpent += transaction.price
    }
    // else if add a new category to the array with initial value of the price
    else {
      let newCategory = {
        category: transaction.category,
        totalSpent: transaction.price,
      }
      categories.push(newCategory)
    }
  }

  //  return the categories array
  return categories
}

// testing
const transactions = [
  {
    itemName: 'Item 1',
    category: 'Category 1',
    price: 10,
    timestamp: '2023-01-01',
  },
  {
    itemName: 'Item 2',
    category: 'Category 2',
    price: 15,
    timestamp: '2023-01-02',
  },
  {
    itemName: 'Item 3',
    category: 'Category 1',
    price: 20,
    timestamp: '2023-01-03',
  },
  {
    itemName: 'Item 4',
    category: 'Category 2',
    price: 25,
    timestamp: '2023-01-04',
  },
  {
    itemName: 'Item 5',
    category: 'Category 1',
    price: 30,
    timestamp: '2023-01-05',
  },
]

console.log(calculateTotalSpentByCategory(transactions))

module.exports = calculateTotalSpentByCategory
