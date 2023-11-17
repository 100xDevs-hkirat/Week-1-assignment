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
    this.todos = [];

  }

  add(todo)
  {
    this.todos.push(todo);
  }
  remove(index)
  {
    if(!this.checkIndexBoundary(index))
    {
      // throw new Error('Index out of bound')
      return
    }
this.todos.splice(index,1)
  }
  checkIndexBoundary(index)
  {
    return index< this.todos.length && index >=0
  }
  update(index,todo)
  {
    if(!this.checkIndexBoundary(index)){ return}
    this.todos.splice(index,1,todo)
  }

  getAll()
  {
    for( let i =0;i< this.todos.length;i++ )
    {
      console.log(this.todos[i]+ ' ')
    }
  }
  clear()
  {
     this.todos.splice(0, this.todos.length)
  }

}

const myTodo = new Todo()
myTodo.add('get laundery')
myTodo.add('Cook breakfast')
myTodo.getAll()
myTodo.remove(3)

module.exports = Todo;
