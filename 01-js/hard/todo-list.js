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

  add(todo){
   this.list.push(todo)
  }

  remove(indexOfTodo){
    if(this.list.length <=  indexOfTodo) return;
   this.list.splice(indexOfTodo, 1)
  }
  update(index,updatedTodo){
    if(this.list.length <=  index) return;
    this.list[index] = updatedTodo;
  }
  getAll(){
   return this.list
  }
  get(indexOfTodo){
    if(this.list.length <= indexOfTodo) return null;
    return this.list[indexOfTodo]
  }
  clear(){
   this.list.splice(0, this.list.length)
  }
}

const todo = new Todo();

todo.add("hwllo")
todo.add("hwllo1")
todo.add("hwllo2")

console.log(todo.get(3))


module.exports = Todo;
