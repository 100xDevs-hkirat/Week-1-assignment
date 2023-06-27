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

class Todo {
  constructor(){
    this.todoList= [];
  }

  addTodo(todo){
    this.todoList.push(todo);
  }

  removeTodo(todoIndex){
    this.todoList.splice(todoIndex,1);
  }

  updateTodo(index, updatedTodo){
    this.todoList[index] = updatedTodo;
  }

  getAllTodo(){
   return this.todoList;
  };

  getIndexOfTodo(todoIndex){
    return this.todoList[todoIndex];
  }

  clearTodos(){
    this.todoList = [];
  }

}

const mynewTodo = new Todo();
mynewTodo.addTodo("hi this is my new todo")
mynewTodo.addTodo("hi this is my new todo 1")
// mynewTodo.clearTodos()
const alltodo = mynewTodo.getAllTodo()
console.log(alltodo)



module.exports = Todo;

module.exports = Calculator;
