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
  this.todos=[]; // array that stores our data in memory
}
add(newTodo) {
  this.todos.push(newTodo);
}
remove(indexOfTodo){
  if (indexOfTodo>=0 && this.todos.length>indexOfTodo && this.todos[indexOfTodo]){
    this.todos.splice(indexOfTodo,1);
}
}
update(indexOfTodo,updatedTodo){
  if(indexOfTodo >= 0 && indexOfTodo < this.todos.length){
    this.todos[indexOfTodo]=updatedTodo;
  }
}
getAll(){
  return this.todos;
}
clear(){
 this.todos=[];
} 
}
let todo=new Todo();
todo.add("TSOC plugin research");
todo.add("End term Exam");
todo.add("Cohort Assignment");
todo.add("DSA");
// todo.remove(2);
// todo.clear();
console.log(todo.getAll());


// module.exports = Todo;
