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
   todos = [];
    
    index = 0;

    add(todo) {
      this.todos[this.index] = todo;
      this.index++;
    }
    remove(indexOfTodo){
      this.todos.splice(indexOfTodo,1);
    }
    update(ind,updatedTodo){
      if(this.todos[ind] != undefined){
        this.todos[ind] = updatedTodo;
      }
        
    }

    getAll(){
      return this.todos;
    }
    get(g){
      if(this.todos[g] != null )
          return this.todos[g];
      return null;
    }

    clear(){
      this.todos = [];
    }

}

module.exports = Todo;
