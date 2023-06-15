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

  constructor(){
    this.TodoList = [];
  }

  add(todo){
    this.TodoList.push(todo);
  }

  remove(indexOfTodo){
    this.TodoList.splice(indexOfTodo,1);
  }

  update(index, updatedTodo){
    var listSize = this.TodoList.length;
    if (index >= listSize){
      return;
    }

    this.TodoList[index] = updatedTodo;
  } 

  getAll(){
    return this.TodoList;
  }

  get(indexOfTodo){
    var listSize = this.TodoList.length;
    if (indexOfTodo >= listSize){
      return null;
    }
    return this.TodoList[indexOfTodo];
  }

  clear(){
    this.TodoList = [];
  }

}

module.exports = Todo;
