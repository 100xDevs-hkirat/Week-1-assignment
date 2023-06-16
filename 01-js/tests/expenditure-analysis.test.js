const calculateTotalSpentByCategory = require('../easy/expenditure-analysis.js');

describe('calculateTotalSpentByCategory', () => {
  test('should return total amount spent by category', () => {
    const transactions = [
      { itemName: 'Item 1', category: 'Category 1', price: 10, timestamp: '2023-01-01' },
      { itemName: 'Item 2', category: 'Category 2', price: 15, timestamp: '2023-01-02' },
      { itemName: 'Item 3', category: 'Category 1', price: 20, timestamp: '2023-01-03' },
      { itemName: 'Item 4', category: 'Category 2', price: 5, timestamp: '2023-01-04' },
      { itemName: 'Item 5', category: 'Category 3', price: 12, timestamp: '2023-01-05' },
    ];

    const expectedResult = [
      { 'Category 1': 30 },
      { 'Category 2': 20 },
      { 'Category 3': 12 },
    ];

    const result = calculateTotalSpentByCategory(transactions);

    expect(result).toEqual(expectedResult);
  });

  test('should return empty array for empty transactions', () => {
    const transactions = [];
    const expectedResult = [];

    const result = calculateTotalSpentByCategory(transactions);

    expect(result).toEqual(expectedResult);
  });
});

