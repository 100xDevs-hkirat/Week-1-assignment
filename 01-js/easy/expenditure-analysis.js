/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  for (let i = 0; i < transactions.length; i++) {
    if (result.length == 0) {
      result.push({
        category: transactions[i].category,
        totalSpent: transactions[i].price,
      });
    } else {
      let categoryPresent = result.find(
        (result) => result.category == transactions[i].category
      );
      if (categoryPresent == null) {
        result.push({
          category: transactions[i].category,
          totalSpent: transactions[i].price,
        });
      } else {
        categoryPresent.totalSpent =
          categoryPresent.totalSpent + transactions[i].price;
      }
    }
  }
  return result;
}
// let simple = [
//   {
//     name: "asbar",
//     age: 19,
//   },
//   {
//     name: "ridaa",
//     age: 17,
//   },
// ];
// let print = simple.find((sim) => sim.name == "asbar");
// console.log(print);
module.exports = calculateTotalSpentByCategory;
