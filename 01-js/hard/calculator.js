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

function tokenize(input){
  let scanner = 0;
  let tokens =[];
  input = input.replace(/\s/g, '');// eliminate the gaps
  while(scanner < input.length){
    const char = input[scanner];

    // if the char is number
    if(/[0-9]/.test(char)){
      let digit ='';
      //if number has any decimal points, digits. then take them as whole 
      while(scanner < input.length && /[0-9\.]/.test(input[scanner])){
        digit += input[scanner++];
      }

      const number = parseFloat(digit);
      tokens.push(number);
      continue;
    }

    if(/[+\-/*()^]/.test(char)){
      tokens.push(char);
      scanner++;
      continue;
    }
    throw new Error(`Invalid token ${char} at positions ${scanner}`);

  }
  if(!tokens.includes('(')){
    throw new Error("sus");
  }
return tokens;

}

function toRPN(tokens){
const _operators=[];// to store operators 
const _out=[];// store RPN

//go through all the tokens one by one
for(let i =0;i<tokens.length;i++){
  const token = tokens[i];

  //in case of number add it to the output array
  if(typeof token === 'number'){
    _out.push(token);
    continue;
  }

  // if we have any operators in tokens 
  if(/[+\-/*<>=^]/.test(token)){

    // we will pop the operator stack and push operators to output array 
    //if current token has less precedence than token in the operator array
    while(shouldUnwindOperatorsStack(_operators, token)){
      _out.push(_operators.pop());
    }
    //if it is a token add it to the operator array
    _operators.push(token);
    continue;
  }
  if( token === '('){
    // add the '(' operator stack as placeholder to decide when to unwind the _operators
    _operators.push(token);
    continue;
  }
  // when the token is ')' we need to add operators to output stack
  if(token === ')'){
    //if there are still tokens in _operators will add then to output till we get '('
    while(_operators.length> 0 && _operators[_operators.length -1] !== '('){
        _out.push(_operators.pop());
    }
    //once we have '(' will discard it
    _operators.pop();
    continue;
  }
    
  throw new Error(`Unparsed token ${token} at position ${i}`);
}
  for(let i=_operators.length-1; i>=0; i--){
    _out.push(_operators[i]);
  }
  return _out;

}
const precedence={'^':3, '*': 2, '/':2, '+':1, '-':1};

function shouldUnwindOperatorsStack(operators, nextToken){
  if(operators.length === 0){
    return false;
  }

  const lastOperator = operators[operators.length -1];
  return precedence[lastOperator] >= precedence[nextToken]; 
}

function evaluate(rpn){
  
  const stack = [];

  for(let i=0; i<rpn.length; i++){
    const token = rpn[i];

    if(/[()]/.test(token)){
      throw new Error('Invalid Parantheses!!!');
    }
    if(/[+\-/*^]/.test(token)){
      stack.push(operate(token, stack));
      continue;
    }

    stack.push(token);
  }
  return stack.pop();
}

function operate(operator, stack){
  const a = stack.pop();
  const b = stack.pop();

  switch(operator){
    case '+': return b+a;
    case '-': return b-a;
    case '*': return b*a;
    case '/':{ 
      if(a === 0)
        throw new Error("Invalid operation!!!");
      return b/a};
    case '^': return Math.pow(b,a);
    default:
      throw new Error(`Invalid operator: ${operator} `);
  }

}


class Calculator {
  constructor(){
    this.result = 0;
  }
  add(n){
    this.result +=n;
  }
  subtract(n){
    this.result -= n;
  }
  multiply(n){
    this.result *=n;
  }

  divide(n){
    if(n === 0){
      throw new Error("Invalid !!!");
    }
    this.result /=n;
  }
  clear(){
    this.result =0;
  }
  getResult() {
    return this.result;
  }
  calculate(str){
    return this.result+=evaluate(toRPN(tokenize(str)));
  }
}

//console.log(toRPN(tokenize('10 + 2) + 3')));
module.exports = Calculator;
