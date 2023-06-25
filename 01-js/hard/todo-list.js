/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todoList
    - remove(indexOfTodo): remove todo from list of todoList
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todoList
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todoList

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

  remove(indexOfTodo) {
    // if (indexOfTodo > this.todoList.length - 1) {
    //   throw new Error("index unavailable 10");
    // }
    this.todoList.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (index > this.todoList.length - 1) {
      return;
    }

    this.todoList[index] = updatedTodo;
  }

  getAll() {
    return this.todoList;
  }

  get(index) {
    if (index > this.todoList.length - 1) {
      return null;
    }
    return this.todoList[index];
  }

  clear() {
    this.todoList = [];
  }
}

// const tommorow = new Todo();
// tommorow.add("running");
// tommorow.add("doctor");
// tommorow.add("lectures");
// tommorow.add("date");
// console.log(tommorow.getAll());
// tommorow.remove(10);
// console.log(tommorow.getAll());
// // tommorow.update(10, "eating");
// console.log(tommorow.getAll());
// console.log(tommorow.get(1));

try {
  const tommorow = new Todo();
  tommorow.add("task 01");
  tommorow.add("task 02");
  tommorow.add("task 03");

  console.log(tommorow.get(0));
  console.log(tommorow.get(2));
  console.log(tommorow.get(3));
  // console.log(tommorow.getAll());
  // tommorow.get(2);
  // console.log(tommorow.getAll());
  // tommorow.get(3);
  // console.log(tommorow.getAll());
} catch (error) {
  console.error(error.message);
}
module.exports = Todo;
