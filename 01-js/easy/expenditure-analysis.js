/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

let list_of_objects = [
  {
    itemName: "Game",
    category: "Entertainment",
    price: 100,
    timeStamp: 3
  },
  {
    itemName: "Laptop",
    category: "Work",
    price: 3000,
    timeStamp: 10
  },
  {
    itemName: "TV",
    category: "Entertainment",
    price: 500,
    timeStamp: 5
  },
  {
    itemName: "Snacks",
    category: "Food",
    price: 10,
    timeStamp: 1
  }
]

function calculateTotalSpentByCategory(transactions) {
  let arr=[];
   transactions.forEach(element => {
    let totalSpent=element.price * element.timeStamp;
    categoryData=element.category;
    console.log(categoryData)
    ctr=0;
    tempObject={
      ctr:`${categoryData} - ${totalSpent}`
    }
    arr.push(tempObject);
   });
  return arr;
}

let ans=calculateTotalSpentByCategory(list_of_objects);
console.log(ans);

// module.exports = calculateTotalSpentByCategory;
