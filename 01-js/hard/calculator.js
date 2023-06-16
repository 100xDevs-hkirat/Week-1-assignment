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

  add(n) {
    this.result += n;
  }

  subtract(n) {
    this.result -= n;
  }

  multiply(n) {
    this.result *= n;
  }

  divide(n) {
    this.result /= n;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expr) {
    let s = this.isValid(expr);
    if (!s) return;
    console.log(this.getPostFix(s));
    let ans = this.evaluatePostFix(this.getPostFix(s));
    console.log(ans);
  }

  getPostFix(s) {
    let st = [];
    let postFix = [];
    let hm = {
      "/": 4,
      "*": 3,
      "+": 2,
      "-": 1,
    };

    let arr = this.parseString(s);
    console.log(arr);
    for (let ch of arr) {
      if (Number.isInteger(parseInt(ch))) {
        postFix.push(ch);
      } else {
        if (ch === "(") {
          st.push(ch);
        } else if (ch === ")") {
          while (st.length > 0 && st[st.length - 1] !== "(")
            postFix.push(st.pop());
          st.pop();
        } else {
          while (st.length !== 0 && hm[ch] <= hm[st[st.length - 1]]) {
            postFix.push(st.pop());
          }
          st.push(ch);
        }
      }
    }
    while (st.length != 0) {
      postFix.push(st.pop());
    }
    return postFix;
  }

  parseString(s) {
    let arr = [];
    let j = 0;
    for (let i = 0; i < s.length; i++) {
      let ch = s.charAt(i);

      if (this.allowedChars.indexOf(ch) >= 0) {
        let t = s.substring(j, i);
        if (t) arr.push(t);
        arr.push(ch);
        j = i + 1;
      }
    }
    let exprEnd = s.substring(j);
    if (exprEnd) arr.push(s.substring(j));

    arr = arr.filter((x) => x !== " ");
    return arr;
  }

  isValid(expr) {
    this.allowedChars = "/*-+()";
    let s = expr
      .split(" ")
      .filter((op) => op.length !== 0)
      .join("");

    let isInvalid = s
      .split("")
      .filter((op) => isNaN(op) && this.allowedChars.indexOf(op) === -1);
    if (isInvalid.length > 0) {
      console.log("Invalid expression");
      return "";
    }
    return s;
  }

  evaluatePostFix(arr) {
    let st = [];
    for (let i = 0; i < arr.length; i++) {
      let ch = arr[i];
      if (!isNaN(parseInt(ch))) {
        st.push(parseInt(ch));
      } else {
        let a = st.pop();
        let b = st.pop();

        switch (ch) {
          case "+":
            st.push(b + a);
            break;
          case "-":
            st.push(b - a);
            break;
          case "*":
            st.push(b * a);
            break;
          case "/":
            st.push(b / a);
            break;
        }
      }
    }

    return st.pop();
  }
}

//module.exports = Calculator;
let calc = new Calculator();
calc.calculate("(10+2)*(3+9)");
