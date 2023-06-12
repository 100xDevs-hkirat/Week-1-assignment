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
  constructor(val) {
    let result = val;
  }

  add(num) {
    result += num;
  }

  substract(num) {
    result -= num;
  }

  multiply(num) {
    result *= num;
  }

  divide(num) {
    result /= num;
  }

  clear() {
    result = 0;
  }

  getResult() {
    return result;
  }

  calculate(string) {
    // can be done using eval() function

    // storing operand and operators separately
    const regex = /[^0-9+\-*/()\s]/g;
    if (regex.test(string)) {
      console.log("Expression contains invalid characters");
      throw erorr("Invalid characters");
    }
    let expression = [];
    let tmp = "";
    let operators = {
      "+": 1,
      "-": 1,
      "*": 2,
      "/": 3,
      "(": 0,
      ")": 0,
    };

    for (const i in string) {
      if (string[i] in operators) {
        if (tmp) expression.push(tmp);
        tmp = "";
        expression.push(`${string[i]}`);
      } else tmp += string[i];
    }
    if (tmp) expression.push(tmp);

    // removing spaces
    expression.forEach((val, index) => (expression[index] = val.trim()));
    expression.forEach((item, i) => {
      if (!item) {
        expression.splice(i, 1);
      }
    });

    // evaluate
    const calc = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
    };
    let valueStack = [];
    let opStack = [];

    expression.push(")");
    for (const item of expression) {
      if (item === ")") {
        let op = opStack.pop();

        while (op !== "(" && valueStack.length > 1) {
          const val1 = parseFloat(valueStack.pop());
          const val2 = parseFloat(valueStack.pop());
          let res = calc[op](val2, val1);

          valueStack.push(res);

          if (opStack) op = opStack.pop();
          else break;
        }
      } else if (item === "(") {
        opStack.push(item);
      } else if (
        item in operators &&
        opStack.length > 0 &&
        operators[opStack[opStack.length - 1]] > operators[item]
      ) {
        const val1 = valueStack.pop();
        const val2 = valueStack.pop();
        const res = calc[opStack.pop()](val2, val1);
        valueStack.push(res);
        opStack.push(item);
      } else if (item in operators) {
        opStack.push(item);
      } else {
        valueStack.push(item);
      }
    }

    return valueStack[0];
  }
}

const obj = new Calculator();

let exp = "10 +   2 *   (   6 - (4 + 1) / 2) + 7";
let exp2 = "10+5*(4/ 3)";
let exp3 = "(((2+3)*4)-1)/((5+6)-7)";
let exp4 = "3+(4*(5-2))/7";

let z = obj.calculate(exp);
console.log(z);

module.exports = Calculator;
