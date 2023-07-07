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

function evaluateExpression(expression) {
  // Ensure the expression only contains valid characters
  const validCharacters = /^[0-9 \+\-\*\/\(\)]+$/;
  if (!validCharacters.test(expression)) {
    throw new Error("Invalid characters in expression");
  }

  // Ensure the parentheses are balanced
  let depth = 0;
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "(") depth++;
    if (expression[i] === ")") depth--;
    if (depth < 0) throw new Error("Unbalanced parentheses");
  }
  if (depth > 0) throw new Error("Unbalanced parentheses");

  // Evaluate the expression
  try {
    const result = eval(expression);
    return result;
  } catch (error) {
    throw new Error("Invalid expression");
  }
}
function removeSpaces(expression) {
  return expression.replace(/\s+/g, "");
}

const ops = {
  SUBSTRACT: 1,
  ADD: 2,
  MULTIPLY: 3,
  DIVIDE: 4,
  CLEAR: 5,
  CALCULATE: 6,
};

const exe = {
  [ops.ADD]: (rez, m) => rez + m,
  [ops.SUBSTRACT]: (rez, m) => rez - m,
  [ops.DIVIDE]: (rez, m) => rez / m,
  [ops.MULTIPLY]: (rez, m) => rez * m,
  [ops.CLEAR]: () => 0,
  [ops.CALCULATE]: (_, exp) => evaluateExpression(removeSpaces(exp)),
};
class Calculator {
  #result = 0;
  #operation(ops, num) {
    this.#result = exe[ops](this.#result, num);
  }
  add(n) {
    this.#operation(ops.ADD, n);
  }
  substract(n) {
    this.#operation(ops.SUBSTRACT, n);
  }
  divide(n) {
    this.#operation(ops.DIVIDE, n);
  }
  multiply(n) {
    this.#operation(ops.MULTIPLY, n);
  }
  clear() {
    this.#operation(ops.CLEAR, 0);
  }
  calculate(exp) {
    this.#operation(ops.CALCULATE, exp);
  }
}

module.exports = Calculator;
