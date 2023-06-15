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


let result;

class Calculator {
    constructor() {
        result = 0;
    }

    add(n) {
        result += n;
        // return result;
    }

    subtract(n) {
        result -= n;
        // return result;
    }

    multiply(n) {
        result *= n;
        // return result;
    }

    divide(n) {
        result /= n;
        // return result;
    }

    clear() {
        result = 0;
    }

    getResult() {
        return result;
    }



    checkString(str){
        for(let i=0; i<str.length; i++){
            if( str.charCodeAt(i) - "0".charCodeAt(0) >9 && str.charCodeAt(i) !=="/"
                && str.charCodeAt(i) !=="*" && str.charCodeAt(i) !=="-" && str.charCodeAt(i) !=="+"
                && str.charCodeAt(i) !=="(" && str.charCodeAt(i) !==")" && str.charCodeAt(i) !==" "){
                return false;
            }
        }
        return true;
    }

    cleanString(str) {
        if(this.checkString(str)===false){
            console.error("Invalid string: " + str);
            return;
        }
        let ans="";
        for (let i=0; i<str.length; i++) {
            if(str.charAt(i)!==" ")ans+=str.charAt(i);
        }
        return ans;
    }

    calculate(str) {
        str = this.cleanString(str);
        if(!str){
            console.log("So we can't calculate this string");
            this.clear();
            return;
        }
        result = eval(str);
    }

}

const calculator = new Calculator();
calculator.calculate(`10 +   2 *    (   6 - (4 + 1) / 2) + 7`);
console.log(calculator.getResult());
calculator.calculate(`10 +   abc`);
console.log(calculator.getResult());

module.exports = Calculator;
