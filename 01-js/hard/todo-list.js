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
    if (this.todos.length <= indexOfTodo) {
      console.error("Index out of bounds");
      return;
    }
    this.todos = this.todos.filter((todo, i) => i !== indexOfTodo);
  }

  update(index, updatedTodo) {
    if (this.todos.length <= index) {
      console.error("Index out of bounds");
      return;
    }
    this.todos[index] = updatedTodo;
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (this.todos.length <= indexOfTodo) {
      console.error("Index out of bounds");
      return;
    }
    return this.todos[indexOfTodo];
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
