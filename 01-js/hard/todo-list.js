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
   todoList = [];
   
   add(todo) {
    this.todoList.push(todo);
   }
   
   remove(indexOfTodo) {
    this.todoList.splice(indexOfTodo, 1);
   }

   update(index, updatedTodo) {
    this.todoList[index] = updatedTodo
   }

   getAll() {
    return  this.todoList;
   }

   get(indexOfTodo) {
    return this.todoList[indexOfTodo];
   }

   clear() {
    this.todoList.length = 0;
   }
}

const myTodo = new Todo();

myTodo.add('read');
myTodo.add('wworkout');
myTodo.add('sleep');
myTodo.add('eat');

console.log(myTodo);

myTodo.remove(0);

console.log(myTodo);

myTodo.update(0,'workout');

console.log(myTodo);

console.log(myTodo.getAll());

console.log(myTodo.get(2));

myTodo.clear()

console.log(myTodo);

module.exports = Todo;
