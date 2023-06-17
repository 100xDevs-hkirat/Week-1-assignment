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

  todo = []

  add(task){
    this.todo = [...this.todo, task]
  }

  remove(index){
    this.todo = this.todo.filter((item, idx) => index !== idx)
  }

  update(index, task){
    this.todo = this.todo.map((item, idx) => index === idx ? task : item)
  }

  getAll(){
    return this.todo
  }

  get(index){
    return this.todo[index] ?? null
  }

  clear(){
    this.todo = []
  }

}

module.exports = Todo;
