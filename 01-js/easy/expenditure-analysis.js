/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let listOfcategory = [];
  let listOfPrices = [];
  for(let i=0; i<transactions.length; i++){
    listOfcategory[i] = transactions[i]["category"];
    listOfPrices[i] = transactions[i]["price"];
  }
  const resultList = [];
  for(let i=0; i<listOfPrices.length; i++){
    const obj = {
      category: listOfcategory[i],
      totalSpent: listOfPrices[i]
    };
    resultList.push(obj);
  }

  function combineObjectsWithSameKey(objects, commonKey, sumKey) {
    const resultMap = {};
  
    objects.forEach(obj => {
      const keyValue = obj[commonKey];
  
      if (resultMap.hasOwnProperty(keyValue)) {
        // If the key already exists, add the value of the sumKey
        resultMap[keyValue][sumKey] += obj[sumKey];
      } else {
        // If the key doesn't exist, create a new entry in the resultMap
        resultMap[keyValue] = { [commonKey]: keyValue, [sumKey]: obj[sumKey] };
      }
    });
  
    // Convert the resultMap object to an array of values
    const resultArray = Object.values(resultMap);
  
    return resultArray;
  }
  
  const combinedList = combineObjectsWithSameKey(resultList, "category", "totalSpent");
  
  return combinedList;
}

module.exports = calculateTotalSpentByCategory;


//  MY SOLUTION 
// 1. syntax of list & objects
// 2. To make 2 list of categories & prices
// 3. to convert the two lists to one list of object
// 4. Map function from chat gpt to combine the objects to unique one and add sum