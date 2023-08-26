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
    this.toDoList = [];
  }
  add(todo) {
    this.toDoList.push(todo);
  }
  remove(index) {
    this.toDoList.splice(index, 1);
  }
  update(index, todo) {
    this.toDoList[index] = todo;
  }
  getAll() {
    return this.toDoList;
  }
  get(index) {
    return this.toDoList[index];
  }
  clear() {
    this.toDoList = [];
  }
}

const todoObj = new Todo();
todoObj.add("List1");
todoObj.add("List2");
todoObj.add("List3");

todoObj.update(0, "Updated");
todoObj.remove(0);

let list = todoObj.getAll();
console.log(list);

let item = todoObj.get(1);
console.log(item);

todoObj.clear();
module.exports = Todo;
