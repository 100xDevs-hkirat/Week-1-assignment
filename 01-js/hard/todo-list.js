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
    this.listOfTodos =[]
  }

  add(todo){
    this.listOfTodos.push(todo)
  }

  remove(indexOfTodo){
    if(isNaN(indexOfTodo))
    throw new Error()
    this.listOfTodos.splice(indexOfTodo,1)
  }

  update(index, updatedTodo){
    if(isNaN(index))
    throw new Error()
    if(index<this.listOfTodos.length)
    this.listOfTodos[index] = updatedTodo
  }

  getAll(){
    return this.listOfTodos;
  }

  get(indexOfTodo){
    if(isNaN(indexOfTodo))
    throw new Error()
    if(indexOfTodo<this.listOfTodos.length)
    return this.listOfTodos[indexOfTodo]
    else return null
  }

  clear(){
    this.listOfTodos.splice(0,this.listOfTodos.length)
  }


}

module.exports = Todo;
