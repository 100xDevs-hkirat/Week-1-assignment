/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let output = {};
  let n = transactions.length;

  for(let i=0;i<n;i++){
    let cat = transactions[i].category;
    let cost = transactions[i].price;

    if(output[cat]){
      output[cat] = output[cat] + cost;
    }

    else{
      output[cat] = cost;
    }
  }

  //console.log(output);

  let k = Object.keys(output);
  let answer = [];

  for(let i=0;i<k.length;i++){
    let c = k[i];
    let obj = {category: c, totalSpent: output[c]}

    answer.push(obj);
  }

  console.log(answer);
}


/*let transactions = [{ itemName: "Pepsi", 
                  category: "Drink", 
                  price: 20, 
                  timestamp: 126235 }, 
                  
                  { itemName: "sprite", 
                  category: "Drink", 
                  price: 15, 
                  timestamp: 12623335 },
                  
                  { itemName: "samosa", 
                  category: "snacks", 
                  price: 15, 
                  timestamp: 12622235 },
                  
                  { itemName: "kachori", 
                  category: "snacks", 
                  price: 15, 
                  timestamp: 12624535 }];*/


//calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;
