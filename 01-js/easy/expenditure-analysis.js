/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function groupByCategory(transactions) {
  const result = transactions.reduce((accumulator, currentValue) => {
    const existingItem = accumulator.find(
      (item) => item.category === currentValue.category
    );
    if (existingItem) {
      existingItem.totalSpent.push(currentValue.price);
    } else {
      accumulator.push({
        category: currentValue.category,
        totalSpent: [currentValue.price],
      });
    }
    return accumulator;
  }, []);

  return result;
}

function calculateTotalSpentByCategory(transactions) {
  const result = groupByCategory(transactions);

  const result_two = result.map((item) => {
    const totalPrice = item.totalSpent.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return { category: item.category, totalSpent: totalPrice };
  });

  return result_two;
}

module.exports = calculateTotalSpentByCategory;
