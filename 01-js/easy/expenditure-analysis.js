/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
	let output = [];
	const newObj = {};
	for (let transacObj of transactions) {
		if (
			transacObj.hasOwnProperty("category") &&
			transacObj.hasOwnProperty("price")
		) {
			const { category, price } = transacObj;
			if (newObj.hasOwnProperty(category)) {
				newObj[category] += price;
			} else {
				newObj[category] = price;
			}
		}
	}
	for (let key of Object.keys(newObj)) {
		output.push({ [key]: newObj[key] });
	}
	return output;
}

let transactions = [
	{
		itemName: "pizza",
		category: "food",
		price: 149,
		timeStamp: "10-08-2023",
	},
	{
		itemName: "book",
		category: "stationary",
		price: 559,
		timeStamp: "11-08-2023",
	},
	{
		itemName: "Coke",
		category: "food",
		price: 45,
		timeStamp: "11-08-2023",
	},
	{
		itemName: "pen",
		category: "stationary",
		price: 35,
		timeStamp: "12-08-2023",
	},
	{
		itemName: "movie",
		category: "entertainment",
		price: 779,
		timeStamp: "12-08-2023",
	},
];
const outputArr = calculateTotalSpentByCategory(transactions);
console.log(outputArr);
// module.exports = calculateTotalSpentByCategory;
