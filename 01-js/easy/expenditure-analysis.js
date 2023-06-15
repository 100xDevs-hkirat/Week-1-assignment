/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categories = {};

  for (const transaction of transactions) {
    const { category, price } = transaction;

    if (categories[category]) {
      categories[category] += price;
    } else {
      categories[category] = price;
    }
  }

  const result = [];
  for (const category in categories) {
    result.push({category: category, 'totalSpent': categories[category]});
    // result.push({ [category]: categories[category] });
  }

  return result;
}

console.log(calculateTotalSpentByCategory([
			{
				id: 1,
				timestamp: 1656076800000,
				price: 10,
				category: 'Food',
				itemName: 'Pizza',
			},
		]))

module.exports = calculateTotalSpentByCategory;
