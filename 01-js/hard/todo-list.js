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
      this.todo = []
    }
    add(item){
      this.todo.push(item)
    }
    remove(idx){
      if(!this.isValidIndex) return;
      this.todo.splice(idx,1)
    }
    update(index, updatedTodo){
      if(!this.isValidIndex) return;
      this.todo[index]=updatedTodo
    }
    getAll(){
      return this.todo
    }
    get(indexOfTodo){
      if(!this.isValidIndex) return;
      return this.todo[indexOfTodo]
    } 
    clear(){
      this.todo = []
  }
  isValidIndex(idx){
    if(idx<0 || idx >= this.todo.length ){
      return false
    }
    return true
  }

}
module.exports = Todo;
