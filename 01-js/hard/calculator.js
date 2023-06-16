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


class Calculator 
{
  constructor(){
    this.result = 0;
    this.vstack =[];
    this.ostack =[];
  }
  add(num){
    this.result += num;
    }
    subtract(num){
    this.result -= num;
    }
    multiply(num){
    this.result *= num;
    }
    divide(num){
    this.result /= num;
    }
    clear(){
    this.result = 0;
    }
    getResult(){
    return this.result;
    }
    
    isOperator(item){
      let operators = ["*","-","/","+","(",")"]
      if (operators.includes(item)){
        return true;
      }
      return false;
      }
      get_precendace(op){
        switch(op){
          case '+':
          case '-':
            return 1;
          case '*':
          case '/':
            return 2;
          case '^':
            return 3;
          default :
            return 0;
      
        }
      }
      getAns(op,num1,num2){
        switch(op){
          case '+': return num2+num1;
          case '-':return num2- num1;
          case '*':return num2* num1;
          case '/':return num2 / num1;
          case '^':return num2^num1 ;
      }
      }
      calculate(inp){
        var ans=0;
        const exp=inp.replace(/\s+/g, "");
        console.log(exp)
      const items = exp.split(/(\d+(?:\.\d+)?|[-+*/()])/).filter(Boolean);
      console.log(items)
        for(const item of items){
          console.log(item,this.vstack,this.ostack)
          if(isNaN(item) && ! this.isOperator(item)){
            throw new TypeError("Invalid type");
          }
          else{
            let op;
            
            //check if it's a operator or operand
            if(this.isOperator(item)){
              // 1. top of stack high pripority op
              // 2. if ) pop all till )
              console.log(this.vstack,this.ostack)
              if(item == ')'){
                op=this.ostack.pop()
                while(op != '('){
                  ans = this.getAns(op,this.vstack.pop(),this.vstack.pop())
                  this.vstack.push(ans)
                  op=this.ostack.pop()
                }
              }
              else{
                op=item
                if (this.ostack.length == 0 || item == '('){
                    this.ostack.push(op)
                }
                else{
                  console.log(op,this.get_precendace(op) , this.get_precendace(this.ostack.slice(-1)[0]) )
                  while(this.get_precendace(op) < this.get_precendace(this.ostack.slice(-1)[0])){
                    console.log(op)
                    ans = this.getAns(this.ostack.pop(),this.vstack.pop(),this.vstack.pop())
                    this.vstack.push(ans)
                  }
                  this.ostack.push(op)
              }
              }
            }
            else{
              this.vstack.push(Number(item))
            }
          }
        }
        while(this.ostack.length > 0 ){
          console.log(this.vstack,this.ostack)
          ans = this.getAns(this.ostack.pop(),this.vstack.pop(),this.vstack.pop())
          this.vstack.push(ans)
         
        }
      this.add(ans)
      }
}
calc = new Calculator();
try {
  calc.calculate('5 + 5');
} catch (error) {
  // Handling the error
  console.error(error);
}


console.log(calc.getResult())
module.exports = Calculator;
