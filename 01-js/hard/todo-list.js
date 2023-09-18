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
  #todos;

  constructor() {
    this.#todos = [];
  }

  add(todo) {
    this.#todos.push(todo);
  }

  remove(indexOfTodo) {
    if (!this.#isWithingBounds(indexOfTodo)) return;
    this.#todos.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (!this.#isWithingBounds(index)) return;
    this.#todos.splice(index, 1, updatedTodo);
  }

  getAll() {
    return this.#todos;
  }

  get(indexOfTodo) {
    if (!this.#isWithingBounds(indexOfTodo)) return null;
    return this.#todos[indexOfTodo];
  }

  clear() {
    this.#todos.length = 0;
  }

  #isWithingBounds(index) {
    return index > -1 && index < this.#todos.length;
  }
}

module.exports = Todo;
