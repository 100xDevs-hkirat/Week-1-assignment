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
  initialise() {
    this.result = 0;
  }
  add(num) {
    this.result += num;
  }
  subtract(num) {
    this.result -= num;
  }
  multiply(num) {
    this.result *= num;
  }
  divide(num) {
    this.result /= num;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(str) {
    let result = 0;
    let num = 0;
    let sign = 1;
    let stack = [];
    for(let i = 0; i < str.length; i++) {
      if(str[i] >= '0' && str[i] <= '9') {
        num = num * 10 + (str[i] - '0');
      } else if(str[i] == '+') {
        result += sign * num;
        num = 0;
        sign = 1;
      } else if(str[i] == '-') {
        result += sign * num;
        num = 0;
        sign = -1;
      } else if(str[i] == '(') {
        stack.push(result);
        stack.push(sign);
        result = 0;
        sign = 1;
      } else if(str[i] == ')') {
        result += sign * num;
        num = 0;
        result *= stack.pop();
        result += stack.pop();
      }
    }
    if(num != 0) {
      result += sign * num;
    }
    return result;
  }
}

module.exports = Calculator;
