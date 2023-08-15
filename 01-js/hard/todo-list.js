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
   constructor() {
      this.todos = [];
   }
   add(todo){
       this.todos.push(todo);
   }
   remove(indexOfTodo){
     if(indexOfTodo >=0 && indexOfTodo <this.todos.length){
         this.todos.splice(indexOfTodo,1);
     }
     else{
         console.log("Indexing error");
     }
   }

    update(index, updatedTodo) {
        if (index >= 0 && index < this.todos.length) {
            this.todos[index] = updatedTodo;
        } else {
            console.error("Invalid index.");
        }
    }

    getAll() {
        return this.todos;
    }

    get(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            return this.todos[indexOfTodo];
        } else {
            console.error("Invalid index.");
            return null;
        }
    }

    clear() {
        this.todos = [];
    }
}

const myTodoList = new Todo();
myTodoList.add("Buy groceries");
myTodoList.add("Do Kirath assignment😁");
myTodoList.add("Call friend");

console.log("All Todos:", myTodoList.getAll());

myTodoList.remove(1);
console.log("Updated Todos:", myTodoList.getAll());

myTodoList.update(0, "Go to the gym");
console.log("Updated Todos:", myTodoList.getAll());

console.log("Todo at index 1:", myTodoList.get(1));

myTodoList.clear();
console.log("All Todos after clearing:", myTodoList.getAll());
module.exports = Todo;
