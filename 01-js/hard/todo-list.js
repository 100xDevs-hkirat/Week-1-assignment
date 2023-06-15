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

  remove(id) {
    if(id < this.todos.length) {
      this.todos.splice(id, 1);
    }
  }

  update(id, todo) {
    if(id < this.todos.length) {
      this.todos[id] = todo;
    }
  }

  getAll() {
    return this.todos;
  }

  get(id) {
    return this.todos[id] ? this.todos[id] : null;
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
