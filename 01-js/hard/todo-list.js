/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  todos;
  constructor(){
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo){
    if(this.isValidIndex(indexOfTodo) === true) {
      this.todos.splice(indexOfTodo, 1);
    }
  }

  update(index, updatedTodo) {
    if(this.isValidIndex(index) === true) {
      this.todos[index] = updatedTodo;
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if(this.isValidIndex(indexOfTodo) === true) {
      return this.todos[indexOfTodo];
    }

    return null;
  }

  clear() {
    this.todos = []
  }

  isValidIndex(index) {
    if(index >= 0 && index < this.todos.length) {
      return true;
    }

    return false;
  }
}

module.exports = Todo;
