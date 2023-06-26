/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
	transaction_by_categories = {};
	for (transaction of transactions) {
    if (transaction_by_categories[transaction.category]){
      transaction_by_categories[transaction.category] += transaction.price;
    }
    else{
      transaction_by_categories[transaction.category] = transaction.price;
    }
    }
	ans = [];
	for (const category in transaction_by_categories) {
		ans.push({
			category: category,
			totalSpent: transaction_by_categories[category],
		});
	}
	return ans;
}

module.exports = calculateTotalSpentByCategory;
