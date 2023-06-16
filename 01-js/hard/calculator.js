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
    this.result = this.result + number
  }
  subtract(number) {
    this.result = this.result - number
  }
  multiply(number) {
    this.result = this.result * number
  }
  divide(number) {
    if (number == 0) {
      throw new Error("Cannot divide by Zero")
    }
    this.result = this.result / number
  }
  clear() {
    this.result = 0
  }
  getResult() {
    return this.result
  }

  hasPrecedence(op1, op2) {
    if (op2 == '(' || op2 == ')') {
      return false;
    }
    if ((op1 == '*' || op1 == '/') &&
      (op2 == '+' || op2 == '-')) {
      return false;
    }
    else {
      return true;
    }
  }
  applyOp(op, b, a) {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        if (b == 0) {
          throw Error("Cannot divide by Zero")
        }
        return a / b
    }
    return 0;
  }
  calculate(input) {
    let parenthesis = []
    try {
      let digits = []
      let ops = []
      let digit = ""
      for (let i = 0; i <= input.length; i++) {
        if (i == input.length) {
          if (digit != "") {
            digits.unshift(parseFloat(digit))
            digit = ""
          }
          break
        }
        if ((48 <= input.charCodeAt(i) && input.charCodeAt(i) <= 57) || input[i] == " " || input[i] == ".") {
          if (input[i] != " ") {
            digit = digit + input[i]
          }
        }
        else {
          if (digit != "") {
            digits.unshift(parseFloat(digit))
            digit = ""
          }
          if (input[i] == "(") {
            parenthesis.unshift("(")
            ops.unshift(input[i])
          }
          else if (input[i] == ")") {
            if (parenthesis[0] == "(") {
              parenthesis.shift()
            }
            else {
              throw Error("Invalid Parenthesis")
            }
            while (ops[0] != "(") {
              let op = ops.shift();
              let b = digits.shift()
              let a = digits.shift()
              digits.unshift(this.applyOp(op, b, a))
            }
            ops.shift()
          }
          else if (input[i] == '+' || input[i] == '-' || input[i] == '*' || input[i] == '/') {
            while (ops.length != 0 && this.hasPrecedence(input[i], ops[0])) {
              let op = ops.shift();
              let b = digits.shift()
              let a = digits.shift()
              digits.unshift(this.applyOp(op, b, a))
            }
            ops.unshift(input[i])
          }
          else {
            throw Error("Wrong Input")
          }
        }
      }
      while (ops.length > 0) {
        let op = ops.shift();
        let b = digits.shift()
        let a = digits.shift()
        digits.unshift(this.applyOp(op, b, a))
      }
      if (parenthesis.length > 0) {
        throw Error("Invalid Parenthesis")
      }
      this.result = digits.pop()

    }
    catch (error) {
      throw Error(error);
    }
  }
}
module.exports = Calculator;
