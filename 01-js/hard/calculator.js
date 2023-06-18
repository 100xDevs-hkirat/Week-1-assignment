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
    this.result+=num;
  }
  subtract(num){
    this.result-=num;
  }
  multiply(num){
    this.result*=num;
  }
  divide(num){
    if (num == 0) throw Error("Trying to divide the result with Zzzero!");
    this.result/=num;
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }

  /* ************************************ Utility Functions Start *************************************** */
  _parseString(str){
    /*
    Utility function to trim the string of extra spaces and returns a list of string expression charactrers
    */
    str = str.replace(/[(]/g, ' ( ');
    str = str.replace(/[)]/g, ' ) ');
    str = str.replace(/\s+/g, ' ').trim();
   
    return str.split(' ');
  }
  _checkInvalidString(str){
    /*
    Utility function to check for any invalid characters in the string other than operators and numbers as well as checking
    for unbalanced bracket sequences in the expression returns true if the string is valid else throws an error.
    */
    function isAlpha(str){
      return /^[a-zA-z]+$/.test(str);
    }

    let bracketStk = [];
    let n = str.length;

    for (let i = 0; i < n; i++){
      if (str[i] == "("){
        bracketStk.push(str[i]);
      }
      else if (str[i] == ")"){
        if (bracketStk.length > 0) bracketStk.pop();
        else throw Error("Unbalanced bracket sequence in the expression! No opening bracket to match!");
      }
      else if (isAlpha(str[i])){
        throw Error("Expression consists of non-numeric characters that can be parsed to evaluate an answer!")
      }
    }

    if (bracketStk.length > 0) throw Error("Unbalanced bracket sequence in the expression! No closing brackets to match");
    return true;
  }
  _operation(num1,num2,op){
    /*
    Utility function to complete the arithmetic operation given the two numbers and the operator to compute the result.
    */
    switch(op){
      case '+':
        return num1+num2;
        break;
      case '-':
        return num1-num2;
        break;
      case '*':
        return num1*num2;
        break;
      case '/':
        if (num2 == 0) throw Error("Trying to divide the number by Zzzzero!");
        return num1/num2;
        break;
    }
  }

  _computeExpression(numStk,operatorStk){
    /*
    Utility function to compute the last arithmetic expression on the top most operator in the stack
    which then adds the computed result back into the number stack.
    */
    let num2 = numStk.pop();
    let num1 = numStk.pop();
    let operator = operatorStk.pop();
    numStk.push(this._operation(num1,num2,operator));
  }
  /* ************************************ Utility Functions End *************************************** */

  calculate(string){
    /*
    1. parse the string first by removing extra spaces and throw an error if the string contains characters other than
       numbers or BDMAS characters.
    2. compute the arithmetic string by the BODMAS rule and return the result
    */
    function isNumber(str){
      return /^\d+(.\d+)?$/g.test(str);
    }

    let strings = this._parseString(string);
    console.log(strings);
    
    if (this._checkInvalidString(strings)){
      var operatorStk = [];
      var numStk = [];
      let precedence = {
        '-': 0,
        '+': 1,
        '*': 2,
        '/': 3
      }
      let i = 0;
      let n = strings.length;
      while (i < n) {
        let str = strings[i];
        // console.log(str,operatorStk,numStk);
        if (isNumber(str)){
          let num = +str; // this converts the numerical string into decimal or integer number implicitly
          numStk.push(num);
        }
        else if (str == '(') operatorStk.push(str);
        else if (str == ')'){
          while (operatorStk[operatorStk.length-1] != '('){
            this._computeExpression(numStk,operatorStk);
          }
          operatorStk.pop();
        }
        else{
          let top = operatorStk[operatorStk.length-1];
          if (operatorStk.length > 0 && top != '(' && precedence[top] >= precedence[str]){
            while (top != '(' && operatorStk.length > 0 && precedence[top] >= precedence[str]){
              this._computeExpression(numStk,operatorStk);
            }
            operatorStk.push(str);
          }
          else operatorStk.push(str);
        }
        // console.log(numStk,operatorStk,str);
        i+=1;
      }
    }

    while (operatorStk.length > 0){
      this._computeExpression(numStk,operatorStk);
    }
    this.result = numStk[0];
  }
}

// let calc = new Calculator();
// console.log(calc.calculate(')10 + 2('));

module.exports = Calculator;
