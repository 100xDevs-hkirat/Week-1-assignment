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
  static result = 0;
  static exprStack = [];
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return b - a;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
  clear() {
    return;
  }
  getResult() {
    return;
  }
  calculate() {
    return;
  }
  /*  push(item){
    this.exprStack.push(item)
  }
  pop(item){
    return this.exprStack.pop()
  }
*/
}
function validateString(strExpr) {
  tstr = str.replace(/[^a-zA-Z]/g, "");

  size = tstr.length;
  if (size > 0) {
    // console.log("IF THROWS EXCEPTION" + size);
    throw "Error in String ";
  } else {
    // console.log("DOES NOT THROW EXCEPTION" + size);
  }
}
function scanString(strExpr) {
  calculator.exprStack = [];
  try {
    validateString(strExpr);
    return eval(strExpr)
    // console.log("Fulled " + calculator.exprStack);
  } catch (err) {
     console.log(err + "Found " + tstr + " in Expression ");
  }
}

//str = "10 +   2 *    (   6 - (4 + 1) / 2) + 7";
str = "10 +   2 *    (   6 - ( 4 + 1 ) / 2 ) + 7";
console.log("--------------------------"+eval(str))
const calculator = new Calculator();
scanString(str);
// console.log(str);
module.exports = Calculator;



//PS D:\Workspaces\git\100xDev-Assignments\Week_01_-_JS_Basics_and_Async\01-js> npx jest ./tests/calculator.test.js