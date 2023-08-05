/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  /**
   * const transactions = [
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
			}
    ]
   */

    const ansMap = new Map();
for (var key in transactions) {
  var val = transactions[key];
  if (ansMap.has(val.category)) {
    var val2 = ansMap.get(val.category);
    ansMap.set(val.category, val2+val.price);
  } else {
    ansMap.set(val.category, val.price);
  }
}
const ans = [];
for (const [key, value] of ansMap.entries()) {
  console.log(key, value);
  ans.push({
    "category": key,
    "totalSpent":value
  });
}

return ans;
}

module.exports = calculateTotalSpentByCategory;
