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
import { evaluate } from "mathjs";


class Calculator {
  constructor(result = 0) {
    this.result = result;
  }

  add(a) {
    const sum = this.result + a;
    this.result = sum;
    return sum;
  }

  subtract(s) {
    const sub = this.result - s;
    this.result = sub;
    return sub;
  }

  multiply(m) {
    const multi = this.result * m;
    this.result = multi;
    return multi;
  }

  divide(d) {
    if (d == 0) throw new Error();
    const div = this.result / d;
    this.result = div;
    return div;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(str) {
    str = str.replace(/\s/g, "");
    const regex = /[a-z]/gi;
    const hasLetter = regex.test(str);
    if (hasLetter) {
      throw new Error();
    }
    const value = eval(str);
    return value;
  }
}

module.exports = Calculator;
