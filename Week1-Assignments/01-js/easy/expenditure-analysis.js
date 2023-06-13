/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const Expenditure = new Map();
  //console.log(transactions)
 // console.log(transactions.length)

  for(var i =0;i<transactions.length;i++){
    //console.log(transactions[i].category)
    let currExpenditure = Expenditure.get(transactions[i].category)
    if (typeof currExpenditure == "undefined"){
      Expenditure.set(transactions[i].category,transactions[i].price)
    }
    else{
      Expenditure.set(transactions[i].category,currExpenditure + transactions[i].price)
    }  
  }

  let myExpenditure =[]
  let myKeys = [...Expenditure.keys()]
//  console.log(myKeys.length)
//  console.log(myKeys)
  for (i=0;i<myKeys.length;i++){
    tmparr = [myKeys[i],Expenditure.get(myKeys[i])]
    myExpenditure.push(tmparr)
  }

//    console.log(transactions[i].category)
//    console.log(transactions[i].price)

  return (myExpenditure);
}

console.log(calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
])
)
module.exports = calculateTotalSpentByCategory;
