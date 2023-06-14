/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
	return transactions.reduce((acc, currItem) => {
		let alreadyIncluded = false;
		let result = [];
		result = acc.map((item) => {
			if (item.category !== currItem.category) return { ...item };
			alreadyIncluded = true;
			return {
				category: currItem.category,
				totalSpent: item.totalSpent + currItem.price,
			};
		});

		if (!alreadyIncluded)
			return [
				...result,
				{ category: currItem.category, totalSpent: currItem.price },
			];

		return result;
	}, []);
}

module.exports = calculateTotalSpentByCategory;
