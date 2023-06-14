/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

// function calculateTotalSpentByCategory(transactions) {
//     const spentByCategory = new Map();
    
//     for (let index = 0; index < transactions.length; index++) {
//           const key = transactions[index];
//           if (spentByCategory.has(key.category)) {
//             spentByCategory.set(key.category, spentByCategory.get(key.category)+key.price);
//           }else{
//             spentByCategory.set(key.category, key.price);
//           }  
//     }

   
//     const temp ={category:"",totalSpent:0};
//     for(let [key, value] of spentByCategory){

//         answer.push({category:key,totalSpent:value});
//     }
      
//     //answer.shift();
//     return answer; 
// }
    
  
function calculateTotalSpentByCategory(transactions) {
  let result = {}; // Create an empty object to store the category-wise totals

  // Iterate over each transaction in the given array
  for (let { category, price } of transactions) {
    if (result[category]) {
      // If the category already exists in the result object
      result[category] += price; // Add the price to the existing total
    } else {
      // If the category does not exist in the result object
      result[category] = price; // Initialize the category with the price
    }
  }

  // Generate the final output as an array of objects with category-wise totals
  return Object.keys(result).map((category) => ({ [category]: result[category] }));
}

module.exports = calculateTotalSpentByCategory;
