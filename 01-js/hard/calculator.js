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

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }
  calculate(str) {
    if (eval(str) === Infinity) {
      throw Error();
    } else {
      try {
        this.result = eval(str);
      } catch (e) {
        throw Error();
      }
    }
  }
}

//   calculate(expression) {
//   const sanitizedExpression = expression.replace(/\s+/g, ""); // Remove all spaces from the expression

//   const postfixExpression = this.convertToPostfix(sanitizedExpression); // Convert the expression to postfix notation
//   const result = this.evaluatePostfix(postfixExpression); // Evaluate the postfix expression

//   this.result = result;
// }

// // Helper function to convert the infix expression to postfix notation
// convertToPostfix(infixExpression) {
//   const operatorStack = [];
//   const postfixExpression = [];
//   const operators = {
//     "+": 1,
//     "-": 1,
//     "*": 2,
//     "/": 2
//   };

//   for (let i = 0; i < infixExpression.length; i++) {
//     const char = infixExpression[i];

//     if (/\d/.test(char)) {
//       // Digit
//       let number = char;
//       while (/\d/.test(infixExpression[i + 1])) {
//         number += infixExpression[i + 1];
//         i++;
//       }
//       postfixExpression.push(Number(number));
//     } else if (char === "(") {
//       // Opening parenthesis
//       operatorStack.push(char);
//     } else if (char === ")") {
//       // Closing parenthesis
//       while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== "(") {
//         postfixExpression.push(operatorStack.pop());
//       }
//       if (operatorStack[operatorStack.length - 1] === "(") {
//         operatorStack.pop();
//       }
//     } else if (operators[char]) {
//       // Operator
//       while (
//         operatorStack.length > 0 &&
//         operators[operatorStack[operatorStack.length - 1]] >= operators[char]
//       ) {
//         postfixExpression.push(operatorStack.pop());
//       }
//       operatorStack.push(char);
//     } else {
//       throw new Error("Invalid character");
//     }
//   }

//   while (operatorStack.length > 0) {
//     postfixExpression.push(operatorStack.pop());
//   }

//   return postfixExpression;
// }

// // Helper function to evaluate the postfix expression
// evaluatePostfix(postfixExpression) {
//   const operandStack = [];

//   for (let i = 0; i < postfixExpression.length; i++) {
//     const token = postfixExpression[i];

//     if (typeof token === "number") {
//       operandStack.push(token);
//     } else {
//       if (operandStack.length < 2) {
//         throw new Error("Invalid expression");
//       }
//       const operand2 = operandStack.pop();
//       const operand1 = operandStack.pop();

//       let result;
//       switch (token) {
//         case "+":
//           result = operand1 + operand2;
//           break;
//         case "-":
//           result = operand1 - operand2;
//           break;
//         case "*":
//           result = operand1 * operand2;
//           break;
//         case "/":
//           if (operand2 === 0) {
//             throw new Error("Cannot divide by zero");
//           }
//           result = operand1 / operand2;
//           break;
//         default:
//           throw new Error("Invalid operator");
//       }

//       operandStack.push(result);
//     }
//   }

//   if (operandStack.length !== 1) {
//       throw new Error("Invalid expression");
//   }

//   return operandStack.pop();
// }

// }


module.exports = Calculator;
