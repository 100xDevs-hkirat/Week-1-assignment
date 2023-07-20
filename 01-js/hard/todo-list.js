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
    this.list = new Array();
  }

  add(todo) {
    this.list.push(todo);
  }

  remove(index) {
    this.list.splice(index, 1);
  }

  update(todo, index) {
    this.list[index] = todo;
  }

  getAll() {
    return this.list;
  }

  get(index) {
    return this.list[index];
  }

  delete() {
    this.list = new Array();
  }

}

module.exports = Todo;
