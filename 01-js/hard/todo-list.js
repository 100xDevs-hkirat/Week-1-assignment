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
  constructor(){
    this.arr = []
  }
  add(todo){
    this.arr.push(todo)
  }
  remove(indexOfTodo){
    if(indexOfTodo>this.arr.length-1) return this.arr
    let res = []
    let j =0
    for (let i = 0; i < this.arr.length-1;i++) {
      if(i === indexOfTodo) j++
      res[i] = this.arr[j]
      j++
    }
    this.arr = res
  }
  update(index, updateToDo){
    if(index>this.arr.length-1) return
    this.arr[index] = updateToDo
  }
  get(indexOfTodo){
    if(indexOfTodo>this.arr.length-1) return null
    return this.arr[indexOfTodo]
  }
  getAll(){
    return this.arr;
  }
  clear(){
    this.arr = []
  }
}
const ans = new Todo()
ans.add('hi')
ans.add('yo')
ans.add('hello')
console.log(ans.getAll())
ans.remove(1)
console.log(ans.getAll())
ans.remove(0)
console.log(ans.getAll())

module.exports = Todo;
