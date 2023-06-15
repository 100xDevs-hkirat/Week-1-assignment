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
  constructor(item) {
    this.item = item;
  }
  todo = [];

  add(tttt) {
    this.todo.push(tttt);
    //console.log(this.todo)
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todo.length)
      this.todo.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todo.length) 
      this.todo[index] = updatedTodo;
  }

  getAll() {
    return this.todo;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todo.length) {
      return this.todo[indexOfTodo];
    }
    return null;
  }

  clear() {
    this.todo = [];

  }
}
/*
const toto = new Todo()
toto.add("String");
toto.add("Strin2");
toto.add("Strin3");
toto.add("Strin4");
toto.add("Strin5");
//toto.remove(3);
toto.update(2,"Rishi")

console.log(toto.get(0))
console.log(toto.getAll())
console.log(toto.clear())
console.log(toto.getAll())

const todoList = new Todo()
todoList.add('Task 1');
todoList.add('Task 2');
todoList.add('Task 3');
console.log(todoList.getAll())
todoList.remove(1);
console.log(todoList.getAll())
todoList.remove(0);
console.log(todoList.getAll())
todoList.remove(2);
console.log(todoList.getAll())
todoList.clear();
console.log(todoList.getAll())
*/

const todoList = new Todo();
todoList.add("Buy groceries");
todoList.add("Do laundry");
console.log(todoList.getAll()); // ['Buy groceries', 'Do laundry']

todoList.update(1, "Clean the house");
console.log(todoList.getAll()); // ['Buy groceries', 'Clean the house']

todoList.remove(0);
console.log(todoList.getAll()); // ['Clean the house']

console.log(todoList.get(1)); // 'Clean the house'

todoList.clear();
console.log(todoList.getAll()); // []

module.exports = Todo;
