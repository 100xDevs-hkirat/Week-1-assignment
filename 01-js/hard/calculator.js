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
      this.result = 0
  }
  add(number) {
      this.result += number
      return this
  }
  subtract(number) {
      this.result -= number;
      return this
  }
  divide(number) {
      if (number !== 0) {
          this.result = this.result / number
      } else {
          throw Error('Please give a number that is not zero and postive')
      }
      return this
  }
  clear() {
      this.result = 0
  }

  getResult() {
      return this.result
  }
  calculate(expression) {
      // rmove spaces
      const parsedExpression = expression.replace(/\s+/g, "");

      // Validate the expression for invalid characters
      if (!/^[0-9+\-*/().\s]+$/.test(parsedExpression)) {
          throw new Error("Error: Invalid expression.");
      }

      try {
          this.result = eval(parsedExpression)
      } catch (error) {
          console.log(error)
      }
      return this
  }
}

module.exports = Calculator;

const calc = new Calculator();

console.log(calc.add(20).subtract(5))
console.log(calc.calculate(`10 +   2 *    (   6 - (4 + 1) / 2) + 7`))
console.log(calc.getResult())