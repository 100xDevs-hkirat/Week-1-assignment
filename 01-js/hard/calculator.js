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
	result = 0;

	add(inputOne, inputTwo = this.result) {
		this.result = inputOne + inputTwo;
	}

	subtract(inputOne, inputTwo = this.result) {
		this.result = inputTwo - inputOne;
	}

	multiply(inputOne, inputTwo = this.result) {
		this.result = inputTwo * inputOne;
	}

	divide(inputOne, inputTwo = this.result) {
		if (inputOne === 0) throw new Error("Invalid expression");
		this.result = inputTwo / inputOne;
	}
	
	checkSyntax(string) {
		let score = 0;
		for (let i = 0; i < string.length; i++) {
			if (string[i] === "(") {
				score += 1;
			}
			if (string[i] === ")") {
				if (score === 0) return false;
				score -= 1;
			}
		}
		return score === 0;
	}

	calculate(expression) {
		const newExpression = expression.replace(/[ ]/g, "");
		if (
			newExpression.replace(/[0-9+\-*/().]/g, "").length ||
			!this.checkSyntax(newExpression)
		)
			throw new Error("Invalid expression found");

		const answer = eval(newExpression);

		if (answer === Infinity) throw new Error("Infinity");

		this.result = answer;
	}

	clear() {
		this.result = 0;
	}

	getResult() {
		return this.result;
	}
}

module.exports = Calculator;
