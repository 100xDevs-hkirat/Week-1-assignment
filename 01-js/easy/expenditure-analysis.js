/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
    const map = new Map();

    transactions.forEach((tx) => {
        const catSum = map.get(tx.category);
        let price = tx.price;

        if (catSum) {
            price = catSum + price;
        }
        map.set(tx.category, price);
    });

    return Array.from(map, ([cat, price]) => ({
        category: cat,
        totalSpent: price,
    }));
}

module.exports = calculateTotalSpentByCategory;
