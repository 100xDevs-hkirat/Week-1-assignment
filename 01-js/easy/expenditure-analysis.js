function calculateTotalSpentByCategory(transactions) {
 
  const categoryTotals = {};

  
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

  
    if (categoryTotals[category]) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  });

  return Object.keys(categoryTotals).map((category) => {
    return { category, totalSpent: categoryTotals[category] };
  });
}
const transactions = [
  {
    itemName: "Laptop",
    category: "Electronics",
    price: 1000,
    timestamp: 1623495600000,
  },
  {
    itemName: "Headphones",
    category: "Electronics",
    price: 200,
    timestamp: 1623499200000,
  },
  { itemName: "Coffee", category: "Electronics", price: 150005, timestamp: 1623502800000 },
  { itemName: "Book", category: "Books", price: 15, timestamp: 1623506400000 },
  {
    itemName: "Sandwich",
    category: "Food",
    price: 10,
    timestamp: 1623510000000,
  },
];
console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;
