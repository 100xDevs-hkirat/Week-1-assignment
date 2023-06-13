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
    constructor(){
      this.result = 0
    }

    add(n){
      this.result+=n
    }
    substract(n){
      this.result-=n
    }
    mult(n){
      this.result*=n
    }
    divide(n){
     if(n === 0){
       throw new Error("Cannot divide by zero")
     }
     this.result/=n
    }
    clear(){
      this.result = 0
    }
    getResult(){
      return this.result
    }
    calculate(expression){
       // Validate the expression
  const validExpressionRegex = /^[\d\s+\-*/().]+$/;
  if (!validExpressionRegex.test(expression)) {
    throw new Error("Invalid expression.");
  }

  // Check for invalid non-numerical characters
  const nonNumericalRegex = /[^\d\s+\-*/().]/;
  if (nonNumericalRegex.test(expression)) {
    throw new Error("Invalid expression. Contains invalid non-numerical characters.");
  }

  try {
    this.result = eval(expression);
  } catch (error) {
    throw new Error("Invalid expression.");
  }
    }
}

//Now calling the function
const calc = new Calculator()
calc.add(5)
calc.mult(2)
calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log(calc.getResult())


module.exports = Calculator;
