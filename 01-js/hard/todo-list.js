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

  #length_check(index) {
    if (index > this.todos.length - 1) {
      console.log("Index is Out of Bound");
      return false;
    } else {
      return true;
    }
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (this.#length_check(indexOfTodo)) {
      this.todos.splice(indexOfTodo, 1);
    }
  }

  update(index, updatedTodo) {
    if (this.#length_check(index)) {
      this.todos[index] = updatedTodo;
    } else {
      return;
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (this.#length_check(indexOfTodo)) {
      return this.todos[indexOfTodo];
    } else {
      return null;
    }
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
