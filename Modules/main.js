// main.js
import ToDoList from './modules/todolist.js'
import renderTasks from './modules/dom.js'

const toDoList = new ToDoList()

const addButton = document.getElementById('addButton')
const taskInput = document.getElementById('taskInput')

// Function to add a new task to the to-do list
const addNewTask = () => {
  const newTaskTitle = taskInput.value.trim()
  if (newTaskTitle !== '') {
    toDoList.addTask({ title: newTaskTitle, completed: false })
    renderTasks(toDoList.getTasks())
    taskInput.value = ''
  }
}

// Function to handle the click event on the task list
const handleTaskListClick = event => {
  if (event.target.tagName === 'LI') {
    const index = Array.from(event.target.parentNode.children).indexOf(
      event.target
    )
    toDoList.completeTask(index)
    renderTasks(toDoList.getTasks())
  }

  if (event.target.tagName === 'BUTTON') {
    const index = Array.from(
      event.target.parentNode.parentNode.children
    ).indexOf(event.target.parentNode)
    toDoList.deleteTask(index)
    renderTasks(toDoList.getTasks())
  }
}

// Event listener to add a new task when the "Add" button is clicked
addButton.addEventListener('click', addNewTask)

// Event listener to handle clicks on the task list
taskList.addEventListener('click', handleTaskListClick)

renderTasks(toDoList.getTasks())
