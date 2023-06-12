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
  remove(indexOfTodo) {
    this.todos.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    this.todos[index] = updatedTodo;
  }
  getAll() {
    return this.todos;
  }
  get(indexOfTodo) {
    return this.todos[indexOfTodo];
  }
  clear() {
    this.todos = [];
  }
}

let todo = new Todo();
todo.add('Buy milk');
todo.add('Buy eggs');
todo.add('Buy bread');
console.log(todo.getAll());
todo.remove(1);
console.log(todo.getAll());
todo.update(1, 'Buy cheese');
console.log(todo.getAll());
console.log(todo.get(1));

module.exports = Todo;
