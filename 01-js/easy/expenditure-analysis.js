/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const totalExpends = {};
  for (let i = 0; i < transactions.length; i++) {
    const elem = transactions[i];
    if (totalExpends[elem.category]) {
      totalExpends[elem.category] = totalExpends[elem.category] + elem.price;
    } else {
      totalExpends[elem.category] = elem.price;
    }
  }

  return totalExpends;
}

const transactions = [
  { category: "books", price: 1100 },
  { category: "food", price: 100 },
  { category: "books", price: 2000 },
];

const totalExpends = calculateTotalSpentByCategory(transactions);
console.log(totalExpends);
