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
    if (num == 0) {
      throw new Error("divsion by zero");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(str) {
    let tokens = new Set(["+", "-", "*", "/", "(", ")"]);
    let operandStack = [];
    let operatorStack = [];
    let d = {
      "+": 1,
      "-": 1,
      "*": 2,
      "/": 2,
      "(": 3,
    };

    const isNumber = (n) => {
      return !isNaN(+n);
    };

    const calc = (firstEle, secondEle, op) => {
      if (op == "+") {
        return firstEle + secondEle;
      } else if (op == "-") {
        return firstEle - secondEle;
      } else if (op == "/") {
        if (secondEle == 0) {
          throw new Error("Dividing with zero");
        }
        return firstEle / secondEle;
      } else if (op == "*") {
        return firstEle * secondEle;
      }
    };

    let l = [];
    for (let ch of str) {
      if (ch != " ") {
        l.push(ch);
      }
    }
    str = l.join("");

    let i = 0;
    let j = 0;

    while (j < str.length) {
      // token generation loop
      while (j < str.length && !tokens.has(str[j])) {
        j += 1;
      }
      if (j == str.length) {
        // proceesing the last token if its a number
        if (i < j) {
          if (!isNumber(str.slice(i, j))) {
            throw new Error("Invalid Syntax");
          }
          operandStack.push(+str.slice(i, j));
        }
      } else {
        if (i != j) {
          if (!isNumber(str.slice(i, j))) {
            throw new Error("Invalid Syntax");
          }
          operandStack.push(+str.slice(i, j));
        }

        if (str[j] == ")") {
          // console.log(operandStack, operatorStack);
          let op = operatorStack.pop();
          if (!op) {
            throw new Error("Invalid");
          }
          while (op != "(") {
            if (operandStack.length < 2) {
              throw new Error("Invalid here 2");
            }
            let secondEle = operandStack.pop();
            let firstEle = operandStack.pop();
            operandStack.push(calc(firstEle, secondEle, op));

            // console.log(operandStack, operatorStack);
            op = operatorStack.pop();
            if (!op) {
              throw new Error("Invalid");
            }
          }
        } else {
          while (
            operatorStack.length &&
            operatorStack[operatorStack.length - 1] != "(" &&
            d[str[j]] <= d[operatorStack[operatorStack.length - 1]]
          ) {
            if (operandStack.length < 2) {
              throw new Error("Invalid");
            }
            let secondEle = operandStack.pop();
            let firstEle = operandStack.pop();
            let op = operatorStack.pop();
            operandStack.push(calc(firstEle, secondEle, op));
          }
          operatorStack.push(str[j]);
        }
        i = j + 1;
        j = j + 1;
      }
    }

    while (operatorStack.length) {
      if (operandStack.length < 2) {
        throw new Error("Invalid");
      }
      let secondEle = operandStack.pop();
      let firstEle = operandStack.pop();
      let op = operatorStack.pop();
      operandStack.push(calc(firstEle, secondEle, op));
    }

    console.log(operandStack);
    this.result = operandStack[0];
  }
}
module.exports = Calculator;
