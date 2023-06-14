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
var todolist = [];
class Todo {
    
    constructor(){
      todolist = [];
    }
    add(todo){
      todolist.push(todo);
    }
    remove(index){
      if(index<todolist.length)
      todolist.splice(index,1);
    }
    update(index,updatedtodo){
      if(index<todolist.length)
      todolist[index]=updatedtodo;
    }
    getAll(){
      return todolist;
    }
    get(index){
      if(index<todolist.length)
      return todolist[index];
      else return null;
    }
    clear(){
      todolist.length = 0;
    }
}

module.exports = Todo;
