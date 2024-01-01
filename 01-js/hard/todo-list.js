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
    this.list = [];
  }
  getAll(){
    return this.list;
  }
  get(i){
    if(i>=this.list.length){
      return null;
    }
    return this.list[i];
  }
  clear(){
    this.list = [];
  }
  add(str){
    this.list.push(str);
  }
  remove(i){
    this.list.splice(i, 1);
  }
  update(i, str){
    if(i>=this.list.length){
      
    }else{this.list[i] = str;}
    
  }
}
// let doIt = new Todo();
// doIt.add('Task 1');
// doIt.add('Task 2');
// doIt.add('Task 3');
// doIt.update(1, 'Updated Task 2')
// console.log(doIt.get(3));
module.exports = Todo;

