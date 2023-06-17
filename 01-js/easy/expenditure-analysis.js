/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {


  var spent = {};

  for (let i = 0; i < transactions.length; i++) {
    var t = transactions[i];
    if (spent[t.category]) {
      spent[t.category] = spent[t.category] + t.price;
    }
    else {
      spent[t.category] = t.price;
    }
  }
  console.log(spent);
  var key = Object.keys(spent);
  console.log(key);

  let answer = [];
  for (var i = 0; i < key.length; i++) {
    var category = key[i];
    var obj = {
      category: category,
      amountspend: spent[category]
    }
    answer.push(obj);
  }
  return answer


// }

// var a = [{
//   item: "pepsi",
//   category: "Drink",
//   price: 10,
//   time: "17-june-2023"
// },
// {
//   item: "marinda",
//   category: "Drink",
//   price: 25,
//   time: "17-june-2023"
// }, {
//   item: "cake",
//   category: "food",
//   price: 10,
//   time: "17-june-2023"
// }, {
//   item: "samosa",
//   category: "food",
//   price: 5,
//   time: "17-june-2023"
// }]

// let b = calculateTotalSpentByCategory(a);
// console.log(b);




// module.exports = calculateTotalSpentByCategory;
