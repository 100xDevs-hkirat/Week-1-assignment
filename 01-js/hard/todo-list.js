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
    this.todos = []
  }

  add(todo) {
    this.todos.push(todo)
  }

  remove(i) {
    this.todos.splice(i, 1);
  }

  update(i, todo) {
    if(i < this.todos.length) {
      this.todos[i] = todo
    }
  }

  getAll() {
    return this.todos
  }

  get(i) {
    if(i >= this.todos.length) {
      return null
    }
    return this.todos[i]
  }

  clear() {
    this.todos = []
  }
}

module.exports = Todo;
