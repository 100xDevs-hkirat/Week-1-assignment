/*
 Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

*/

// function calculateTotalSpentByCategory(transactions){
//   const totalSpentByCategory ={};

//    transactions.forEach(function(transaction){
//     var category = transaction.category;
//     var price = transaction.price;

//     if(!totalSpentByCategory[category]){
//       totalSpentByCategory[category]=0;
//     }
//     totalSpentByCategory[category] +=price;

//    });

  //  var result = Object.keys(totalSpentByCategory).map(function(category){
  //   var obj ={};
  //   obj ={};
  //   obj[category] = totalSpentByCategory[category];
  //   return obj;
  //  });
  //  return result;
// }





// var transactions = [
//   { iteamName: 'Item1', category: 'Food', price:20, timestamp: '2023-01-01'},
//   { iteamName: 'Item1', category: 'Clothing', price:2000, timestamp: '2023-02-01'},
//   { iteamName: 'Item1', category: 'Food', price:899, timestamp: '2023-03-01'},
//   { iteamName: 'Item1', category: 'Clothing', price:3330, timestamp: '2023-04-01'},
// ];

// var result = calculateTotalSpentByCategory(transactions);
// console.log(result);







//Trying to code by myself;



function calculateTotalSpentByCategory(transactions){
  const totalSpentByCategory = {};
  //declaring a map

  transactions.forEach(function(transaction){
    var category=transaction.category;
    var price = transaction.price;



  if(!totalSpentByCategory[category]){
    totalSpentByCategory[category]=0;
  }
  totalSpentByCategory[category]+=price;
});

 var result=Object.keys(totalSpentByCategory).map(function(category){
    var obj={};
    obj[category]=totalSpentByCategory[category];
    return obj;
 });
 return result;


}


let transactions =[
  {category:'Food', price:20},
  {category:'Entertainment',price:200},
  {category:'Food',price:80},
  {category:'Entertainment',price:800}
  
];

var result = calculateTotalSpentByCategory(transactions);
console.log(result);