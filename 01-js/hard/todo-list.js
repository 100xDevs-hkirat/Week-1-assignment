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
  items = [];
  add(todo) {
    this.items.push(todo);
  }
  remove(indexOfTodo) {
    this.items.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    if (index < this.items.length) this.items[index] = updatedTodo;
  }
  getAll() {
    return this.items;
  }
  get(indexOfTodo) {
    if (indexOfTodo < this.items.length) return this.items[indexOfTodo];
    else return null;
  }
  clear() {
    this.items = [];
  }
}

module.exports = Todo;
