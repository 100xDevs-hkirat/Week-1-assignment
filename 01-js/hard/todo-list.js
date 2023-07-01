/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todoList
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  todoList;

  constructor() {
    this.todoList = [];
  }

  add(todo) {
    this.todoList.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo < this.todoList.length)
      this.todoList.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (index < this.todoList.length) this.todoList[index] = updatedTodo;
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    if (this.todoList.length > 0 && indexOfTodo < this.todoList.length)
      return this.todoList[indexOfTodo];
    return null;
  }

  clear() {
    this.todoList = [];
  }
}

// const todo1 = new Todo();
// todo1.add('Task 1');
// todo1.add('Task 2');
// todo1.add('Task 3');
// todo1.update(1,'Task N');
//
// console.log(todo1.getAll());

module.exports = Todo;
