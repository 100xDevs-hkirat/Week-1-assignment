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
      throw new Error('Division by zero is not allowed');
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
    const sanitizedExpression = expression.replace(/\s+/g, ''); // Remove all whitespace
    const regex = /(\d+(\.\d+)?|\+|-|\*|\/|\(|\))/g;
    const tokens = sanitizedExpression.match(regex);

    if (!tokens || tokens.length === 0) {
      throw new Error('Invalid expression');
    }

    const postfix = [];
    const stack = [];

    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };

    for (const token of tokens) {
      if (token === '(') {
        stack.push(token);
      } else if (token === ')') {
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
          postfix.push(stack.pop());
        }
        if (stack.length === 0 || stack[stack.length - 1] !== '(') {
          throw new Error('Invalid expression');
        }
        stack.pop(); // Discard '('
      } else if (['+', '-', '*', '/'].includes(token)) {
        while (
          stack.length > 0 &&
          ['+', '-', '*', '/'].includes(stack[stack.length - 1]) &&
          precedence[token] <= precedence[stack[stack.length - 1]]
        ) {
          postfix.push(stack.pop());
        }
        stack.push(token);
      } else {
        const number = parseFloat(token);
        if (isNaN(number)) {
          throw new Error('Invalid expression');
        }
        postfix.push(number);
      }
    }

    while (stack.length > 0) {
      if (['(', ')'].includes(stack[stack.length - 1])) {
        throw new Error('Invalid expression');
      }
      postfix.push(stack.pop());
    }

    const evalStack = [];
    for (const token of postfix) {
      if (typeof token === 'number') {
        evalStack.push(token);
      } else {
        if (evalStack.length < 2) {
          throw new Error('Invalid expression');
        }
        const b = evalStack.pop();
        const a = evalStack.pop();
        switch (token) {
          case '+':
            evalStack.push(a + b);
            break;
          case '-':
            evalStack.push(a - b);
            break;
          case '*':
            evalStack.push(a * b);
            break;
          case '/':
            if (b === 0) {
              throw new Error('Division by zero is not allowed');
            }
            evalStack.push(a / b);
            break;
        }
      }
    }

    if (evalStack.length !== 1) {
      throw new Error('Invalid expression');
    }

    this.result = evalStack[0];
  }
}

module.exports = Calculator;
