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
    todo=[]

        add(task){
          this.todo.push(task);
          return todo;
        }

        update(task,value){
            for(let i=0;i<this.todo.length;i++){
              if(this.todo[i]==task){
                this.todo[i]=value;
              }
            }
            return todo;
        }

        getAll(){
           for(let i=0;i<this.todo.length;i++){
              console.log(this.todo[i]);
            }
            return todo
        }

        get(index){
            return this.todo[index];
        }

        clear(){
          let n = this.todo.length;
          this.todo.splice(0,n);
        }
}

module.exports = Todo;
