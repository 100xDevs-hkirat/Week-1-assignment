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
	toDo = [];

	add(toDo) {
		this.toDo.push(toDo);
	}
	remove(toDoNo) {
		if (this.toDo.length < toDoNo) return;

		this.toDo.splice(toDoNo, 1);
	}
	update(updateTodoNo, updatedTodo) {
		console.log(this.toDo.length, updateTodoNo);
		if (this.toDo.length === 0 || this.toDo.length <= updateTodoNo) return;
		// as I am expecting todo no. instead of index no.
		return this.toDo.splice(updateTodoNo, 1, updatedTodo);
	}
	getAll() {
		if (this.toDo.length === 0) return [];
		return this.toDo;
	}
	get(toDOnumber) {
		if (this.toDo.length <= toDOnumber) {
			return null;
		}
		return this.toDo[toDOnumber];
	}
	clear() {
		this.toDo.length = 0;
	}
}
const myToDo = new Todo();

module.exports = Todo;
