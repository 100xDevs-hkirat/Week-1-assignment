/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
// price in Indian Rs
var transactions = [
  {
    itemaName: "Football",
    category: "Sport",
    price: 1000,
    timestamp: 01 / 01 / 2023,
  },
  {
    itemaName: "Skates",
    category: "Sport",
    price: 3000,
    timestamp: 01 / 01 / 2023,
  },
  {
    itemaName: "jeans",
    category: "Clothing",
    price: 2000,
    timestamp: 01 / 01 / 2023,
  },
  {
    itemaName: "Shirts",
    category: "Clothing",
    price: 4000,
    timestamp: 01 / 01 / 2023,
  },
];
function calculateTotalSpentByCategory(transactions) {
  const expenditure = [];
  expenditure.push({
    category: transactions[0].category,
    totalAmount: transactions[0].price,
  });
  for (let i = 1; i < transactions.length; i++) {
    const obj = transactions[i];
    var findIndex = expenditure.findIndex(
      (item) => item.category === obj.category
    );
    if (findIndex !== -1) {
      expenditure[findIndex].totalAmount += obj.price;
    } else {
      const obj2 = {
        category: obj.category,
        totalAmount: obj.price,
      };
      expenditure.push(obj2);
    }
  }
  return expenditure;
}
console.log(JSON.stringify(calculateTotalSpentByCategory(transactions)));
module.exports = calculateTotalSpentByCategory;
