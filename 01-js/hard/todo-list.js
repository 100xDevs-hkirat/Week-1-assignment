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
    this.items = [];
  }
  add(text) {
    this.items.push(text);
  }
  remove(index) {
    this.items.splice(index, 1);
  }
  update(index, text) {
    this.items[index] = text;
  }
  getAll() {
    return this.items;
  }
  get(index) {
    return this.items[index];
  }
  clear() {
    this.items = [];
  }
}

const myTodo = new Todo();
console.log(myTodo.getAll());
myTodo.add('first task');
myTodo.clear();
myTodo.add('second task');
myTodo.add('third task');
myTodo.update(1, 'updated third');
console.log(myTodo.getAll());
myTodo.add('forth');
myTodo.remove(1);
console.log(myTodo.getAll());
console.log(myTodo.get(0));
