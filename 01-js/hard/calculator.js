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

  add = (n) => this.result += n;

  subtract = (n) => this.result -= n;

  multiply = (n) => this.result *= n;

  divide = (n) => {
    if (!n) throw Error("You are dividing a number by 0");
    if (n < 1) throw Error("You cannot divide a number by any value less than 1");
    this.result = this.result / n;
  }

  clear = () => this.result = 0;

  getResult = () => {
    return this.result;
  }

  calculate = (expression) => {
   // Check for non-numerical characters in the expression before proceeding further
   if (/^[A-Za-z]+$/.test(expression)) throw Error("Expression contains invalid non-numerical characters");
    
   // 1. Remove all spaces from the expression
   const expressionWithoutSpaces = expression.replace(/\s+/g, '');
   // 2. check for bracket combinations
   let temp_dict = {};
   for(let counter = 0; counter < expressionWithoutSpaces.length; counter++){
    if(expressionWithoutSpaces[counter] in ['(', ')', '{', '}', '[', ']'])
      temp_dict[expressionWithoutSpaces[counter]] = (temp_dict[expressionWithoutSpaces[counter]] || 0) + 1;  
   }
   // 3. Check bracket combinations should not be a odd number
    if(temp_dict.length){
        const brackets = Object.values(temp_dict);
        console.log('brackets: ', brackets);
    }
   }
}

module.exports = Calculator;
