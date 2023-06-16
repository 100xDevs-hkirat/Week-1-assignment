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
  todos = []

  add(todo) {
    this.todos.push(todo)
  }
  remove(indexOfTodo) {
    this.todos.splice(indexOfTodo, 1)
  }
  update(index, updatedTodo) {
    if (index < this.todos.length - 1) {
      this.todos.splice(index, 1, updatedTodo)
    }
  }
  getAll() {
    return this.todos
  }
  get(indexOfTodo) {
    if (indexOfTodo > this.todos.length - 1) {
      return null
    }
    return this.todos[indexOfTodo]
  }
  clear() {
    this.todos = []
  }
}

let t = new Todo()
t.update(2, "Hello")
console.log(t.getAll())

module.exports = Todo;
