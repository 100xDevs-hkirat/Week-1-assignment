const Calculator = require('./calculator');

// Create an instance of the Calculator class
const calculator = new Calculator();

// Perform calculations and tests
calculator.add(5);
calculator.multiply(3);
console.log("Result after adding and multiplying:", calculator.getResult());  

calculator.clear();
calculator.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log("Result after evaluating expression:", calculator.getResult());  