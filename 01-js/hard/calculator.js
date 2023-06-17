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
    const sanitizedExpression = expression.replace(/\s+/g, "").trim();
    // const operands = sanitizedExpression.split(/[-+*/]/);
    // const operators = sanitizedExpression.match(/[-+*/]/g);

    // if (!operands.every(isFinite)) {
    //   throw new Error("Invalid expression. Non-numerical characters detected.");
    // }

    // this.result = parseFloat(operands[0]);

    // for (let i = 0; i < operators.length; i++) {
    //   const operator = operators[i];
    //   const operand = parseFloat(operands[i + 1]);

    //   if (operator === "+") {
    //     this.add(operand);
    //   } else if (operator === "-") {
    //     this.subtract(operand);
    //   } else if (operator === "*") {
    //     this.multiply(operand);
    //   } else if (operator === "/") {
    //     if (operand === 0) {
    //       throw new Error("Invalid expression. Division by zero detected.");
    //     }
    //     this.divide(operand);
    //   }
    // }

    const answer = eval(expression);
    if (answer === Infinity) {
      throw new Error("division by zero");
    }
    this.result = answer;
    return this.result;
  }
}

sample = new Calculator();
sample.calculate("1 + 0");

module.exports = Calculator;
