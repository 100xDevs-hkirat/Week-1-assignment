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
    this.todos = [];
  }

  add(todo){
    this.todos.push(todo);
  }

  remove(indexofTodo){
    if(indexofTodo >-1 && indexofTodo< this.todos.length){
      this.todos.splice(indexofTodo,1)
    }
  }

  update(index, updatedTodo){
    if(index>-1 && index<this.todos.length){
    this.todos[index] = updatedTodo;
    }
  }
  getAll(){
    return this.todos;
  }

  get(indexOfTodo){
    if(indexOfTodo>-1 && indexOfTodo<this.todos.length){
    return this.todos[indexOfTodo];
    }else{
      return null;
    }
  }

  clear(){
    this.todos = [];
  }


}

module.exports = Todo;
