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
    this.listOfTodos = [];
  }
  add(todo) {
    this.listOfTodos.push(todo);
  }

  remove(index) {
    try {
      if (index >= 0 && index < this.listOfTodos.length) {
        this.listOfTodos.splice(index, 1);
      }
    } catch (error) {
      throw error.message("Index out of bound");
    }
  }

  update(index, updatedTodo) {
    try {
      if (index >= 0 && index < this.listOfTodos.length) {
        this.listOfTodos[index] = updatedTodo;
      }
    } catch (error) {
      return error.message("Invalid Task");
    }
  }

  getAll() {
    return this.listOfTodos;
  }

  get(index) {
    if (index >= 0 && index < this.listOfTodos.length) {
      return this.listOfTodos[index];
    } else {
      return null;
    }
  }

  clear() {
    this.listOfTodos = [];
  }
}

module.exports = Todo;
