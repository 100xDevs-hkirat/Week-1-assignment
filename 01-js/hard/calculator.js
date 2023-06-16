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
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw Error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {

  constructor() {
    this.result = 0
    this.operators = ['+', '-', '*', '/']
    this.parentheses = ['(', ')']
  }

  add(x) {
    this.result += x
  } 

  subtract(x) {
    this.result -= x
  }

  multiply(x) {
    this.result *= x
  }

  divide(x) {
    if(x === 0) {
      throw new Error("Division by zero cannot be performed")
    }
    this.result /= x
  }

  clear() {
    this.result = 0
  }

  getResult() {
    return this.result
  }

  isOperator(c) {
    const ret = this.operators.find(o => o === c) ? true : false
    console.log(`${c} is operator`, ret)
    return ret
  }

  isParentheses(c) {
    const ret = this.parentheses.find(p => p === c) ? true : false
    console.log(`${c} is parenthesis`, ret)
    return ret
  }

  isDigit(c) {
    const ret = (c >= '0' && c <= '9')
    console.log(`${c} is digit`, ret)
    return ret
  }

  calculate(str) {
    const result = eval(str)
    if(result === Infinity) {
      throw new Error("Division by zero cannot be preformed")
    }
    this.result = result

  //   let s = ''
  //   let c = '', i = 0
    
  //   for(i=0;i<str.length;i++) {
  //     c = str[i]
  //     if(this.isDigit(c) || this.isOperator(c) || this.isParentheses(c)) {
  //       s += c
  //     }
  //     else if(! /^\s$/.test(c)) {
  //       throw new Error("invalid character encountered")
  //     }
  //   }
  //   console.log("trimmed str:", s)

  //   if(isNaN(Number(s))) {
      
  //     const n = s.length

  //     if((n >= 1) && (this.isOperator(s[0]))) {
  //       throw new Error("operator is not positioned correctly")
  //     }
  
  //     let stack = []
  
  //     i = 0
  //     let t = ''
  //     let lp = 0, rp = 0
  //     while(i<n) {
  //       c = s[i]
  //       if(this.isParentheses(s[i])) {
  //         if(c === '(') {
  //           lp++
  //         }
  //         else {
  //           rp++
  //         }
  //         console.log(`${s[i]} at index ${i} is parentheses, lp: ${lp}, rp: ${rp}`)
  //         if(rp > lp) {
  //           throw new Error("Incorrect parentheses")
  //         }
  //       }
  //       if(c === '(') {
  //         let j = n-1
  //         while((i<j) && (s[j] !== ')')) {
  //           j--
  //         }
  //         if(i == j) {
  //           throw new Error("incorrect parentheses")
  //         }
  //         else {
  //           t = s.substring(i+1, j)
  //           stack.push(this.calculate(t))
  //           t = ''
  //           i = j+1
  //         }
  //       }
  //       else if(this.isDigit(s[i])) {
  //         console.log("checking for number at ", c)
  //         t = ''
  //         while(this.isDigit(s[i]) && (i<n)) {
  //           c = s[i]
  //           t += c
  //           console.log("adding ", c)
  //           i++
  //         }
  //         console.log(`#${t}# is a number`)
  //         stack.push(t)
  //         t = ''
  //       }
  //       else if(this.isOperator(s[i])) {
  //         const prevChar = stack.at(-1)
  //         if(this.isOperator(prevChar)) {
  //           throw new Error("Can't have 2 operators placed consecutively")
  //         }
  //         else {
  //           stack.push(c)
  //         }
  //         i++
  //       }
  //       else {
  //         console.log(`stuck on this: #${s[i]}# at index: ${i} for s: ${s}`)
  //       }
  //     }

  //     console.log("STACK:", stack)

  //     this.clear()
  //     let prevOperator = ''
  //     for(let elem of stack) {
  //       if(!this.isOperator(elem)) {
  //         const cur = Number(elem)
  //         if(prevOperator === '+' || prevOperator === '') {
  //           this.add(cur)
  //         }
  //         else if(prevOperator === '-') {
  //           this.subtract(cur)
  //         }
  //         else if(prevOperator === '*') {
  //           this.multiply(cur)
  //         }
  //         else if(prevOperator === '/') {
  //           this.divide(cur)
  //         }
  //       }
  //       else {
  //         prevOperator = elem
  //       }
  //     }
  //     if(isNaN(this.getResult())) {
  //       throw new Error("Not a number")
  //     }
  //   }
  //   return Number(s)
  }

}

// let calc = new Calculator();
// calc.calculate('10 +   2 *    (   6 - (4 + 1) / 2) + 7')
// console.log(calc.getResult())

module.exports = Calculator;
