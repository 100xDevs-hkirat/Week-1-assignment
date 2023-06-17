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

const validExpression = (element) => {
  const validExpressions = [
    "+",
    "-",
    "*",
    "/",
    "(",
    ")",
    ".",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];

  return validExpressions.includes(element);
};

const expressionToArray = (expression) => {
  return expression.match(/\d+\.?\d*|[+\-*/()]/g);
};

const calculate = (a, b, op) => {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) throw Error();
      return a / b;
  }
};

const hasPrecedence = (op1, op2) => {
  if (op1 === "(" || op1 === ")") return false;
  else if ((op1 === "*" || op1 === "/") && (op2 === "-" || op2 === "+"))
    return false;
  return true;
};

const calculateExpression = (expressionArray) => {
  const operations = ["+", "-", "*", "/"];

  const expressionLen = expressionArray.length - 1;
  let iterator = 0;

  const numberStack = [];
  const operationStack = [];

  // iterating expression
  while (iterator <= expressionLen) {
    const element = expressionArray[iterator];
    // (
    if (element === "(") {
      operationStack.push(element);
      iterator++;
    }
    // number
    else if (element == Number(element)) {
      numberStack.push(Number(element));
      iterator++;
    }
    // operation
    else if (operations.includes(element)) {
      while (
        operationStack.length > 0 &&
        operations.includes(operationStack[operationStack.length - 1]) &&
        hasPrecedence(element, operationStack[operationStack.length - 1])
      ) {
        const a = numberStack.pop();
        const b = numberStack.pop();
        const op = operationStack.pop();

        numberStack.push(calculate(b, a, op));
      }

      operationStack.push(element);
      iterator++;
    }
    // )
    else if (element === ")") {
      while (operationStack[operationStack.length - 1] !== "(") {
        if (operationStack.length === 0) throw Error("( missing in expression");

        const a = numberStack.pop();
        const b = numberStack.pop();
        const op = operationStack.pop();

        numberStack.push(calculate(b, a, op));
      }
      operationStack.pop();

      iterator++;
    }
  }

  // emptying operation stack
  while (operationStack.length !== 0) {
    const a = numberStack.pop();
    const b = numberStack.pop();
    const op = operationStack.pop();
    if (op === "(" || op === ")") throw Error();
    numberStack.push(calculate(b, a, op));
  }

  return numberStack[0];
};

class Calculator {
  result = 0;

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
    if (n === 0) throw Error();
    this.result /= n;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // remove spaces
    const trimmedExpression = expression
      .split(" ")
      .filter((char) => char !== "" || char !== " ")
      .join("");

    // check for invalid expression
    trimmedExpression.split("").forEach((char) => {
      if (!validExpression(char)) throw Error();
    });

    const expressionArray = expressionToArray(trimmedExpression);

    const expressionResult = calculateExpression(expressionArray);
    this.result = expressionResult;
    return expressionResult;
  }
}

const cal = new Calculator();

console.log(cal.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7"));

module.exports = Calculator;

// while (iterator <= expressionLen) {
//   const element = expressionArray[iterator];
//   if (operations.includes(element)) {
//     operationStack.push(element);
//     iterator++;
//     if (element === ")") {
//       operationStack.pop();
//       while (operationStack[operationStack.length - 1] !== "(") {
//         if (operationStack.length === 0) throw Error();

//         if (numberStack.length > 0) {
//           const currentOperationIndex = operationStack.length - 1;
//           const currentOperation = operationStack[currentOperationIndex];
//           const previousOperationIndex = currentOperationIndex - 1;
//           const previousOperation = operationStack[previousOperationIndex];

//           if (currentOperation === "(") {
//             operationStack.pop();
//             break;
//           }

//           if (
//             (["*", "/"].includes(currentOperation) &&
//               ["+", "-"].includes(previousOperation)) ||
//             (["*", "/"].includes(currentOperation) &&
//               ["*", "/"].includes(previousOperation))
//           ) {
//             const a = numberStack.pop();
//             const b = numberStack.pop();
//             const op = operationStack.pop();

//             numberStack.push(calculate(b, a, op));
//           } else if (
//             ["-", "+"].includes(currentOperation) &&
//             ["*", "/"].includes(previousOperation)
//           ) {
//             //excute prev
//             const a = numberStack.pop();
//             const b = numberStack.pop();
//             const c = numberStack.pop();

//             const op1 = operationStack.pop();
//             const op2 = operationStack.pop();

//             numberStack.push(calculate(c, b, op2));
//             numberStack.push(a);
//             operationStack.push(op1);
//           }
//         }
//       }
//     }
//     continue;
//   } else {
//     numberStack.push(Number(element));

//     if (numberStack.length > 2) {
//       const currentOperationIndex = operationStack.length - 1;
//       const currentOperation = operationStack[currentOperationIndex];
//       const previousOperationIndex = currentOperationIndex - 1;
//       const previousOperation = operationStack[previousOperationIndex];

//       if (
//         (["*", "/"].includes(currentOperation) &&
//           ["+", "-"].includes(previousOperation)) ||
//         (["*", "/"].includes(currentOperation) &&
//           ["*", "/"].includes(previousOperation))
//       ) {
//         const a = numberStack.pop();
//         const b = numberStack.pop();
//         const op = operationStack.pop();

//         numberStack.push(calculate(b, a, op));
//       } else if (
//         ["-", "+"].includes(currentOperation) &&
//         ["*", "/"].includes(previousOperation)
//       ) {
//         //excute prev
//         const a = numberStack.pop();
//         const b = numberStack.pop();
//         const c = numberStack.pop();

//         const op1 = operationStack.pop();
//         const op2 = operationStack.pop();

//         numberStack.push(calculate(c, b, op2));
//         numberStack.push(a);
//         operationStack.push(op1);
//       }
//     }
//     iterator++;
//   }

//   // if (numberStack.length < 2) {
//   //   iterator++;
//   //   continue;
//   // }

//   // top most element is high priority
//   // while (operationStack.length > 1 && numberStack.length > 2) {
//   //   const currentOperationIndex = operationStack.length - 1;
//   //   const currentOperation = operationStack[currentOperationIndex];

//   //   if (currentOperation === "/" || currentOperation === "*") {
//   //     const a = numberStack.pop();
//   //     const b = numberStack.pop();

//   //     const opr = operationStack.pop();

//   //     numberStack.push(calculate(a, b, opr));
//   //   } else break;
//   // }

//   // while (operationStack.length > 2 && numberStack.length > 4) {
//   //   const previousOperationIndex = operationTopIndex - 1;
//   //   const previousOperation = operationStack[previousOperationIndex];

//   //   if (previousOperation === "/" || previousOperation === "*") {
//   //     const a = numberStack.pop();
//   //     const b = numberStack.pop();

//   //     const opr = operationStack.pop();

//   //     numberStack.push(calculate(a, b, opr));
//   //   } else break;
//   // }
// }

// while (operationStack.length > 0 && numberStack.length > 0) {
//   const currentOperationIndex = operationStack.length - 1;
//   const currentOperation = operationStack[currentOperationIndex];

//   if (currentOperation === "+" || currentOperation === "-") {
//     const a = numberStack.pop();
//     const b = numberStack.pop();

//     const opr = operationStack.pop();

//     numberStack.push(calculate(a, b, opr));
//   } else break;
// }
