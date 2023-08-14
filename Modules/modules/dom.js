// dom.js
export default function renderTasks(tasks) {
  const taskList = document.getElementById('taskList')
  taskList.innerHTML = ''

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li')
    listItem.textContent = task.title

    if (task.completed) {
      listItem.classList.add('checked')
    }

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'

    listItem.appendChild(deleteButton)
    taskList.appendChild(listItem)
  })
}
