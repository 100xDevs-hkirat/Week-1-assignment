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

class Calculator{
  constructor(){
    this.res=0;
  }
  add(a){
    this.res+=a;
  }
  subtract(a){
    this.res-=a;
  }
  multiply(a){
    this.res*=a;
  }
  divide(a){
    if(a==0){
      throw new Error("We cannot divide by 0");
    }
    else{
      this.res/=a;
    }
  }
  clear(){
    this.res=0;
  }
  getResult(){
    return this.res;
  }
  calculate(str){
    str=str.replace(/\s+/g,'');
    if(!str.match(/^[0-9+*/().-]+$/)){
      throw new Error("Invalid Input");
    }
    return this.res=eval(str);
  }
  
      
}
const calculator = new Calculator();

calculator.calculate('10 +   2 *    (   6 - (4 + 1) / 2) + 7');
console.log(calculator.getResult()); // Output: 23

calculator.clear();
calculator.add(5);
calculator.divide(0);

module.exports = Calculator;
