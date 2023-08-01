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
  constructor()
  {
    this.record = [];
  }

  add(todo)
  {
    this.record.push(todo);
  }

  remove(todoIndex)
  {
    this.record.filter(todo => todo != this.record[todoIndex]);
  }

  reomveLast()
  {
    this.record.pop();
  }

  removeFirst()
  {
    this.record.shift();
  }

  update(index, todo)
  {
    this.record[index] = todo;
  }

  get(index)
  {
    console.log(this.record[index]);
  }

  getAll()
  {
    console.log(this.record);
  }

  clear()
  {
    // const ask = window.confirm("Are you sure? ");
    // if(ask)
    // {
      this.record = [];
    // }
  }
}

export default Todo;