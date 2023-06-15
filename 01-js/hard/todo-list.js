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

  //function to add Todo in todos list
  add = (toDo) => {
    this.tasks.push(toDo);
    console.log(JSON.stringify(this.tasks));
  };
  //function to remove the toDo via index value
  remove = (index) => {
    this.tasks.splice(index, 1);
    console.log(JSON.stringify(this.tasks));
  };
  //function to update particular todo via index value
  updateToDo = (index, toDo) => {
    this.tasks[index] = toDo;
    console.log(JSON.stringify(this.tasks));
  };
  //function to get all toDo from the list
  getAll = () => {
    return JSON.stringify(this.tasks);
  };
  //function to get all toDo from the list via index value of toDo.
  gettoDo = (indexOfTodo) => {
    return this.tasks[indexOfTodo];
  };
  ///function to empty the to do List.
  clear = () => {
    this.tasks = [];
    console.log(JSON.stringify(this.tasks));
  };
}

const obj = new Todo();

//function to add Todo in todos list
obj.add("to do programming");
//function to add Todo in todos list
obj.add("to watch movie");
//function to add Todo in todos list
obj.add("to learn DSA");
//function to add Todo in todos list
obj.add("to play footbal");

//function to remove the toDo via index value
obj.remove(1);

//function to update particular todo via index value
obj.updateToDo(3, "to play chess");

//function to get all toDo from the list
obj.getAll();

//function to get  toDo from the list via index value of toDo
obj.gettoDo(2);

//function to empty the to do List
obj.clear();

// module.exports = Todo;
