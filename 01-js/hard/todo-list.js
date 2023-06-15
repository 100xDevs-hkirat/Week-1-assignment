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

  remove(index) {
    const modifiedTodos = [];
    const len = this.todos.length;

    for (let i = 0; i < len; i++) {
      if (i === index) {
        continue;
      }
      modifiedTodos.push(this.todos[i]);
    }

    this.todos = modifiedTodos;
  }

  update(index, updatedTodo) {
    if (index < 0 || index >= this.todos.length) {
      return;
    }

    this.todos[index] = updatedTodo;
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= this.todos.length) {
      return null;
    }

    return this.todos[indexOfTodo];
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
