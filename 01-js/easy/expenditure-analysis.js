/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  let totalByCategory = {};

  for(let i = 0; i < transactions.length; i++)
  {
    let item = arr[i];
    let category = item.category;
    let price = item.price;

    if(totalByCategory[category])
    {
      totalByCategory[category] += Math.round(price);
    }
    else
    {
      totalByCategory[category] = Math.round(price);
    }
  }
  
  return totalByCategory;
}

const arr = [
  {
    itemName: "item1",
    category: "category1",
    price: 55.6,
    timestamp: "2023-07-07"
  },
  {
    itemName: "item2",
    category: "category2",
    price: 73,
    timestamp: "2023-07-08"
  },
  {
    itemName: "item3",
    category: "category1",
    price: 84.3,
    timestamp: "2023-07-09"
  },
  {
    itemName: "item4",
    category: "category1",
    price: 99.2,
    timestamp: "2023-07-10"
  },
  {
    itemName: "item5",
    category: "category2",
    price: 34.7,
    timestamp: "2023-07-12"
  },
  {
    itemName: "item6",
    category: "category3",
    price: 75.33,
    timestamp: "2023-07-13"
  },
  {
    itemName: "item4",
    category: "category2",
    price: 24.1,
    timestamp: "2023-07-10"
  }
];

const total_amount_spent = calculateTotalSpentByCategory(arr);

console.log(total_amount_spent);

module.exports = calculateTotalSpentByCategory;