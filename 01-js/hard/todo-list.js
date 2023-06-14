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
    console.log("added")
  }
  remove(index) {
    if (!(index >= this.todos.length || index < 0)) {
      console.log("yes remove")
      this.todos.splice(index, 1)
    }

  }
  update(index, updateTodo) {
    if (!(index >= this.todos.length || index < 0)) {
      console.log("yes update")
      this.todos[index] = updateTodo;

    }
  }
  getAll() {
    return this.todos
  }
  get(index) {
    if (!(index >= this.todos.length || index < 0)) {
      console.log("yes get")
      return this.todos[index]
    } else return null;
  }
  clear() {
    this.todos = []
  }
}

module.exports = Todo;
