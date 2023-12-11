class Todo {
  constructor(){
    this.todos =[];
  }
  
  add(todo){
    this.todos.push(todo);
  }

  remove(indexOfTodo){
    if(indexOfTodo >= 0 && indexOfTodo < this.todos.length){
      this.todos.splice(indexOfTodo, 1);
    }
    else{
      throw new Error("Invalid Index");
    }
  }

  update(index,updatedTodo){
    if(index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
    else{
      throw new Error("Invalid Index");
    }
  }

  getAll(){
    return this.todos;
  }


  get(indexOfTodo){
    if(indexOfTodo >= 0 && indexOfTodo < this.todos.length){
      return this.todos[indexOfTodo];
    }
    else{
      throw new Error("Invalid index");
    }
  }

  clear(){
    this.todos =[];
  }

}


// Example usage
const todoList = new Todo();

todoList.add("Buy groceries");
todoList.add("Read a book");
todoList.add("Exercise");

console.log("All todos:", todoList.getAll());

console.log("Todo at index 1:", todoList.get(1));

todoList.update(0, "Buy fresh vegetables");
console.log("Updated todos:", todoList.getAll());

todoList.remove(2);
console.log("Todos after removal:", todoList.getAll());

todoList.clear();
console.log("Todos after clearing:", todoList.getAll());

// Export the Todo class
module.exports = Todo;
