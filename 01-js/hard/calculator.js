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
      throw new Error('Cannot divide by zero');
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
    const sanitizedExpression = expression.replace(/\s+/g, ''); // Remove all whitespace characters from the expression
    const parsedExpression = this.parseExpression(sanitizedExpression);
    this.result = this.evaluate(parsedExpression);
  }

  parseExpression(expression) {
    const operators = ['+', '-', '*', '/'];
    const parsedExpression = [];
    let currentNumber = '';
  
    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];
  
      if (operators.includes(char)) {
        if (currentNumber !== '') {
          parsedExpression.push(parseFloat(currentNumber));
          currentNumber = '';
        }
        parsedExpression.push(char);
      } else if (!isNaN(char) || char === '.') {
        currentNumber += char;
      } else {
        throw new Error('Invalid character in expression');
      }
    }
  
    if (currentNumber !== '') {
      parsedExpression.push(parseFloat(currentNumber));
    }
  
    return parsedExpression;
  }

  evaluate(parsedExpression) {
    const operatorPrecedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };
    const operatorStack = [];
    const numberStack = [];
  
    for (let i = 0; i < parsedExpression.length; i++) {
      const token = parsedExpression[i];
  
      if (typeof token === 'number') {
        numberStack.push(token);
      } else if (token in operatorPrecedence) {
        const currentPrecedence = operatorPrecedence[token];
  
        while (
          operatorStack.length > 0 &&
          operatorStack[operatorStack.length - 1] !== '(' &&
          operatorPrecedence[operatorStack[operatorStack.length - 1]] >= currentPrecedence
        ) {
          const operator = operatorStack.pop();
          const operand2 = numberStack.pop();
          const operand1 = numberStack.pop();
          const result = this.applyOperator(operator, operand1, operand2);
          numberStack.push(result);
        }
  
        operatorStack.push(token);
      } else if (token === '(') {
        operatorStack.push(token);
      } else if (token === ')') {
        while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
          const operator = operatorStack.pop();
          const operand2 = numberStack.pop();
          const operand1 = numberStack.pop();
          const result = this.applyOperator(operator, operand1, operand2);
          numberStack.push(result);
        }
  
        if (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] === '(') {
          operatorStack.pop();
        } else {
          throw new Error('Mismatched parentheses in expression');
        }
      }
    }
  
    while (operatorStack.length > 0) {
      const operator = operatorStack.pop();
      const operand2 = numberStack.pop();
      const operand1 = numberStack.pop();
      const result = this.applyOperator(operator, operand1, operand2);
      numberStack.push(result);
    }
  
    if (numberStack.length !== 1) {
      throw new Error('Invalid expression');
    }
  
    return numberStack[0];
  }

  applyOperator(operator, operand1, operand2) {
    switch (operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        return operand1 / operand2;
      default:
        throw new Error('Invalid operator');
    }
  }
}

module.exports = Calculator;
