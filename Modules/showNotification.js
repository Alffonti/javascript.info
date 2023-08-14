// Function to show the notification
function showNotification() {
  alert(
    'ES Modules do not work with the File protocol. Run example using a local development server, such as Node.js static-server or VSCode Live Server extension'
  )
}

// Function to handle the button click event
function handleButtonClick(event) {
  // Check if the page URL starts with "file:"
  if (window.location.protocol.startsWith('file:')) {
    showNotification()
  }
}

// Add the event listener to the "Add Task" button
var taskInput = document.getElementById('taskInput')
taskInput.addEventListener('click', handleButtonClick)
