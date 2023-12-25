
class Todo{
  constructor(result){
   this.todos= [];
  }

 add(todo)
 {
   this.todos.push(todo);
 }
 remove(indexOfTodo) {
   if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
     this.todos.splice(indexOfTodo, 1);
   }
 }
 update(index, updatedTodo){
   if (indexOfTodo >= 0 && indexOfTodo < this.todos.length){
     this.todos[index] = updatedTodo;
   }
 }
 getAll() {
     console.log(this.todos);
   }
 get(indexOfTodo) {
   if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      console.log(this.todos[indexOfTodo]);
   }
   return null; // Return null if index is out of bounds
 }
    clear(){
      this.todos = [];
    }
 }
 
module.exports = Todo;
