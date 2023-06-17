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
  todoList = [];

  add(todo) {
    this.todoList.push(todo);
  }

  remove(indexOfTodo) {
    this.todoList = this.todoList.filter((_, idx) => idx !== indexOfTodo);
  }

  update(indexOfTodo, updatedTodo) {
    this.todoList = this.todoList.map((todo, idx) =>
      idx === indexOfTodo ? updatedTodo : todo
    );
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    return this.todoList[indexOfTodo] ?? null;
  }

  clear() {
    this.todoList = [];
  }
}

module.exports = Todo;
