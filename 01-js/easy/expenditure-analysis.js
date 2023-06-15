/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

transcations = [
  {"itemName":"pen",
  "category":"stationary",
  "price":100,
  "timestamp":"12-02-2022;13;05;12"},

  {"itemName":"pen",
  "category":"stationary",
  "price":100,
  "timestamp":"12-02-2022;13;05;12"},

  {"itemName":"pen",
  "category":"stationary",
  "price":100,
  "timestamp":"12-02-2022;13;05;12"},

  {"itemName":"pen",
  "category":"stationary",
  "price":100,
  "timestamp":"12-02-2022;13;05;12"},

  {"itemName":"cloth",
  "category":"fashion",
  "price":130,
  "timestamp":"12-02-2022;13;05;12"},

  {"itemName":"cloth",
  "category":"fashion",
  "price":130,
  "timestamp":"12-02-2022;13;05;12"},

  {"itemName":"cloth",
  "category":"fashion",
  "price":130,
  "timestamp":"12-02-2022;13;05;12"},

  {"itemName":"cloth",
  "category":"fashion",
  "price":130,
  "timestamp":"12-02-2022;13;05;12"}
         ]



function calculateTotalSpentByCategory(transactions) {
  let spentByCategory = {};

  transactions.forEach(transaction => {
      const { category, price } = transaction;
      if (spentByCategory[category]) {
          spentByCategory[category] += price;
      } else {
          spentByCategory[category] = price;
      }
  });

  // converting object to array of objects
  const result = [];
  for(const category in spentByCategory) {
      result.push({ [category]: spentByCategory[category] });
  }

  return result;
}


module.exports = calculateTotalSpentByCategory;
