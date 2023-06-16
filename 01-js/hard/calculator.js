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
  constructor(result){
    result = 0;
    this.result = result;
  }
  add(x){
    this.result+=x;
  }
  subtract(x){
    if(this.result != null) this.result-=x;
    else this.result = -x;
  }
  multiply(x){
    this.result = this.result*x;
  }
  divide(x){
    if(x != 0) this.result/=x;
    else return console.error(error);
  }
  clear(){
    this.result=0;
  }
  getResult(){
    return this.result;
  }
  calculate(str){
    let ans ="";
    for(var i=0;i<str.length;i++){
      if(str[i] != " ") ans+= str[i];
    }

    if(eval(ans) != Infinity) this.result = eval(ans);
    else return console.error(error);
  }
}
module.exports = Calculator;
