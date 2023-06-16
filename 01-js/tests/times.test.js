const calculateTime = require('../medium/times.js');

describe('calculateTime', () => {
  it('should calculate the execution time for sum from 1 to n', () => {
    const executionTime = calculateTime(1000000);
    expect(executionTime).toBeGreaterThan(0); 
  });

  it('should return an error message for non-numeric input', () => {
    const executionTime = calculateTime('mada');
    expect(executionTime).toBe('Invalid input. Please provide a valid number.');
  });
});
