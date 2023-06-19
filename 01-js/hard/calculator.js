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
    if(num !== 0) {
      this.result /= num;
    } else {
      throw new Error("cannot divide by zero")
    }
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    expression = expression.replace(/\s/g, "");
    
    let evaluvated = this.evaluate(Array.from(expression), 0);

    this.result = evaluvated;
  }

  evaluate(str, index) {
    let stack = []
    let sign = '+'
    let num = 0;

    for (let i = index; i < str.length; i++) {
      let ch = str[i];

      if(!this.isDigit(ch) || !this.isOperator(ch)) {
        throw new Error("Not valid character");
      }
      
      if(this.isDigit(ch)) {
        num = num * 10 + (ch - '0')
      }

      if(!this.isDigit(ch) || i === str.length - 1) {
        if(ch === '(') {
          num = this.evaluate(str, i + 1);

          let leftBrackets = 1, rightBrackets = 0;

          for (let j = i + 1; j < str.length; j++) {
            let el = str[j];

            if(el === ')') {
              rightBrackets++;
              if(leftBrackets === rightBrackets) {
                i = j; 
                break;
              }
            } else if (el === '(') {
              leftBrackets++;
            }
          }
        }

        let prevSign = -1;
        switch(sign) {
          case '+':
            stack.push(num);
            break;
          case '-':
            stack.push(num * -1);
            break;  
          case '*':
            prevSign = stack.pop();
            stack.push(prevSign * num);
            break;
          case '/':
            prevSign = stack.pop();
            stack.push(prevSign / num);
            break;  
        }
        sign = ch;
        num = 0;
        if(ch === ')') {
          break;
        }
      }
    }

    let total = 0;
    while(stack.length > 0) {
      total += stack.pop();
    }

    return total;
  }

  isDigit(ch) {
    return (ch >= 0 && ch <= 9)
  }

  isOperator(op) {
    return ("+-*/()".indexOf(op) > -1)
  }
}

module.exports = Calculator;
