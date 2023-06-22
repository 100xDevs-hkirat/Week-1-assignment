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

const { ThemeProvider } = require("react-bootstrap")

class Todo {
    constructor() {
        this.todos = []
    }
    add(todo) {
        this.todos.push(todo)
        return this
    }
    remove(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            this.todos.splice(indexOfTodo, 1)
            return this
        }
    }
    update(index, updatedTodo) {
        if (index >= 0 && index < this.todos.length) {
            this.todos[index] = updatedTodo
            return this
        }
    }
    getAll() {
        return this.todos
    }
    get(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            return this.todos[indexOfTodo]
        }
    }
    clear() {
        return this.todos = []
    }
}

const todd = new Todo()

console.log(todd.add("krishnas"))
console.log(todd.add("Naveen"))
console.log(todd.add("Ajay"))
console.log(todd.add("Nagesh"))
// console.log(todd.remove(0))
// console.log(todd.update(0, 'naveen'))
console.log(todd.getAll())
console.log(todd.get(0))
console.log(todd.clear())



module.exports = Todo;