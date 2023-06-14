/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

// function calculateTotalSpentByCategory(transactions) {
//   ans={};
//   for (trans of transactions){
//     if(ans[transactions.category[trans]]=="food"){
//       return true;
//     }
//     return false; 
//   }
//   //return [];
// }

// let transactions=[
//   { "itemName": "horlicks", "category":"Food", "price": 20, "timestamp": new Date(2020, 7, 14)},
//   { "itemName": "mangoshake", "category":"Food", "price": 20, "timestamp": new Date(2020, 7, 14)},
//   { "itemName": "addidas", "category":"Clothing", "price": 1000, "timestamp": new Date(2020, 7, 14)},
//   { "itemName": "nike", "category":"Clothing", "price": 2000, "timestamp": new Date(2020, 7, 14)}
// ];
// var x= calculateTotalSpentByCategory(transactions);
// console.log(x);
// module.exports = calculateTotalSpentByCategory;
// Step 1: Define your array of objects
  students = [
  { name: 'John', age: 20 },
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 19 }
];

// Step 2: Create a function to display the array of objects and store the result
function processStudents(studentArray) {
  var result = []; // Create an empty array to store the result

  // Step 3: Loop through each object in the array
  studentArray.forEach(function(student) {
    // Step 4: Access the properties of each object and store them
    studentInfo = {
      name: student.name,
      age: student.age
    };

    // Step 5: Store the student info in the result array
    result.push(studentInfo);
  });

  // Step 6: Return the result object or array
  return result;
}

// Call the function to process the array of objects
const processedStudents = processStudents(students);

// Display the result
for (student in processedStudents){
  console.log(processedStudents[student]);
}