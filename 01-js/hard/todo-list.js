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

    this.todos=[]
  }
  add(task){
    this.todos.push(task)
  }
  remove(index){
    this.todos.splice(index,1)
  }
  update(index, updatedTodo){
    this.todos=this.todos.map((task,taskindex)=>{
      if(taskindex===index){
        return updatedTodo
      }else{
        return task
      }
    })
  }
  getAll(){
    return this.todos
  }
  get(indexOfTodo){
    return this.todos[indexOfTodo] || null
  }
  clear(){
    this.todos=[]
  }
}

module.exports = Todo;
