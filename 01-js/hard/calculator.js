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
    this.result = 2;
  }
  //addition
  add = (num) => {
    if (!isNaN(num)) {
      return this.result + num;
    } else {
      throw new Error("Enter valid input");
    }
  };
  //subtraction
  subtract = (num) => {
    if (!isNaN(num)) {
      return this.result - num;
    } else {
      throw new Error("Enter valid input");
    }
  };
  //muliplication
  multiply = (num) => {
    if (typeof num == "number") {
      return this.result * num;
    } else {
      throw new Error("Enter valid input");
    }
  };
  //divide
  divide = (num) => {
    if (!isNaN(num)) {
      return this.result / num;
    }
    if (n === 0) {
      throw new Error("Divide via zero not possible");
    } else {
      throw new Error("Enter valid input");
    }
  };
  //clear
  clear = () => {
    return (this.result = 0);
  };
  //getresult
  result = () => {
    return this.result;
  };
  //string calculation
  calculation = (stringVal) => {
    if (typeof stringVal == "string") {
      stringVal = stringVal.replace(/\s/g, "");
      return eval(stringVal);
    } else {
      throw new Error("Enter valid input");
    }
  };
  //
}
var obj = new Calculator();

obj.add(10);
obj.subtract(10);
obj.multiply(10);
obj.divide(2);
obj.clear();
obj.result();
obj.calculation("10 +   2 *    (   6 - (4 + 1) / 2) + 7");

module.exports = Calculator;
