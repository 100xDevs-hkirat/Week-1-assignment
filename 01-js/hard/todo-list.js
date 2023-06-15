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
  list = [];

  checkIndex(todoIndex) {
    if(todoIndex >= 0 && todoIndex < this.list.length){
      return true;
    }
    return false;
  }

  add(todo) {
    this.list.push(todo);
  }

  remove(todoIndex) {
    if(this.checkIndex(todoIndex)){
      this.list.splice(todoIndex, 1);
    }
  }

  update(todoIndex, updatedTodo) {
    if(this.checkIndex(todoIndex)){
      this.list[todoIndex] = updatedTodo;
    }
    
  }

  getAll() {
    return this.list;
  }

  get(todoIndex) {
    if(this.checkIndex(todoIndex)){
      return this.list[todoIndex];
    }
    return null;
  }

  clear() {
    this.list = [];
  }
}

module.exports = Todo;
