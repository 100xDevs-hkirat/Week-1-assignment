const Todo = require('./todo-list');

const todoList = new Todo();

todoList.add("Buy groceries");
todoList.add("Finish homework");

console.log(todoList.getAll());

todoList.update(0, "Buy fresh vegetables");

console.log(todoList.get(0));

todoList.remove(1);

console.log(todoList.getAll());

todoList.clear();

console.log(todoList.getAll());