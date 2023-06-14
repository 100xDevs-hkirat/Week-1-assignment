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
    this.data = new Array();
    this.size = 0;
  }

  add(todo){
    this.data.push(todo);
  }
  remove(indexOfTodo){
    this.data.splice(indexOfTodo,1);
  }
  update(index, updatedTodo){
    if(index < this.data.length) this.data[index] = updatedTodo;
  }
  getAll(){
    return this.data;
  }
  get(index){
    let res = this.data[index];
    if (res !== undefined) return res;
    else return null;
  }
  clear(){
    this.data.length = 0; // an effective way to remove all the elements of array in JS
  }
}

module.exports = Todo;
