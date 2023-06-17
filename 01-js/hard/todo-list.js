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
    this.todoList = [];
  }

  add(todo) {
    this.todoList.push(todo);
  }

  remove(indexofTodo) {
    this.todoList.splice(indexofTodo, 1);
  }
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todoList.length)
      this.todoList[index] = updatedTodo;
    // return null;
  }
  getAll() {
    return this.todoList;
  }
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todoList.length)
      return this.todoList[indexOfTodo];
    return null;
  }
  clear() {
    this.todoList = [];
  }
}

module.exports = Todo;
