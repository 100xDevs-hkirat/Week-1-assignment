class Calculator{

  constructor(){
    this.result=0;
  }

  add(num){
  this.result += num;
  }

  subtract(num){
    this.result -= num;
  }
   Multiply(num){
    this.result *= num;
  }
   clear(num){
    this.result =0;
  }

   getResult(){
    return this.result;
  }
  
  // To evaluate a expression
   calculate(expression) {
  // To remove spaces 
 var newExpression=expression.replace(/\s+/g,''); 
  // To check if it contains alphabets
  var checkForAlphabet=/[a-zA-Z]/;
  if(checkForAlphabet.test(newExpression)==true){
    throw new Error('Invalid Expression');
  }
  else{
     this.result= eval(newExpression);
  }
}
}

