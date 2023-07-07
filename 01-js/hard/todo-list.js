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

const ops = {
  ADD: 1,
  REMOVE: 2,
  UPDATE: 3,
  GET_ALL: 4,
  GET: 5,
  CLEAR: 6,
};
const exe = {
  [ops.ADD]: (todoArr, { todo }) => [...todoArr, todo],
  [ops.GET]: (todoArr, { index }) => todoArr[index],
  [ops.GET_ALL]: (todoArr) => [...todoArr],
  [ops.UPDATE]: (todoArr, { index, todo }) => (
    (todoArr[index] = todo), [...todoArr]
  ),
  [ops.REMOVE]: (todoArr, { index }) => (
    (todoArr[index] = null), todoArr.filter((item) => !!item)
  ),
  [ops.CLEAR]: () => [],
};

class Todo {
  #todos = [];
  #operation(operatioon, arg) {
    if (operation !== ops.GET && operation !== ops.GET_ALL) {
      this.#todos = exe[operation](this.#todos, arg);
    } else {
      return exe[operation](this.#todos, arg);
    }
  }
  add(todo) {
    this.#operation(ops.ADD, { todo });
  }
  remove(index) {
    this.#operation(ops.REMOVE, { index });
  }
  update(index, todo) {
    this.#operation(ops.UPDATE, { index, todo });
  }
  getAll() {
    return this.#operation(ops.GET_ALL, {});
  }
  get(index) {
    return this.#operation(ops.GET, { index });
  }
  clear() {
    this.#operation(ops.CLEAR, {});
  }
}

module.exports = Todo;
