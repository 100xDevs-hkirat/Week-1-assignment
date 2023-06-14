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

  todolist = [];

  add(todo) {
    this.todolist.push(todo);
  }

  remove(indexOfTodo) {
    this.todolist.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    this.todolist[index] = updatedTodo;
  }

  getAll() {
    return this.todolist;
  }

  get(indexOfTodo) {
    return this.todolist[indexOfTodo];
  }

  clear() {
    this.todolist = [];
  }

}

const todo = new Todo();

todo.add('Practice yoga');
todo.add('Play guitar');
todo.add('Chew some glass');
todo.add('Be consistent');

todo.remove(2);

todo.update(1, 'Regular practice');

console.log(todo.todolist);

module.exports = Todo;
