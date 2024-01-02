/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
const transactions = [
  {
    itemName: 'Laptop',
    category: 'Electronics',
    price: 1200,
    timestamp: new Date()
  },
  {
    itemName: 'Groceries',
    category: 'Electronics',
    price: 50,
    timestamp: new Date()
  },
  {
    itemName: 'Running Shoes',
    category: 'Fashion',
    price: 80,
    timestamp: new Date()
  },
  {
    itemName: 'Book',
    category: 'Fashion',
    price: 20,
    timestamp: new Date()
  },
  {
    itemName: 'Furniture',
    category: 'Fashion',
    price: 300,
    timestamp: new Date()
  }
];

function calculateTotalSpentByCategory(transactions) {
  var string = [];
  const amount = new Map();
  for(var i=0;i<transactions.length;i++){
     var cat = transactions[i].category;
     var pr = transactions[i].price;
      if(!amount.has(cat)){
        amount.set(cat,pr);
      }
      else{  
        amount.set(cat,amount.get(cat)+pr);
      }
    }
    for(const [key,val] of amount){
      var temp = key+" - "+val;
      string.push(temp)
    }
  return string;
}

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
