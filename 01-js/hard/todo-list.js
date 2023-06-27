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
    this.todoList= [];
  }

  addTodo(todo){
    this.todoList.push(todo);
  }

  removeTodo(todoIndex){
    this.todoList.splice(todoIndex,1);
  }

  updateTodo(index, updatedTodo){
    this.todoList[index] = updatedTodo;
  }

  getAllTodo(){
   return this.todoList;
  };

  getIndexOfTodo(todoIndex){
    return this.todoList[todoIndex];
  }

  clearTodos(){
    this.todoList = [];
  }

}

module.exports = Todo;
