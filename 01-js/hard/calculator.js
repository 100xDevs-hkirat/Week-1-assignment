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
        this.result = 0;
    }
    add(num){
        this.result += num;
    }
    sub(num){
        this.result -= num;
    }
    mul(num){
        this.result *= num;
    }
    div(num){
        if(num!=0){
            this.result /= num;
        }
        else{
            console.error("divide by zero error");
        }

    }
    clear(){
        this.result = 0;
    }
    getResult(){
        return this.result
    }
    calculate(expression){
        const parsedExpression = expression.replaceAll(" ",'');
        const result = eval(parsedExpression);
        if(isNaN(result)){
            throw new error("Invalid expression, please provide a valid one ");
        }
        this.result =  result;
    }

}

module.exports = Calculator;

//testing
const calculator = new Calculator();
console.log(calculator.getResult());

calculator.add(5);
console.log(calculator.getResult());

calculator.sub(2);
console.log(calculator.getResult());

calculator.mul(10);
console.log(calculator.getResult());

calculator.div(3);
console.log(calculator.getResult());

calculator.clear();
console.log(calculator.getResult());

calculator.calculate('10 + 2 * (6 - (4 + 1) / 2) + 7');
console.log(calculator.getResult());