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
  constructor() {
    this.result = 0;
  }

  checkNumber(n) {
    if (typeof n === "number" || (typeof n === 'string' && (/^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/).test(n))) {
      return true;
    }
    return false;
  }

  add(n) {
    if (!this.checkNumber) {
      throw new Error("not a number");
    }
    this.result += n;
  }
  subtract(n) {
    if (!this.checkNumber) {
      throw new Error("not a number");
    }
    this.result -= n;
  }
  multiply(n) {
    if (!this.checkNumber) {
      throw new Error("not a number");
    }
    this.result *= n;
  }
  divide(n) {
    if (!this.checkNumber || n == 0) {
      throw new Error("not a number");
    }
    this.result /= n;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(expression) {
    expression = expression.replace(/\s+/g, "");

    if (!/^[\d+\-*/().\s.]+$/.test(expression)) {
      throw new Error("Invalid expression.");
    }
    try {
      const output = eval(expression);

      if (output === -Infinity || output === Infinity || output === NaN) {
        throw new Error("Invalid expression.");
        return;
      }

      this.result = output;
    } catch (error) {
      throw new Error("Invalid expression.");
    }
  }
}


module.exports = Calculator;
