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

const OPERATORS= "+-*/^"
const PRIORITY= {
  "(": 0,
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
  "^": 3
}

class Calculator {

  constructor(){
    this.result=0
  }
  add(num){
    this.result= this.result+num
  }
  subtract(num){
    this.result= this.result - num
  }
  multiply(num){
    this.result= this.result*num
  }
  divide(num){
    if(num===0){
      throw new Error("divideByZero exception: denominator can not be zero")
    }
    this.result=this.result/num
    if(this.result%1!=0){
      return parseFloat(this.result).toFixed(2)
    }
  }
  clear(){
    this.result=0
  }
  getResult(){
    return this.result
  }
  calculate(exp){
    try{
      // console.log("expression is",exp)
      if(this.areBracketsBalanced(exp)){
        // console.log("paranehesis are balanced")
        exp=exp.replace(" ","")
        const expAsObject=this.convertExpressionToObject(exp)
        // console.log("exp as object ",expAsObject)
        const postFixObject=this.convertInfixToPostfix(expAsObject)
        // console.log("infix to postfix ",postFixObject)
         this.result=this.solvePostfixExpression(postFixObject)
        return this.result
      }else{
        throw "Invalid expression provided"
      }

    }catch(err){
      throw new Error(err)
      // return "cool"
    }

  }
  areBracketsBalanced(s) {
    let i = -1;
    const stack = new Array(s.length);
  
    for (const ch of s) {
      if (ch === '(' || ch === '{' || ch === '[') {
        stack[++i] = ch;
      } else if (ch === ')' || ch === '}' || ch === ']') {
        if (
          i >= 0 &&
          ((stack[i] === '(' && ch === ')') ||
            (stack[i] === '{' && ch === '}') ||
            (stack[i] === '[' && ch === ']'))
        ) {
          i--;
        } else {
          return false;
        }
      } else {
        continue;
      }
    }
    return i === -1;
  }

  convertExpressionToObject(s) {
    let charIndex = 0;
    let result = [];
    
    while (charIndex < s.length) {
      if (s[charIndex] === ")" || s[charIndex] === "(") {
        result.push({
          type: "PARENTHESIS",
          value: s[charIndex]
        });
        charIndex += 1;
      } else if (charIndex < s.length && s[charIndex].match(/[a-zA-Z0-9]/i)) {
        let curStr = "";
        
        while (charIndex < s.length && s[charIndex] !== "(" && s[charIndex] !== ")" && !OPERATORS.includes(s[charIndex])) {
          curStr += s[charIndex];
          charIndex += 1;
        }
        
        // curStr is a number
        if (!isNaN(parseFloat(curStr))) {
          result.push({
            type: "INUMBER",
            value: parseFloat(curStr.trim())
          });
        } else {
          throw "Invalid expression provided"
        }
      } else if (OPERATORS.includes(s[charIndex])) {
        result.push({
          type: "OP2",
          value: s[charIndex]
        });
        charIndex += 1;
      } else {
        charIndex += 1;
      }
    }
    return result;
  }
  convertInfixToPostfix(infixArr) {
    let postfix = [];
    let stack = [];
  
    for (let token of infixArr) {
      if (token.type === "IVAR" || token.type === "INUMBER") {
        postfix.push(token);
      } else if (token.type === "PARENTHESIS" && token.value === "(") {
        stack.push(token);
      } else if (token.type === "PARENTHESIS" && token.value === ")") {
        while (stack.length > 0 && stack.slice(-1)[0].value !== "(") {
          postfix.push(stack.pop());
        }
        stack.pop();
      } else {
        if (
          stack.length > 0 &&
          PRIORITY[token.value] > PRIORITY[stack.slice(-1)[0].value]
        ) {
          stack.push(token);
        } else {
          while (
            stack.length > 0 &&
            stack.slice(-1)[0].value !== "(" &&
            PRIORITY[token.value] <= PRIORITY[stack.slice(-1)[0].value]
          ) {
            postfix.push(stack.pop());
          }
          stack.push(token);
        }
      }
    }
  
    while (stack.length > 0) {
      postfix.push(stack.pop());
    }
    return postfix;
  }
  solvePostfixExpression(postfix) {
    let res = 0;
    let stack = [];
  
    for (const token of postfix) {
      if ( token.type === "INUMBER") {
          stack.push(token);
        
      } else {
        const n2 = stack.pop().value;
        const n1 = stack.pop().value;
        let curEval = "";
  
        switch (token.value) {
          case "+":
            curEval = n1 + n2;
            break;
          case "-":
            curEval = n1 - n2;
            break;
          case "*":
            curEval = n1 * n2;
            break;
          case "/":
            if(n2==0){
              throw new Error("divideByZero exception: denominator can not be zero")
            }
            curEval = n1 / n2;
            break;
          default:
            break
        }
  
        stack.push({ type: "INUMBER", value: curEval });
      }
    }
    res = stack.pop().value;
    if (Object.is(res, -0)) {
      res = 0;
    } else {
      res = res;
    }
  
    return res;
  }

}

module.exports = Calculator;
