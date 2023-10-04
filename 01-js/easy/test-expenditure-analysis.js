// Import the function to be tested
const calculateTotalSpentByCategory = require('./expenditure-analysis'); // Assuming the code is in a file named "expenditure-analysis.js"

// Sample transactions
const transactions = [
    { itemName: 'Item 1', category: 'Groceries', price: 50, timestamp: '2023-08-21' },
    { itemName: 'Item 2', category: 'Clothing', price: 100, timestamp: '2023-08-22' },
    { itemName: 'Item 3', category: 'Gadgets', price: 30, timestamp: '2023-08-23' },
    { itemName: 'Item 4', category: 'Groceries', price: 25, timestamp: '2023-08-21' },
    { itemName: 'Item 5', category: 'Clothing', price: 33, timestamp: '2023-08-22' },
    { itemName: 'Item 6', category: 'Gadgets', price: 42, timestamp: '2023-08-23' }
    // ... other transactions ...
  ];

 
// Call the function and store the result
const result = calculateTotalSpentByCategory(transactions);

console.log(result);