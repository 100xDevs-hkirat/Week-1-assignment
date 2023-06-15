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
    this.todo=[]
  }
  addItem(item){
    this.todo.push(item)
  }
  removeItem(item){
    this.todo = this.todo.filter((it)=>it!=item)
  }
  updateItem(item, updated){
    this.todo = this.todo.map((it)=>it==item?updated:item)
  }
  getAll(){
    return this.todo
  }
  getIndexofTodo(index){
    return this.todo[index]
  }

  clear(){
    this.todo=[]
  }
}

module.exports = Todo;
