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
        this.tasks = [];
    }

    remove(indexOfTodo) {
        if(indexOfTodo !== -1) {
            this.tasks.splice(indexOfTodo, 1);
        }
    }

    add(task) {
        this.tasks.push(task);
    }

    getAll() {
        return this.tasks;
    }

    get(indexOfTodo) {
        if(indexOfTodo <= this.tasks.length-1) {
            return this.tasks[indexOfTodo];
        }
        return null;
    }

    clear() {
        this.tasks = [];
    }

    update(index, updatedTodo) {
        if(index <= this.tasks.length-1) {
            this.tasks[index] = updatedTodo;
        }
    }
}

module.exports = Todo;
