/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

/*  transactions: [
      { 
        itemName: 'Milk', 
        category: 'Grocery',
        price: '100', 
        timestamp: '2025-05-27 08:30:00' 
      },
      { 
        itemName: 'Butter', 
        category: 'Grocery',
        price: '150', 
        timestamp: '2025-05-27 09:00:00' 
      },
      { 
        itemName: 'Ticket DEL-BOM', 
        category: 'Travel',
        price: '5000', 
        timestamp: '2025-05-27 09:00:00' 
      },
      { 
        itemName: 'Ticket BOM-Nashik', 
        category: 'Travel',
        price: '1000', 
        timestamp: '2025-05-27 09:00:00' 
      },
      { 
        itemName: 'Dinner Veg Meal', 
        category: 'Food',
        price: '250', 
        timestamp: '2025-05-27 09:00:00' 
      },
    ]
*/

exports.calculateTotalSpentByCategory = (transactions) => {
  const groupedByCategory = Object.groupBy(
    transactions,
    (item) => item.category
  );

  const result = Object.entries(groupedByCategory).map(([category, items]) => ({
    [category]: items.reduce((total, item) => total + Number(item.price), 0),
  }));

  return result;
};
