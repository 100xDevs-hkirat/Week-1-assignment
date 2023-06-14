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
function operatorGuess(op) {
  if (op === "+") {
    return "add";
  }
}
class Calculator {
  constructor(result) {
    this.result = result || 0;
  }
  add(num1) {
    // if (num1 && num2) {
    //   this.result = num1 + num2;
    // } else {
    //   if (num2 == null) {
    //     this.result = num1;
    //   }
    //   this.result = num2;
    // }
    this.result += num1;
  }
  subtract(num1) {
    // if (num1 && num2) {
    //   this.result = num1 - num2;
    // } else {
    //   if (num2 == null) {
    //     this.result = -num1;
    //   }
    //   this.result = -num2;
    // }
    this.result -= num1;
  }
  multiply(num1) {
    // if (num1 && num2) {
    //   this.result = num1 * num2;
    // }
    // if (num1 < 0 && num2 < 0) {
    //   this.result = num1 * num2;
    // }
    // if (num1 < 0 || num2 < 0) {
    //   this.result = -(num1 * num2);
    // } else {
    //   this.result = 0;
    // }
    this.result *= num1;
  }
  divide(num1) {
    // if (num1 && num2) {
    //   this.result = num1 / num2;
    // }
    if (num1 === 0) {
      throw new Error();
    } else {
      this.result /= num1;
    }
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(str) {
    const regx1 = /[abcdefghijklmnopqrstuvwxyz!@#$%^&,<>?:;'"|~`_=]/;
    const regx2 = /\s/g;
    if (regx1.test(str)) {
      throw new Error();
    }
    str = str.toLowerCase();
    str = str.replace(regx2, "");
    // try {
    //   this.result = eval(str);
    // } catch (error) {
    //   throw error;
    // }
    this.result = eval(str);
    if (!isFinite(this.result)) {
      throw Error();
    }
  }
  // isOperator(car) {
  //   const reg = /[+-*/]/;
  //   return reg.test(car);
  // }
  // bracketCal(start, end, str) {
  //   for (let i = start; i < end; i++) {
  //     if (this.isOperator(str[i])) {
  //       let op = operatorGuess(str[i]);
  //     }
  //     let num1 = str;
  //   }
  // }
}
// const regx1 = /[abcdefghijklmnopqrstuvwxyz!@#$%^&,.<>?:;'"|~`_=]/;
// let str = "10 +   2 *    (   6 - (4 + 1) / 2) + ab!";
// if (regx1.test(str)) {
//   console.log(Error);
// }
// let str = "10 +   2 *    (   6 - (4 + 1) / 2) + 7";
// const regx2 = /\s/g;
// str = str.toLowerCase();
// str = str.replace(regx2, "");
// console.log(str);
// let index = str.indexOf()
module.exports = Calculator;
