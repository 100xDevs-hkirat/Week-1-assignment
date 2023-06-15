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
    constructor(todoList){
        this.todoList = [];
    }
    add(todo){
        this.todoList.push(todo);
    }
    remove(indexOfTodo){
        if(indexOfTodo<this.todoList.length){
            this.todoList.splice(indexOfTodo, 1);
        }
        else{
            console.error("please enter a valid index");
        }

    }
    update(index,updatedTodo){
        if(index<this.todoList.length){
            this.todoList[index] = updatedTodo;
        }
        else{
            console.error("please enter a valid index");
        }

    }
    getAll(){
        return this.todoList;
    }
    get(indexOfTodo){
        if(indexOfTodo< this.todoList.length){
            return this.todoList[indexOfTodo];
        }
        else{
            console.error("please enter a valid length");
        }

    }
    clear(){
        this.todoList = [];
    }
}

module.exports = Todo;

const todo = new Todo();
todo.add("This is a test msg");
todo.add("This is another test msg");
console.log(todo.getAll());
todo.remove(1);
console.log(todo.getAll());
todo.update(0,"this is updated msg");
console.log(todo.getAll());
console.log(todo.get(0));
todo.clear();
console.log(todo.getAll());