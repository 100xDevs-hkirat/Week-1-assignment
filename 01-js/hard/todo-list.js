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
    this.list = [];
  }
  
  add(todo){
    this.list.push(todo);
  }

  remove(indexOfTodo){
    if ( indexOfTodo < this.list.length)
      this.list.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo){
    if (index < this.list.length){
      this.list[index] = updatedTodo;
    }
  }

  getAll(){
    return this.list;
  }

  get(indexOfTodo){
    if (indexOfTodo < this.list.length)
    return this.list[indexOfTodo];
  }

  clear(){
    this.list.splice(0,this.list.length);
  }
}
/*
var obj = new Todo();
obj.add("Get Up");
obj.add("Fresh up");
obj.add("Breakfast");
obj.add("Go to school");
obj.add("Back home");
obj.add("Do homework");
obj.add("Play only 5 minutes");
obj.add("Dinner");
obj.add("Sleep");
obj.add("Reppeeet");

console.log(obj.getAll());

obj.update(9, "Repeat");

console.log("After correction " , obj.getAll());

console.log(obj.get(6));

obj.remove(6);

console.log("After remove " , obj.getAll());

obj.clear();

console.log("After clear " , obj.getAll());

*/
module.exports = Todo;
