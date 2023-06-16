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
    this.listOfTodos = [];
  }
  add(todo){
    if(todo !=='undefined' && todo !== '' && todo !== 'Invalid Task'){
        this.listOfTodos.push(todo);
    }
    
  }
  remove(i){

    if( this.listOfTodos.length > i){
    this.listOfTodos = this.listOfTodos.filter(x => x!== this.listOfTodos[i]);
    }
  }
  update(i, updatedTodo){
    if(updatedTodo !== 'Invalid Task' && this.listOfTodos.length > i){
      this.listOfTodos[i] = updatedTodo;
    }
  }
  get(i){
    
    if(i >= this.listOfTodos.length ){
     return null;
    }
    return this.listOfTodos[i];

  }
  clear(){
    this.listOfTodos = [];
  }

  getAll(){
      return this.listOfTodos;
  }
}

module.exports = Todo;
