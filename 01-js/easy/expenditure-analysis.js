/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

class Transaction {
  constructor(itemName, category, price, timestamp) {
    this.itemName = itemName;
    this.category = category;
    this.price = price;
    this.timestamp = timestamp;
  }
}

const transactions = [];

const trn1 = new Transaction("pen", "stationary", 100, new Date().getTime());
const trn2 = new Transaction("pencil", "stationary", 20, new Date().getTime());
const trn3 = new Transaction("burger", "food", 200, new Date().getTime());
const trn4 = new Transaction("fires", "food", 100, new Date().getTime());
const trn5 = new Transaction("movie", "entertainment", 500, new Date().getTime());

transactions.push(trn1);
transactions.push(trn2);
transactions.push(trn3);
transactions.push(trn4);
transactions.push(trn5);

function calculateTotalSpentByCategory(transactions) {
  const map = new Map();

  transactions.forEach(element => {
    if(map.has(element.category)) {
      map.set(element.category, (map.get(element.category) + element.price));
    } else {
      map.set(element.category, element.price);
    }
  });

  const categoryWiseExpense = [];
  for(let [category, price] of map) {
    let str = `${category} - ${price}`;
    categoryWiseExpense.push(str);
  }

  return categoryWiseExpense;
}

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
