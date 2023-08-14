// todolist.js
export default class ToDoList {
  constructor() {
    this.tasks = []
  }

  addTask(task) {
    this.tasks.push(task)
  }

  completeTask(index) {
    this.tasks[index].completed = true
  }

  deleteTask(index) {
    this.tasks.splice(index, 1)
  }

  getTasks() {
    return this.tasks
  }
}
