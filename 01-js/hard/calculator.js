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
	// we can initialize here also...
	result;
	constructor() {
		this.result = 0;
	}
	add(n) {
		if (typeof +n !== "number") return;

		this.result += n;
	}
	substract(n) {
		if (typeof +n !== "number") return;
		this.result -= n;
	}
	multiply(n) {
		if (typeof +n !== "number") return;
		this.result *= n;
	}
	divide(n) {
		if (typeof +n !== "number" || n === 0) return NaN;
		this.result /= n;
	}
	calculate(expression) {
		try {
			const calculatedValue = eval(expression);
			if (!calculatedValue) return;
			return calculatedValue;
		} catch (err) {
			console.log(err.message);
		}
	}
	getResult() {
		return this.result;
	}
	clear() {
		this.result = 0;
	}
}

const calculator = new Calculator();
// console.log();
// calculator.add(1000);
// calculator.substract(100);
// calculator.divide(0);
// console.log(calculator.getResult());
// const expression = "10 + 2 * (6 - (4 + 1) / 2) + 7";
// const calculatedValue = calculator.calculate(expression);
// console.log(calculatedValue);
// module.exports = Calculator;
