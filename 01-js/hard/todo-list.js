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
    const existingTodos = [...this.todos];
    existingTodos.push(todo);
    this.todos = [...existingTodos];
  }

  remove(indexOfTodo) {
    const existingTodos = [...this.todos];
    existingTodos.splice(indexOfTodo, 1);
    this.todos = [...existingTodos];
  }

  update(index, updatedTodo) {
    const existingTodos = [...this.todos];

    if (index <= existingTodos.length - 1) {
      existingTodos.splice(index, 1, updatedTodo);
      this.todos = [...existingTodos];
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    const existingTodos = [...this.todos];
    return existingTodos[indexOfTodo] ?? null;
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;