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
    const idx = this.todos.indexOf(indexOfTodo);
    if (idx > -1) {
      this.todos.splice(idx, 1);
    }
  }
  update(index, updatedTodo) {
    this.todos[index] = updatedTodo;
  }
  getAll() {
    return this.todos.map((todo) => todo);
  }
  get(indexOfTodo) {
    const idx = this.todos.indexOf(indexOfTodo);
    if (idx > -1) {
      return null;
    }
    return this.todos[indexOfTodo];
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
