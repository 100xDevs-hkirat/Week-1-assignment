/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
const transactionsData = [
  {
    itemName: "Keyboard",
    category: "HardWareComponets",
    price: 10,
    timestame: new Date(),
  },
  {
    itemName: "Mouse",
    category: "HardWareComponets",
    price: 10,
    timestame: new Date(),
  },
  {
    itemName: "Monitor",
    category: "HardWareComponets",
    price: 10,
    timestame: new Date(),
  },
  {
    itemName: "WindowsOS",
    category: "Software",
    price: 10,
    timestame: new Date(),
  },
  {
    itemName: "WindowsFireWall",
    category: "Software",
    price: 10,
    timestame: new Date(),
  },
];

function calculateTotalSpentByCategory(transactions) {
  const obj = {
    category: "",
    totalAmountSpend: "",
  };
  const resut = [];
  const categories = transactions;
  for (let i = 0; i < categories.length; i++) {
    var trasactionObj = transactions[i];
    var categoryObj = resut.find(
      (item) => item?.category === trasactionObj.category
    );
    if (categoryObj) {
      categoryObj.totalAmountSpend += trasactionObj.price;
    } else {
      let newCatObj = {
        category: trasactionObj.category,
        totalAmountSpend: trasactionObj.price,
      };
      resut.push(newCatObj);
    }
  }
  console.log(resut);
}

calculateTotalSpentByCategory(transactionsData);

module.exports = calculateTotalSpentByCategory;
