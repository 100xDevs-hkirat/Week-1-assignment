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

class Todo{
  constructor(){
    this.arr = [];
  }

  add (todo){
    this.arr.push(todo);
  }

  remove(indexOfTodo){
    if ( indexOfTodo >= 0 && indexOfTodo < this.arr.length){
      this.arr.splice(indexOfTodo,1);
    }
  }

  update(index, updatedTodo){
    if ( indexOfTodo >= 0 && indexOfTodo < this.arr.length){
      this.arr[index] = updatedTodo;
    }
  }
  
  getAll(){
    return this.arr;
  }

  get(indexOfTodo){
    return this.arr[indexOfTodo];
  }

  clear(){
    this.arr= [];
  }

}



module.exports = Todo;