/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var objectlist = [];
    for(let i=0;i<transactions.length;i++){
        var transaction=transactions[i];
        var existing_transaction=objectlist.find((i)=>i.category===transaction.category);
        if(existing_transaction){
            existing_transaction.total_amount_spent_on_category+=transaction.price;
        }
        else{
            var newcategory={
                category:transaction.category,
                total_amount_spent_on_category:transaction.price
            };
            objectlist.push(newcategory);
        }
    }
    return objectlist;
}
var transactions = [
    {
        itemName: "blue trimax",
        category: "pen",
        price: 50,
        timeStamp: 1
    },
    {
        itemName: "apsara dark",
        category: "pencil",
        price: 25,
        timeStamp: 2
    },
    {
        itemName: "black parker",
        category: "pen",
        price: 50,
        timeStamp: 3
    },
    {
        itemName: "apsara dark",
        category: "marker",
        price: 35,
        timeStamp: 4
    },
    {
        itemName: "apsara dark",
        category: "sizzer",
        price: 75,
        timeStamp: 5
    }
]

console.log(calculateTotalSpentByCategory(transactions))

module.exports = calculateTotalSpentByCategory;
