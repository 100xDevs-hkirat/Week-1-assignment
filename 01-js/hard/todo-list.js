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
	removeToDO(toDoNo) {
		const indexOfTODo = toDoNo - 1;
		this.toDo.splice(indexOfTODo, 1);
	}
	update(updateTodoNo, updatedTodo) {
		if (this.toDo.length === 0 || updateTOd>this.toDO.length ) return;
		// as I am expecting todo no. instead of index no.
		const index = updateTodoNo - 1;
		return this.toDo.splice(index, 1, updatedTodo);
	}
	getAllTODos() {
		this.toDo.forEach((toDO) => console.log(toDO));
	}
	getToDoList(toDOnumber) {
		if (toDOnumber > this.toDo.length) {
			console.log(`You have ${this.toDo.length} toDos in the list `);
		} else {
			const index = toDOnumber - 1;
			return this.toDo[index];
		}
	}
	clear() {
		this.toDo.length = 0;
		console.log(this.toDo);
	}
}
const myToDo = new Todo();
// myToDo.add("complete the file");
// myToDo.add("solve all assingments");
// myToDo.add("learn basic of react");
// myToDo.clear();
// myToDo.update(2, "already solved the assingment");
// myToDo.getAllTODos();
// myToDo.removeToDO(2);
// myToDo.getToDoList(3);

// // module.exports = Todo;
