/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  result;

  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Remove any whitespace from the expression
    expression = expression.replace(/\s/g, "");

    // Validate the expression
    if (!/^[\d+\-*/.()]+$/.test(expression)) {
      //The RegExp Object is a regular expression with added Properties and Methods.
      throw new Error("Invalid expression");
    }
    const parts = expression.split("/");
    if (parts.length === 2) {
      const numerator = parseFloat(parts[0]); //Convert a string to floating number
      const denominator = parseFloat(parts[1]);
      if (denominator === 0) {
        throw new Error("Division by zero is not allowed.");
      }
    }

    // Evaluate the expression
    try {
      this.result = eval(expression);
    } catch (error) {
      throw new Error("Evaluation error");
    }
    return this.result;
  }
}

// const calc = new Calculator();
// // calc.add(5);
// // // calc.add(3);
// // calc.divide(0);
// // // calc.clear();
// calc.calculate('10/0');
// // // calc.add(4);
// // // calc.multiply(3);
// // // calc.calculate('2 + 3 * 4');
// console.log(calc.getResult());
//
// // console.log(calc.getResult());

module.exports = Calculator;
