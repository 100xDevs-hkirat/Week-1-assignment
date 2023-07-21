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

  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    }
    else {
      throw new Error("Invalid index")
    }
  }

  update(indexOfTodo, updatedTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos[indexOfTodo] = updatedTodo;
    }
    else {
      throw new Error("Invalid index")
    }
  }

  getAll() {
    return this.todos;
  }

  get(index) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[index];
    }
    else {
      throw new Error("Invalid index")
    }
  }

  clear() {
    this.todos = [];
  }

}

module.exports = Todo;
